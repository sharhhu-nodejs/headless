const os = require('os');
const networkInfos = os.networkInterfaces();


let addresses = [];
Object.keys(networkInfos).map(function(key){
	if(!/VirtualBox/i.test(key)){
		var publicNets = networkInfos[key].filter((info)=>{
			return !info.internal && info.family.toLowerCase() === 'ipv4' ? true : false;
		});
		addresses.push(...publicNets);
	}
});

module.exports = addresses;
