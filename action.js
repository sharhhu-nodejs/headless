class Action {
	constructor() {
		this.actionSteps = [];
	}

	sleep(timeout){
		var promise = new Promise((resolve, reject) => {
			setTimeout(function(){
				resolve();
			}, timeout);
		});
		return promise;
	}

	setSteps(step){
		this.actionSteps.push(step);
	}
	// methods
}

module.exports = Action;