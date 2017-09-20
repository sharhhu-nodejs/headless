/*
* @Author: Administrator
* @Date:   2017-09-10 20:59:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-17 01:40:56
*/

const Action = require('./action.js');
const path = require('path');
class ElementActions extends Action {
	constructor(action, page, screenshotRoot) {
		super();
		this.action = action;
		this.page = page;
		this.screenshotRoot = screenshotRoot;
		this.steps = [];
		this.actionSleepTime = 1000;
	}

	async doScreenshot(actionName, screenshotName, args, selector){
		this.steps.push({
			actionName: actionName,
			args: args,
			selector: selector,
			screenshotName: screenshotName
		});
		await this.page.screenshot({
			fullPage: true,
			path: path.join(this.screenshotRoot, screenshotName)
	});
	}

	async init(){
		console.log('ElementActions', this.action.selectors);
		for(let selector of this.action.selectors){
			console.log('selector', selector);
			let elements = await this.page.$$(selector.selector);
			for(let action of selector.actions){
				for(let el of elements){
					console.log(`do element action: ${action.name}`);
					await this.doScreenshot(`element.${action.name}.before`, `screenshots/${action.name}-before-${Date.now()}.png`, action.arguments, selector);
					if(action.name === 'uploadFile'){
						console.log(el[action.name], action.arguments)
						await el[action.name](...action.arguments);
					}else{
						await el[action.name](action.arguments);
					}
					await this.doScreenshot(`element.${action.name}.after`, `screenshots/${action.name}-after-${Date.now()}.png`, action.arguments, selector);
					await this.sleep(this.actionSleepTime);
				}
			}
		}
	}
	getSteps(){
		return this.steps;
	}
}

module.exports = ElementActions;