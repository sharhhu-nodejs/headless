/*
* @Author: sharh
* @Date:   2017-09-16 16:06:02
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-17 01:15:36
*/

const path = require('path');
var PageAction = require('../pageActions.js');
var ElementAction = require('../elementActions.js');


module.exports = async function(page, actions, publicPath){
	let steps = [];
	console.log(steps, 'doActions start');
	for(let action of actions){
		switch(action.name){
			case 'page':
				console.log('mjson.actions: page');
				var pageAction = new PageAction(action, page, publicPath);
				await pageAction.init();
				steps = steps.concat(pageAction.getSteps());
				break;
			case 'element':
				console.log('mjson.actions: element');
				var elementAction = new ElementAction(action, page, publicPath);
				await elementAction.init();
				steps = steps.concat(elementAction.getSteps());
				break;
			default:
				break;
		}
	}
	return steps;
	console.log(steps, 'doActions end');
}