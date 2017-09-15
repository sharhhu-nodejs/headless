/*
* @Author: Administrator
* @Date:   2017-09-10 20:59:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 23:06:13
*/

const Action = require('./action.js');
class ElementActions extends Action {
	constructor(action, page, screenshotRoot) {
		super();
		this.action = action;
		this.page = page;
		this.screenshotRoot = screenshotRoot;
		this.steps = [];
		this.actionSleepTime = 500;
	}

	async doScreenshot(actionName, screenshotName, args){
		this.steps.push({
			actionName: actionName,
			args: args,
			screenshotName: screenshotName
		});
		await this.page.screenshot({path: path.join(this.screenshotRoot, screenshotName)});
	}

	async init(){
		console.log('ElementActions', this.action.selectors);
		for(let selector of this.action.selectors){
			console.log('selector', selector);
			let elements = await this.page.$$(selector.selector);
			for(let action of selector.actions){
				for(let el of elements){
					console.log(`do element action: ${action.name}`);
					await this.doScreenshot(`element.${action.name}.before`, `./screenshots/${action.name}-before-${Date.now()}.png`, action.arguments);
					await el[action.name](action.arguments);
					await this.doScreenshot(`element.${action.name}.after`, `./screenshots/${action.name}-after-${Date.now()}.png`, action.arguments);
					await this.sleep(1000);
				}
			}
		}
	}
	getSteps(){
		return this.steps;
	}
}

module.exports = ElementActions;