const puppeteer = require('puppeteer');
const DEVICES = require('puppeteer/DeviceDescriptors');

(async function(){

	const browser = await puppeteer.launch({headless: false});

	const page = await browser.newPage();

	let device = DEVICES["iPhone 6"];

	await page.setViewport(device.viewport);
	await page.setUserAgent(device.userAgent);
	await page.goto("http://www.baidu.com");
	// await page.focus("#index-kw");//mark step 1
	await page.screenshot({path: 'screenshot1.png', fullPage: true});
	await page.type("test");//mark step 1
	await page.tap("#index-bn", {delay: 500});
	await page.screenshot({path: 'screenshot.png'});
	await page.exposeFunction('tester', (name, callback)=>{
		console.log('test', callback);
		callback && callback('test');
		return 'test';
	});
	await page.evaluate(()=>{
		window.tester.console = (arguments)=>{
			console.log(arguments);
			return 'test';
		}
	})
	// await page.exposeFunction('tester.console', ()=>{
	// 	console.log(arguments);
	// 	return 'test';
	// });
})();