
const log4js = require('log4js');
log4js.configure({
  appenders: {
  	console: { type: 'file', filename: './logs/puppeteer-console.log' }
  },
  categories: { default: { appenders: ["console"], level: 'trace' } }
});

const consoleLogger = log4js.getLogger('console');

log4js.configure({
  appenders: {
    console: { type: 'file', filename: './logs/puppeteer-console2.log' }
  },
  categories: { default: { appenders: ["console"], level: 'trace' } }
});

const errorLogger = log4js.getLogger('error');
const requestLogger = log4js.getLogger('request');
const pageerrorLogger = log4js.getLogger('pageerror');
const requestfailedLogger = log4js.getLogger('requestfailed');
const requestfinishedLogger = log4js.getLogger('requestfinished');
const responseLogger = log4js.getLogger('response');

consoleLogger.trace('1111111111')
errorLogger.trace('1111111111')
requestLogger.trace('1111111111')
pageerrorLogger.trace('1111111111')
requestfailedLogger.trace('1111111111')
requestfinishedLogger.trace('1111111111')
responseLogger.trace('1111111111')

