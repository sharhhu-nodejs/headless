const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const path = require('path');

const DEVICES = require('puppeteer/DeviceDescriptors');


const opn = require('opn');
const fs = require('fs');
const headless = require('./headless.js');

const DEFAULT_USERAGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36";

// const Log = require('log');

const LOG_DIR = 'logs';

let autoName = 1;

const Logger = require('./logger.js');
const doAction = require('./utils/doActions.js');


const koaStatic = require('koa-static');

app.use(koaStatic('public/'));

router.get('/', async (ctx, next)=>{
	var {page} = await headless.then();
	await page.goto('http://www.baidu.com');
	ctx.body = await page.screenshot({path: 'screen.png'});
	console.log(ctx.body);
	console.log('screen shot');
});
router.get('/test', async (ctx, next)=>{
	ctx.body = '/test';
	var {page} = await headless.then();
	await page.tracing.start({path: 'trace.json', screenshots: true});
	await page.goto('http://www.baidu.com');
	page.type('Hello'); // Types instantly
	page.type('World', {delay: 100}); // Types slower, like a user
	await page.screenshot({path: 'screen2.png'});
	page.tracing.stop();
	console.log(ctx.body);
	console.log('screen shot');
});


router.all('/json', async (ctx)=>{
	console.log('headless start');

	const browser = await headless.getBrowser();
	// get json
	const mjson = require('./test.js');
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

	let resJson = {
		steps: [],
		trace: `trace-${Date.now()}.json`
	};
	resJson.logFile = `logs/${autoName++}-${mjson.name || "autoTest"}-${Date.now()}.log`;
	var logger = new Logger(path.resolve(__dirname, 'public', resJson.logFile));
	if(mjson.trace){
		console.log('tracing.start');
		logger.getLogger('pageInfo').info(`tracing start`);
		await page.tracing.start({path: path.resolve(__dirname, 'public/traces', resJson.trace), screenshots: true});
	}
	if(mjson.console){
		console.log('console listener');
		page.on('console', function(args){
			console.log('console event');
			var str = "";
			for (let i = 0; i < args.length; ++i){
				str += `${args[i]} `;
			}
			logger.getLogger('console').trace(str);
		})
	}
	if(mjson.frameattached){
		console.log('frameattached listener');
		page.on('frameattached', function(args){
			console.log('frameattached event');
			logger.getLogger('frameattached').trace(...args);
		})
	}
	if(mjson.framedetached){
		console.log('framedetached listener');
		page.on('framedetached', function(args){
			console.log('framedetached event');
			logger.getLogger('framedetached').trace(...args);
		})
	}
	if(mjson.framenavigated){
		console.log('framenavigated listener');
		page.on('framenavigated', function(args){
			console.log('framenavigated event');
			logger.getLogger('framenavigated').trace(...args);
		})
	}

	if(mjson.error){
		console.log('error listener');
		page.on('error', function(args){
			console.log('error event');
			logger.getLogger('error').trace(...args);
		})
	}
	if(mjson.request){
		console.log('request listener');
		page.on('request', function(request){
			console.log('request event');
			logger.getLogger('request').trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
		});
	}
	if(mjson.requestfailed){
		console.log('requestfailed listener');
		page.on('requestfailed', function(request){
			console.log('requestfailed event');
			logger.getLogger('requestfailed').trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
		})
	}
	if(mjson.requestfinished){
		console.log('requestfinished listener');
		page.on('requestfinished', function(request){
			console.log('requestfinished event');
			logger.getLogger('requestfinished').trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
		})
	}
	if(mjson.response){
		console.log('response listener');
		page.on('response', async function(response){
			console.log('response event');
			logger.getLogger('response').trace(`[${response.url}] [${response.status}] [${response.ok}] [${JSON.stringify(response.headers)}]`);
		})
	}
	let loadStartTime = Date.now();
	logger.getLogger('pageInfo').info(`load start ${Date.now()}`);
	console.time('loadingPage');
	console.log('load listener');
	page.on('load', async function(){
		console.timeEnd('loadingPage');
		console.log('load event');
		logger.getLogger('pageInfo').info(`load end ${Date.now()}.
			custom time: ${Date.now() - loadStartTime}
		`);
	})

	// 设置请求头
	if(mjson.headers){
		await page.setExtraHTTPHeaders(mjson.headers);
	}
	// 设置cookies
	if(mjson.cookies){
		await page.setCookie(...mjson.cookies);
	}
	// 注册函数
	if(mjson.exposeFunctions){
		for(let exposeFun of mjson.exposeFunctions){
			await page.exposeFunction(exposeFun.name, async (...args)=>{
				return await page.evaluate(exposeFun.fun, ...args);
			});
		}
	}

	if(mjson.viewports){
		for(let viewport of mjson.viewports){
			if(viewport.name in DEVICES){
				var device = DEVICES[viewport.name];
				await page.setViewport(device.viewport);
				await page.setUserAgent(device.userAgent);
			}else{
				await page.setViewport(viewport.viewport);
				await page.setUserAgent(viewport.userAgent || mjson.userAgent || DEFAULT_USERAGENT);
			}

			await page.goto(viewport.url || mjson.url);

			var beforePath = `screenshots/page-beforeDoAction-${Date.now()}.png`;
			resJson.steps.push({
				actionName: 'page.DoAction.before',
				args: {},
				screenshotName: beforePath
			});
			await page.screenshot({
				fullPage: true,
				path: path.resolve(__dirname, 'public', beforePath)
			});

			console.log('mjson.actions start');
			let steps = await doAction(page, viewport.actions || mjson.actions, path.resolve(__dirname, 'public'));
			resJson.steps = resJson.steps.concat(steps);
			console.log('mjson.actions end');

			var afterPath = `screenshots/page-afterDoAction-${Date.now()}.png`;
			await page.screenshot({
				fullPage: true,
				path: path.resolve(__dirname, 'public', afterPath)
		});
			resJson.steps.push({
				actionName: 'page.DoAction.after',
				args: {},
				screenshotName: afterPath
			})
		}
	}else{
		await page.setUserAgent(mjson.userAgent || DEFAULT_USERAGENT);
		await page.goto(mjson.url);

		var beforePath = `screenshots/page-beforeDoAction-${Date.now()}.png`;
		resJson.steps.push({
			actionName: 'page.DoAction.before',
			args: {},
			screenshotName: beforePath
		});
		await page.screenshot({
			fullPage: true,
			path: path.resolve(__dirname, 'public', beforePath)
	});

		console.log('mjson.actions start');
		let steps = await doAction(page, mjson.actions, path.resolve(__dirname, 'public'));
		resJson.steps = resJson.steps.concat(steps);
		console.log('mjson.actions end');

		var afterPath = `screenshots/page-afterDoAction-${Date.now()}.png`;
		await page.screenshot({
			fullPage: true,
			path: path.resolve(__dirname, 'public', afterPath)
	});
		resJson.steps.push({
			actionName: 'page.DoAction.after',
			args: {},
			screenshotName: afterPath
		})
	}
	if(mjson.trace){
		page.tracing.stop();
		logger.getLogger('pageInfo').info(`tracing stop`);
	}
	logger.getLogger('pageInfo').info(`page closed`);
	await page.close();
	ctx.body = resJson;

})
app.use(router.routes());
app.listen(9999, function(){
	opn('http://localhost:9999/json', {app: 'chrome'});
});