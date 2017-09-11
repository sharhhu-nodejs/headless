/*
* @Author: Administrator
* @Date:   2017-09-10 20:46:11
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 23:06:07
*/

class PageAction {
	constructor(action, page) {
		this.action = action;
		this.page = page;

		this.init();
	}
	sleep(timeout){
		var promise = new Promise((resolve, reject) => {
			setTimeout(function(){
				resolve();
			}, timeout);
		});
		return promise;
	}
	async doType(actions){
		for(let action of actions){
			console.log(`do page action: type`);
			await this.page.screenshot({path: `./screenshots/type-start-${Date.now()}.png`});
			await this.page.type(action.text, {delay: action.delay});
			await this.page.screenshot({path: `./screenshots/type-end-${Date.now()}.png`});
			await this.sleep(1000);
		}
	}
	async doPress(actions){
		for(let action of actions){
			console.log(`do page action: press`);
			await this.page.screenshot({path: `./screenshots/press-start-${Date.now()}.png`});
			await this.page.press(action);
			await this.page.screenshot({path: `./screenshots/press-end-${Date.now()}.png`});
		}
	}
	async doKeyboard(actions){
		for(let action of actions){
			for(let arg of action.arguments){
				console.log(`do page action: keyboard-${action.name}`);
				await this.page.screenshot({path: `./screenshots/keyboard-${action.name}-start-${Date.now()}.png`});
				await this.page.keyboard[action.name](arg);
				await this.page.screenshot({path: `./screenshots/keyboard-${action.name}-end-${Date.now()}.png`});
			}
		}
	}
	async doMouse(actions){
		for(let action of actions){
			console.log(`do page action: mouse-${action.name}`);
			await this.page.screenshot({path: `./screenshots/mouse-${action.name}-start-${Date.now()}.png`});
			await this.page.mouse[action.name](...action.arguments);
			await this.page.screenshot({path: `./screenshots/mouse-${action.name}-end-${Date.now()}.png`});
		}
	}

	async doTouchscreen(actions){
		for(let action of actions){
			console.log(`do page action: touchscreen-${action.name}`);
			await this.page.screenshot({path: `./screenshots/touchscreen-${action.name}-start-${Date.now()}.png`});
			await this.page.touchscreen[action.name](...action.arguments);
			await this.page.screenshot({path: `./screenshots/touchscreen-${action.name}-end-${Date.now()}.png`});
		}
	}
	async init() {
		for(let action of this.action.actions){
			switch(action.name){
				case 'type':
					console.log(`do page action: type`);
					this.doType(action.actions);
					break;
				case 'press':
					console.log(`do page action: press`);
					this.doPress(action.actions);
					break;
				case 'keyboard':
					console.log(`do page action: keyboard`);
					this.doKeyboard(action.actions);
					break;
				case 'mouse':
					console.log(`do page action: mouse`);
					this.doMouse(action.actions);
					break;
				case 'touchscreen':
					console.log(`do page action: touchscreen`);
					this.doTouchscreen(action.actions);
					break;
			}
		}
	}
}


module.exports = PageAction;
