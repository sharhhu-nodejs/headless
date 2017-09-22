const DEVICES = require('../config/DeviceDescriptors.js');

const headless = require('../headless.js');
const doAction = require('./doActions.js');
const Logger = require('../logger.js');
const fs = require('fs');
const path = require('path');

const config = require('../config/config.js');


let autoName = 1;

function sleep(timeout){
	var promise = new Promise((resolve, reject) => {
		setTimeout(function(){
			resolve();
		}, timeout);
	});
	return promise;
}

async function getPage(browser){

	let page;
	try{
		// get new Page
		page = await browser.newPage();
	}catch(e){
		console.error(`open new page error. maybe browser has closed: ${e.message}`);
		console.log(`try to reload the browser and create a new page...`);
		await headless.reloadBrowser();
		let _browser = await headless.getBrowser();
		page = await _browser.newPage();
		console.log(`reload the browser success, and create a new page succes! continue...`);
	}

	return page;	
}

async function startViewPort(browser, viewports, mjson){
	var viewportsRecord = [];
	for(let viewport of viewports){
		console.log(viewport);
		let viewportStep = {
			name: viewport.name,
			steps: [],
			logFile: `logs/${autoName++}-${viewport.name}-${Date.now()}.log`,
			trace: `traces/trace-${Date.now()}.json`
		}
		var logger = new Logger(path.resolve(__dirname, '../public', viewportStep.logFile));
		let page = await getPage(browser);
		// 设置请求头
		if(viewport.headers || mjson.headers){
			let headers = (viewport.headers || mjson.headers);
			await page.setExtraHTTPHeaders(headers);
		}
		// 设置cookies
		if(viewport.cookies || mjson.cookies){
			let cookies = (viewport.cookies || mjson.cookies);
			await page.setCookie(...cookies);
		}
		// 注册函数
		if(viewport.exposeFunctions || mjson.exposeFunctions){
			let exposeFunctions = (viewport.exposeFunctions || mjson.exposeFunctions);
			for(let exposeFun of exposeFunctions){
				await page.exposeFunction(exposeFun.name, async (...args)=>{
					return await page.evaluate(exposeFun.fun, ...args);
				});
			}
		}
		// event listener start
		if(viewport.console || mjson.console){
			console.log('console listener');
			page.on('console', function(args){
				// console.log('console event');
				var str = "";
				for (let i = 0; i < args.length; ++i){
					str += `${args[i]} `;
				}
				logger.getLogger('console').trace(str);
			})
		}
		if(viewport.frameattached || mjson.frameattached){
			console.log('frameattached listener');
			page.on('frameattached', function(args){
				// console.log('frameattached event');
				logger.getLogger('frameattached').trace(...args);
			})
		}
		if(viewport.framedetached || mjson.framedetached){
			console.log('framedetached listener');
			page.on('framedetached', function(args){
				// console.log('framedetached event');
				logger.getLogger('framedetached').trace(...args);
			})
		}
		if(viewport.framenavigated || mjson.framenavigated){
			console.log('framenavigated listener');
			page.on('framenavigated', function(args){
				// console.log('framenavigated event');
				logger.getLogger('framenavigated').trace(...args);
			})
		}

		if(viewport.error || mjson.error){
			console.log('error listener');
			page.on('error', function(args){
				// console.log('error event');
				logger.getLogger('error').trace(...args);
			})
		}
		if(viewport.request || mjson.request){
			console.log('request listener');
			page.on('request', function(request){
				// console.log('request event');
				logger.getLogger('request').trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
			});
		}
		if(viewport.requestfailed || mjson.requestfailed){
			console.log('requestfailed listener');
			page.on('requestfailed', function(request){
				// console.log('requestfailed event');
				logger.getLogger('requestfailed').trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
			})
		}
		if(viewport.requestfinished || mjson.requestfinished){
			console.log('requestfinished listener');
			page.on('requestfinished', function(request){
				// console.log('requestfinished event');
				logger.getLogger('requestfinished').trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
			})
		}
		if(viewport.response || mjson.response){
			console.log('response listener');
			page.on('response', async function(response){
				// console.log('response event');
				logger.getLogger('response').trace(`[${response.url}] [${response.status}] [${response.ok}] [${JSON.stringify(response.headers)}]`);
			})
		}

		let loadStartTime = Date.now();
		logger.getLogger('pageInfo').info(`load start ${Date.now()}`);
		console.log('load listener');
		page.on('load', async function(){
			// console.log('load event');
			var time = Date.now() - loadStartTime;
			console.log('time load: ', time);
			logger.getLogger('pageInfo').info(`load end ${Date.now()}.
				custom time: ${time}
			`);
		});
		// set viewport
		if(viewport.name in DEVICES){
			var device = DEVICES[viewport.name];
			await page.setViewport(device.viewport);
			await page.setUserAgent(device.userAgent);
		}else{
			await page.setViewport(viewport.viewport || config.defaultDevices.viewport);
			await page.setUserAgent(viewport.userAgent || mjson.userAgent || config.defaultDevices.userAgent);
		}
		if(viewport.trace || mjson.trace){

			await page.tracing.start({
				path: path.resolve(__dirname, '../public/', viewportStep.trace), 
				screenshots: true
			});
		}
		try{
			await page.goto(viewport.url || mjson.url);
		}catch(e){
			await page.close();
			throw e;
		}

		var beforePath = `screenshots/page-beforeDoAction-${Date.now()}.png`;
		viewportStep.steps.push({
			actionName: 'page.DoAction.before',
			args: {},
			screenshotName: beforePath
		});
		await page.screenshot({
			fullPage: true,
			path: path.resolve(__dirname, '../public', beforePath)
		});
		try{
			console.log('mjson.actions start');
			let steps = await doAction(page, viewport.actions || mjson.actions, path.resolve(__dirname, '../public'));
			viewportStep.steps = viewportStep.steps.concat(steps);
			console.log('mjson.actions end');
		}catch(e){
			// 防止tracing在下次启动的时候报错
			await page.tracing.stop();
			await page.close();
			console.error(e);
			throw e;
		}

		if(mjson.waitForClose){
			await sleep(mjson.waitForClose);
		}

		var afterPath = `screenshots/page-afterDoAction-${Date.now()}.png`;
		viewportStep.steps.push({
			actionName: 'page.DoAction.after',
			args: {},
			screenshotName: afterPath
		});
		await page.screenshot({
			fullPage: true,
			path: path.resolve(__dirname, '../public', afterPath)
		});
		if(viewport.trace || mjson.trace){
			await page.tracing.stop();
			logger.getLogger('pageInfo').info(`tracing stop`);
		}
		logger.getLogger('pageInfo').info(`page closed`);
		await page.close();
		viewportsRecord.push(viewportStep);
	}

	return viewportsRecord;
}



module.exports = startViewPort;