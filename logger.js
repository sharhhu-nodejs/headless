const fs = require('fs');
const moment = require('moment');
class Logger {
	constructor(fileName) {
		this.fileName = fileName;
		this.logTag = 'default';
	}
	async log(msg){
		fs.appendFile(this.fileName, `[${moment(new Date()).format('YYYY-MM-DD HH:mm:ss')}] ${msg}\t\n\r`, ()=>{});
	}
	async trace(msg){
		this.log(`[trace] ${this.logTag} - ${msg}`);
	}
	async info(msg){
		this.log(`[info] ${this.logTag} - ${msg}`);
	}
	async error(msg){
		this.log(`[error] ${this.logTag} - ${msg}`);
	}
	async warn(msg){
		this.log(`[warn] ${this.logTag} - ${msg}`);
	}
	async debug(msg){
		this.log(`[debug] ${this.logTag} - ${msg}`);
	}
	async fatal(msg){
		this.log(`[fatal] ${this.logTag} - ${msg}`);
	}
	getLogger(tagName){
		this.logTag = tagName || this.logTag;
		return this;
	}
}

module.exports = Logger;