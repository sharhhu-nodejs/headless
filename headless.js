const puppeteer = require('puppeteer');

module.exports = (async function(){
	const browser = await puppeteer.launch({headless: false});
	const page = await browser.newPage();
	page.injectFile('./libs/jquery.js');
	console.log('init exports');
	return {
		browser,
		page
	}
})();
