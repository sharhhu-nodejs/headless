/*
* @Author: Administrator
* @Date:   2017-09-10 21:53:08
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 22:22:15
*/
class test{
	constructor(props) {
		// console.log(props);
		this.test2(111)
	}

	async test2(argument){
		await console.log('test2');
	}
}
var json = require('./test.js');
const log4js = require('log4js');
log4js.configure({
  appenders: {
  	console: { type: 'file', filename: './logs/puppeteer-console.log' },
  	error: { type: 'file', filename: './logs/puppeteer-error.log' },
  	request: { type: 'file', filename: './logs/puppeteer-request.log' },
  	pageerror: { type: 'file', filename: './logs/puppeteer-pageerror.log' },
  	requestfailed: { type: 'file', filename: './logs/puppeteer-requestfailed.log' },
  	requestfinished: { type: 'file', filename: './logs/puppeteer-requestfinished.log' },
  	response: { type: 'file', filename: './logs/puppeteer-response.log' }
  },
  categories: { default: { appenders: [
  		"console",
		"error",
		"request",
		"pageerror",
		"requestfailed",
		"requestfinished",
		"response"
  	], level: 'trace' } }
});

const consoleLogger = log4js.getLogger('console');
const errorLogger = log4js.getLogger('error');
const requestLogger = log4js.getLogger('request');
const pageerrorLogger = log4js.getLogger('pageerror');
const requestfailedLogger = log4js.getLogger('requestfailed');
const requestfinishedLogger = log4js.getLogger('requestfinished');
const responseLogger = log4js.getLogger('response');

responseLogger.trace('asdasdsadasdasd')
console.log(responseLogger);

new test();