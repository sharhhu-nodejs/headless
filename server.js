const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const fs = require('fs');
const headless = require('./headless.js');

var PageAction = require('./pageActions.js');
var ElementAction = require('./elementActions.js');


const log4js = require('log4js');
log4js.configure({
  appenders: {
  	console: { type: 'file', filename: './logs/puppeteer-console.log' },
  	error: { type: 'file', filename: './logs/puppeteer-error.log' },
  	request: { type: 'file', filename: './logs/puppeteer-request.log' },
  	pageerror: { type: 'file', filename: './logs/puppeteer-pageerror.log' },
  	requestfailed: { type: 'file', filename: './logs/puppeteer-requestfailed.log' },
  	requestfinished: { type: 'file', filename: './logs/puppeteer-requestfinished.log' },
  	response: { type: 'file', filename: './logs/puppeteer-response.log' }
  },
  categories: { default: { appenders: [
  		"console",
		"error",
		"request",
		"pageerror",
		"requestfailed",
		"requestfinished",
		"response"
  	], level: 'trace' } }
});

const consoleLogger = log4js.getLogger('console');
const errorLogger = log4js.getLogger('error');
const requestLogger = log4js.getLogger('request');
const pageerrorLogger = log4js.getLogger('pageerror');
const requestfailedLogger = log4js.getLogger('requestfailed');
const requestfinishedLogger = log4js.getLogger('requestfinished');
const responseLogger = log4js.getLogger('response');

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
	ctx.body = '/json';
	console.log('headless start');
	var {page} = await headless.then();
	const mjson = require('./test.js');
	// logger.trace('Entering cheese testing');

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
		await page.tracing.start({path: 'json.json', screenshots: true});
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
			errorLogger.trace(...args);
		})
	}
	if(mjson.request){
		console.log('request listener');
		page.on('request', function(request){
			console.log('request event');
			requestLogger.trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
		});
	}
	if(mjson.requestfailed){
		console.log('requestfailed listener');
		page.on('requestfailed', function(request){
			console.log('requestfailed event');
			requestfailedLogger.trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
		})
	}
	if(mjson.requestfinished){
		console.log('requestfinished listener');
		page.on('requestfinished', function(request){
			console.log('requestfinished event');
			requestfinishedLogger.trace(`[${request.url}] [${request.resourceType}] [${request.method}] [${JSON.stringify(request.headers)}]`);
		})
	}
	if(mjson.response){
		console.log('response listener');
		page.on('response', async function(response){
			console.log('response event');
			responseLogger.trace(`[${response.url}] [${response.status}] [${response.ok}] [${JSON.stringify(response.headers)}]`);
		})
	}
	console.time('loadingPage');
	console.log('load listener');
	page.on('load', async function(){
		console.timeEnd('loadingPage');
		console.log('load event');
	})
	await page.goto(mjson.url);
	await page.screenshot({path: `./screenshots/page-beforeDoAction-${Date.now()}.png`});
	if(mjson.actions){
		console.log('mjson.actions');
		for(let action of mjson.actions){
			switch(action.name){
				case 'page':
					console.log('mjson.actions: page');
					var pageAction = new PageAction(action, page);
					break;
				case 'element':
					console.log('mjson.actions: element');
					var elementAction = new ElementAction(action, page);
					elementAction.init();
					break;
				default:
					break;
			}
		}
	}
	await page.screenshot({path: `./screenshots/page-afterDoAction-${Date.now()}.png`});
	if(mjson.trace){
		page.tracing.stop();
	}

	console.log(ctx.body);
	console.log('screen shot');
})
app.use(router.routes());
app.listen(9999);