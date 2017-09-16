/*
* @Author: Administrator
* @Date:   2017-09-10 20:59:17
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-12 20:59:08
*/
class ElementActions {
	constructor(action, page) {
		this.action = action;
		this.page = page;
		this.init();
	}
	async init(){
		console.log('ElementActions', this.action.selectors);
		for(let selector of this.action.selectors){
			console.log('selector', selector);
			let elements = await this.page.$$(selector.selector);
			for(let action of selector.actions){
				for(let el of elements){
					console.log(el.id, el.classList);
					console.log(`do element action: ${action.name}`);
					await this.page.screenshot({path: `./screenshots/${action.name}-start-${Date.now()}.png`});
					console.log(el);
					await el[action.name](action.arguments);
					await el.dispose();
					await this.sleep(10000);
					await this.page.screenshot({path: `./screenshots/${action.name}-end-${Date.now()}.png`});
				}
			}
		}
	}
	sleep(timeout){
		var promise = new Promise((resolve, reject) => {
			setTimeout(function(){
				resolve();
			}, timeout);
		});
		return promise;
	}
}

module.exports = ElementActions;