const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const path = require('path');

const fs = require('fs');
const headless = require('./headless.js');

var PageAction = require('./pageActions.js');
var ElementAction = require('./elementActions.js');

const Log = require('log');

const LOG_DIR = 'logs';

let autoName = 1;

const Logger = require('./logger.js');


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

	const {browser} = await headless.then();
	// get json
	const mjson = require('./test.js');
	
	// get new Page
	const page = await browser.newPage();

	let resJson = {
		steps: [],
		trace: `trace-${Date.now()}.json`
	};
	resJson.logFile = `/logs/${autoName++}-${mjson.name}-${Date.now()}.log`;
	var logger = new Logger(path.resolve(__dirname, '/public', resJson.logFile));

	// if(mjson.waitForNavigation){
	// 	console.log('headless start waitForNavigation');
	// 	await page.waitForNavigation(mjson.waitForNavigation);
	// }
	// if(mjson.waitForSelector){
	// 	console.log('headless start waitForSelector');
	// 	await page.waitForSelector(mjson.waitForSelector.selector, mjson.waitForSelector.arguments);
	// }
	if(mjson.trace){
		console.log('tracing.start');
		await page.tracing.start({path: path.resolve(__dirname, '/public', resJson.trace), screenshots: true});
	}
	if(mjson.console){
		console.log('console listener');
		page.on('console', function(args){
			console.log('console event');
			var str = "";
			for (let i = 0; i < args.length; ++i){
				str += `${args[i]} `;
			}
			consoleLogger.trace(str);
		})
	}
	if(mjson.error){
		console.log('error listener');
		page.on('error', function(args){
			console.log('error event');
			logger.trace(...args);
		})
	}
	if(mjson.request){
		console.log('request listener');
		page.on('request', function(request){
			console.log('request event');
			logger.trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
		});
	}
	if(mjson.requestfailed){
		console.log('requestfailed listener');
		page.on('requestfailed', function(request){
			console.log('requestfailed event');
			logger.trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
		})
	}
	if(mjson.requestfinished){
		console.log('requestfinished listener');
		page.on('requestfinished', function(request){
			console.log('requestfinished event');
			logger.trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
		})
	}
	if(mjson.response){
		console.log('response listener');
		page.on('response', async function(response){
			console.log('response event');
			logger.trace(`[${response.url}] [${response.status}] [${response.ok}] [${JSON.stringify(response.headers)}]`);
		})
	}
	console.time('loadingPage');
	console.log('load listener');
	page.on('load', async function(){
		console.timeEnd('loadingPage');
		console.log('load event');
	})
	await page.goto(mjson.url);
	var beforePath = `./screenshots/page-beforeDoAction-${Date.now()}.png`;
	resJson.steps.push({
		actionName: 'page.DoAction.before',
		args: {},
		screenshotName: beforePath
	});
	await page.screenshot({path: path.resolve(__dirname, '/public', beforePath)});
	if(mjson.actions){
		console.log('mjson.actions start');
		for(let action of mjson.actions){
			switch(action.name){
				case 'page':
					console.log('mjson.actions: page');
					var pageAction = new PageAction(action, page);
					pageAction.init();
					resJson.steps = resJson.steps.concat(pageAction.getSteps);
					break;
				case 'element':
					console.log('mjson.actions: element');
					var elementAction = new ElementAction(action, page);
					elementAction.init();
					resJson.steps = resJson.steps.concat(elementAction.getSteps);
					break;
				default:
					break;
			}
		}
		console.log('mjson.actions end');
	}
	var afterPath = `./screenshots/page-afterDoAction-${Date.now()}.png`;
	await page.screenshot({path: path.resolve(__dirname, '/public', afterPath)});
	resJson.steps.push({
		actionName: 'page.DoAction.after',
		args: {},
		screenshotName: afterPath
	})
	if(mjson.trace){
		page.tracing.stop();
	}
	await page.close();

	ctx.body = resJson;

})
app.use(router.routes());
app.listen(9999);