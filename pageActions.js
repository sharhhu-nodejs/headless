/*
* @Author: Administrator
* @Date:   2017-09-10 20:46:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-17 01:40:45
*/
const Action = require('./action.js');

const path = require('path');

class PageAction extends Action {
	constructor(action, page, screenshotRoot) {
		super();
		this.action = action;
		this.page = page;
		this.steps = [];
		this.screenshotRoot = screenshotRoot;
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
	async doEvaluate(actions){
		for(let action of actions){
			console.log(`do page action: evaluate`);
			await this.doScreenshot('page.evaluate.before', `screenshots/evaluate-start-${Date.now()}.png`);
			await this.page.evaluate(action.string);
			await this.doScreenshot('page.evaluate.after', `screenshots/evaluate-after-${Date.now()}.png`);
			await this.sleep(this.actionSleepTime);
		}
	}
	async doExposeFunction(actions){
		for(let action of actions){
			console.log(`do page action: exposeFunction`);
			await this.doScreenshot('page.exposeFunction.before', `screenshots/exposeFunction-start-${Date.now()}.png`);
			await this.page.exposeFunction(action.name, ()=>{
				return action.value;
			});
			await this.doScreenshot('page.exposeFunction.after', `screenshots/exposeFunction-after-${Date.now()}.png`);
			await this.sleep(this.actionSleepTime);
		}
	}

	async doWaitFor(actions){
		for(let action of actions){
			console.log(`do page action: waitFor`);
			await this.doScreenshot('page.waitFor.before', `screenshots/waitFor-start-${Date.now()}.png`);
			if(isNaN(Number(action.timeoutOrSelector))){
				await this.page.waitFor(action.timeoutOrSelector, action.options);
			}else{
				await this.page.waitFor(parseInt(action.timeoutOrSelector), action.options);
			}
			await this.doScreenshot('page.waitFor.after', `screenshots/waitFor-after-${Date.now()}.png`);
			await this.sleep(this.actionSleepTime);
		}
	}

	async doClick(actions){
		for(let action of actions){
			console.log(`do page action: click`);
			var arg = {};
			if(action.delay){
				arg.delay = action.delay;
			}
			await this.doScreenshot('page.click.before', `screenshots/click-start-${Date.now()}.png`, arg, action.selector);
			await this.page.click(action.selector, arg);
			await this.doScreenshot('page.click.after', `screenshots/click-after-${Date.now()}.png`, arg, action.selector);
			await this.sleep(this.actionSleepTime);
		}
	}

	async doType(actions){
		for(let action of actions){
			console.log(`do page action: type`);
			var arg = {};
			if(action.delay){
				arg.delay = action.delay;
			}
			console.log(action, 'type');
			await this.doScreenshot('page.type.before', `screenshots/type-start-${Date.now()}.png`, arg);
			await this.page.type(action.text, arg);
			await this.doScreenshot('page.type.after', `screenshots/type-after-${Date.now()}.png`, arg);
			await this.sleep(this.actionSleepTime);
		}
	}
	async doPress(actions){
		for(let action of actions){
			console.log(`do page action: press`);
			await this.doScreenshot('page.press.before', `screenshots/press-before-${Date.now()}.png`, {});
			console.log(action, 'press');
			await this.page.press(action.key, action);
			await this.doScreenshot('page.press.after', `screenshots/press-after-${Date.now()}.png`, {});
			await this.sleep(this.actionSleepTime);
		}
	}
	async doKeyboard(actions){
		for(let action of actions){
			for(let arg of action.arguments){
				console.log(`do page action: keyboard-${action.name}`);
				await this.doScreenshot(`page.keyboard.${action.name}.before`, `screenshots/keyboard-before-${Date.now()}.png`, arg);
				console.log(action, arg, 'keyboard');
				await this.page.keyboard[action.name](arg);
				await this.doScreenshot(`page.keyboard.${action.name}.after`, `screenshots/keyboard-after-${Date.now()}.png`, arg);
				await this.sleep(this.actionSleepTime);
			}
		}
	}
	async doMouse(actions){
		for(let action of actions){
			console.log(`do page action: mouse-${action.name}`);
			await this.doScreenshot(`page.mouse.${action.name}.before`, `screenshots/mouse-before-${Date.now()}.png`, action.arguments);
			await this.page.mouse[action.name](...action.arguments);

			await this.doScreenshot(`page.mouse.${action.name}.after`, `screenshots/mouse-after-${Date.now()}.png`, action.arguments);
			await this.sleep(this.actionSleepTime);
		}
	}

	async doTouchscreen(actions){
		for(let action of actions){
			console.log(`do page action: touchscreen-${action.name}`);
			await this.doScreenshot(`page.touchscreen.${action.name}.before`, `screenshots/touchscreen-before-${Date.now()}.png`, action.arguments);
			await this.page.touchscreen[action.name](...action.arguments);
			await this.doScreenshot(`page.touchscreen.${action.name}.after`, `screenshots/touchscreen-after-${Date.now()}.png`, action.arguments);
			await this.sleep(this.actionSleepTime);
		}
	}
	async doFocus(actions){
		for(let action of actions){
			console.log(`do page action: focus-${action.selector}`);
			await this.doScreenshot(`page.focus.${action.selector}.before`, `screenshots/touchscreen-before-${Date.now()}.png`, action.arguments);
			await this.page.focus(action.selector);
			await this.doScreenshot(`page.focus.${action.selector}.after`, `screenshots/touchscreen-after-${Date.now()}.png`, action.arguments);
			await this.sleep(this.actionSleepTime);
		}
	}
	async doTap(actions){
		for(let action of actions){
			console.log(`do page action: tap-${action.selector}`);
			await this.doScreenshot(`page.tap.${action.selector}.before`, `screenshots/touchscreen-before-${Date.now()}.png`, action.arguments);
			await this.page.tap(action.selector);
			await this.doScreenshot(`page.tap.${action.selector}.after`, `screenshots/touchscreen-after-${Date.now()}.png`, action.arguments);
			await this.sleep(this.actionSleepTime);
		}
	}
	async doHover(actions){
		for(let action of actions){
			console.log(`do page action: hover-${action.selector}`);
			await this.doScreenshot(`page.hover.${action.selector}.before`, `screenshots/touchscreen-before-${Date.now()}.png`, action.arguments);
			await this.page.hover(action.selector);
			await this.doScreenshot(`page.hover.${action.selector}.after`, `screenshots/touchscreen-after-${Date.now()}.png`, action.arguments);
			await this.sleep(this.actionSleepTime);
		}
	}
	async init() {
		for(let action of this.action.actions){
			switch(action.name){
				case 'evaluate':
					console.log(`do page action: exposeFunction`);
					await this.doEvaluate(action.actions);
					break;
				case 'exposeFunction':
					console.log(`do page action: exposeFunction`);
					await this.doExposeFunction(action.actions);
					break;
				case 'waitFor':
					console.log(`do page action: waitFor`);
					await this.doWaitFor(action.actions);
					break;
				case 'click':
					console.log(`do page action: click`);
					await this.doClick(action.actions);
					break;
				case 'type':
					console.log(`do page action: type`);
					await this.doType(action.actions);
					break;
				case 'press':
					console.log(`do page action: press`);
					await this.doPress(action.actions);
					break;
				case 'focus':
					console.log('do page action focus');
					await this.doFocus(action.actions);
					break;
				case 'hover':
					console.log('do page action hover');
					await this.doHover(action.actions);
					break;
				case 'tap':
					console.log('do page action tap');
					await this.doTap(action.actions);
					break;
				case 'keyboard':
					console.log(`do page action: keyboard`);
					await this.doKeyboard(action.actions);
					break;
				case 'mouse':
					console.log(`do page action: mouse`);
					await this.doMouse(action.actions);
					break;
				case 'touchscreen':
					console.log(`do page action: touchscreen`);
					await this.doTouchscreen(action.actions);
					break;
			}
		}
	}
	getSteps(){
		return this.steps;
	}
}


module.exports = PageAction;
