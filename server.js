const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();
const path = require('path');
const bodyParser = require('koa-bodyparser');
const KoaLogger = require('koa-logger')
const multer = require('koa-multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
})

const upload = multer({
	storage: storage
});

const PORT = process.env.PORT || 9999;

const config = require('./config/config.js');

const DEVICES = require('./config/DeviceDescriptors.js');

const startViewPort = require('./utils/startViewport.js');

const readline = require('readline');
const fs = require('fs');
const ipAddress = require('./utils/getNetInfo.js')[0];


const opn = require('opn');
const headless = require('./headless.js');

const DEFAULT_USERAGENT = config.defaultDevices.userAgent;



// const Log = require('log');

const LOG_DIR = 'logs';

let autoName = 1;

const Logger = require('./logger.js');
const doAction = require('./utils/doActions.js');
const customDevicePath = path.resolve(__dirname, './data/devices/devices.json');


const deviceDescriptiorsPath = path.resolve(__dirname, './config/DeviceDescriptors.js');

const koaStatic = require('koa-static');


const wrapperResponse = function(data, code, msg){
	return {
		stateCode: code || 0,
		stateInfo: msg || 'success',
		data: data
	}
}

app.use(bodyParser());
app.use(KoaLogger());
app.use(upload.any());
app.use(koaStatic('public/'));

router.use('*', async (ctx, next)=>{
	ctx.response.set('Access-Control-Allow-Origin', '*');
	ctx.response.set('Access-Control-Allow-Headers', 'Content-Type');
	await next();
})
router.options('*', async (ctx, next)=>{
	ctx.response.set('Access-Control-Allow-Origin', '*');
	ctx.response.set('Access-Control-Allow-Headers', 'Content-Type');
	ctx.body = wrapperResponse('');
	// await next();
})
router.post('/uploads', async function(ctx, next){
	console.log(ctx.req.files);
	if(ctx.req.files){
		var fileList = [];
		for(let file of ctx.req.files){
			var dotIndex = file.originalname.lastIndexOf('.');
			fileList.push(`http://${ipAddress.address}:${PORT}/uploads/${file.filename}`);
		}
		ctx.body = wrapperResponse(fileList);
	}else{
		ctx.body = wrapperResponse('', 100, '文件上传失败！');
	}
})
router.all('/getJson/:name', async (ctx, next) => {	
	try{
		ctx.body = wrapperResponse(require(path.resolve(__dirname, `./public/test-list/${ctx.params.name}`)));
	}catch(e){
		ctx.body = wrapperResponse([], 100, 'error request!');
	}
})
router.get('/list', async (ctx, next)=>{
	console.log('list');
	let res = await (function(){
		var result = new Promise((resolve, reject) => {
			var data = [];
			let readStream = fs.createReadStream('records/test-list');
			readStream.on('error', function(err){
				resolve(data);
			});
			const rl = readline.createInterface({
				input: readStream
			});
			rl.on('line', (line) => {
				if(!/^\s*$/gim.test(line)){
			  		data.push(line);	
				}
			}).on('close', () => {
				resolve(data);
			})
		});
		return result;
	})();
	ctx.body = wrapperResponse(res);

});

router.post('/addDevice', async (ctx, next)=>{
	let device = ctx.request.body.device;
	// console.log(device);
	var deviceDescriptiors = require(deviceDescriptiorsPath);
	var devices = require(customDevicePath);
	// console.log(devices, 'devices');
	if(device){
		if(deviceDescriptiors[device.name]){
			return ctx.body = wrapperResponse({}, 100, '设备名已存在！');
		}
		if(devices){
			var index = devices.findIndex((item)=>{
				return item.name === device.name;
			});
			if(index > -1){
				return ctx.body = wrapperResponse({}, 100, '设备名已存在！');
			}
		}
	}else{
		return ctx.body = wrapperResponse({}, 100, '参数格式不正确！');
	}
	devices.push(device);
	try{
		fs.writeFileSync(customDevicePath, JSON.stringify(devices));
		ctx.body = wrapperResponse(device);
	}catch(e){
		ctx.body = e.message;
	};
	
});

router.get('/getConfig', async (ctx, next)=>{
	var deviceDescriptiors = require(deviceDescriptiorsPath);
	var devices = require(customDevicePath);
	ctx.body = wrapperResponse({
		devices: deviceDescriptiors.concat(devices),
		actions: require('./config/actions.js'),
		demoConfigs: require('./test.js')
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

	let mjson = ctx.request.body;
	console.log(JSON.stringify(mjson));
	// mjson.
	// // get json
	// const mjson = require('./test.js');

	if(!mjson.viewports || !mjson.viewports.length){
		mjson.viewports = [config.defaultDevices];
	}
	let viewportSteps;
	try{
		viewportSteps = await startViewPort(browser, mjson.viewports, mjson);
	}catch(e){
		ctx.body = wrapperResponse(e, 100, e.message);
		return;
	}
	resJson.viewports = viewportSteps;
	let name = `${mjson.name}-${autoName}-${Date.now()}.json`;
	resJson.testName = name;

	let res = await (function(){
		var result = new Promise((resolve, reject) => {
			fs.writeFile(path.resolve(__dirname, 'public/test-list/', name), JSON.stringify(resJson), function(err){
				if(!err){
					fs.appendFile('records/test-list', `${name}\n`, function(err){
						if(err){
							return resolve(err);
							console.error(err);
						}
						return resolve();
					});
				}
			});
		});
		return result;
	})();
	if(res){
		ctx.body = wrapperResponse(res);
	}else{
		ctx.body = wrapperResponse(resJson);
	}

})
app.use(router.routes());
app.listen(PORT, function(){
	// opn('http://localhost:9999/json', {app: 'chrome'});
});