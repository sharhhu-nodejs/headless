const puppeteer = require('puppeteer');
const path = require('path');

const opt = {
	headless: false,
	dumpio: true
};

class HeadLess {
	constructor(options) {
		this.options = options;
		this.reloadBrowser(options);
	}

	async getBrowser(){
		return this.browser;
	}

	async reloadBrowser(options){
		let browser = await puppeteer.launch(options || this.options);
		this.browser = browser;
		return this.browser;
	}
}
module.exports = new HeadLess(opt);
