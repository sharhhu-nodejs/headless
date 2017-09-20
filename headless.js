const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');


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
		let browser;
		try{
			var browserPoint = fs.readFileSync('openedbrowser', {encoding: 'utf8'});
			console.log(`reconnected browser at ${browserPoint}`);
			browser = await puppeteer.connect({
				browserWSEndpoint: browserPoint
			});
			console.log(`reconnected browser success!`);
		}catch(e){
			console.error(`reconnect browser error`, e);
			console.log(`loading a new browser, with options: ${JSON.stringify(options || this.options)}`);
			browser = await puppeteer.launch(options || this.options);			
			console.log('load new browser success!');
		}
		var endPoint = browser.wsEndpoint();
		console.log(`update browser endPoint: ${endPoint}`);
		fs.writeFile('openedbrowser', endPoint, function(err){
			if(err){
				console.error('write browser endPoint error: '+ err.message);
			}
		});
		this.browser = browser;
		return this.browser;
	}
}
module.exports = new HeadLess(opt);
