const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const path = require('path');


const config = require('./config/config.js');

const DEVICES = require('./config/DeviceDescriptors.js');

const startViewPort = require('./utils/startViewport.js');

const readline = require('readline');
const fs = require('fs');

const opn = require('opn');
const headless = require('./headless.js');

const DEFAULT_USERAGENT = config.defaultDevices.userAgent;

// const Log = require('log');

const LOG_DIR = 'logs';

let autoName = 1;

const Logger = require('./logger.js');
const doAction = require('./utils/doActions.js');


const koaStatic = require('koa-static');


const wrapperResponse = function(data, code, msg){
	return {
		stateCode: code || 0,
		stateMsg: msg || 'success',
		data: data
	}
}

app.use(async function (ctx, next) {
	ctx.response.set('Access-Control-Allow-Origin', '*');
	await next();
});
app.use(koaStatic('public/'));


router.all('/getJson/:name', async (ctx, next) => {	
	try{
		ctx.body = wrapperResponse(require(path.resolve(__dirname, `./public/test-list/${ctx.params.name}`)));
	}catch(e){
		ctx.body = wrapperResponse([], 100, 'error request!');
	}
})
router.get('/list', async (ctx, next)=>{

	let res = await (function(){
		var result = new Promise((resolve, reject) => {
			var data = [];
			let readStream = fs.createReadStream('records/test-list');
			readStream.on('error', function(err){
				resolve(data);
			})
			.on('readable', function(){
				const rl = readline.createInterface({
					input: readStream
				});
				rl.on('line', (line) => {
					if(!/^\s*$/gim.test(line)){
				  		data.push(line);	
					}
				}).on('close', () => {
					resolve(data);
				}).on('close', () => {
					resolve(data);
				});
			})
			
		});
		return result;
	})();
	ctx.body = wrapperResponse(res);

});

router.post('/addDevices', async (ctx, next)=>{
	console.log(ctx.body);
	var devicePath = path.resolve(__dirname, './data/devices/devices.json');
	var devices = require(devicePath);
	devices = devices.concat(ctx.request.body);
	fs.writeFile(devicePath, JSON.stringify(devices), function(err){
		if(!err){
			return ctx.body = wrapperResponse('添加成功！');
		}
		ctx.body = err.message;
	})
});

router.get('/getConfig', async (ctx, next)=>{
	var deviceDescriptiors = require('./config/DeviceDescriptors.js');
	ctx.body = wrapperResponse({
		devices: deviceDescriptiors,
		actions: require('./config/actions.js')
	});
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
	let resJson = {
		viewports: []
	};
	// get json
	const mjson = require('./test.js');

	if(!mjson.viewports || !mjson.viewports.length){
		mjson.viewports = [config.defaultDevices];
	}
	var viewportSteps = await startViewPort(browser, mjson.viewports, mjson);

	resJson.viewports = viewportSteps;
	var name = `${autoName}-${Date.now()}.json`;
	fs.writeFile(path.resolve(__dirname, 'public/test-list/', name), JSON.stringify(resJson), function(err){
		if(!err){
			fs.appendFile('records/test-list', `${name}\n`, function(err){
				if(err){
					console.error(err);
				}
			});
		}
	});
	ctx.body = wrapperResponse(resJson);

})
app.use(router.routes());
app.listen(9999, function(){
	// opn('http://localhost:9999/json', {app: 'chrome'});
});