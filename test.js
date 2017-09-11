/*
* @Author: Administrator
* @Date:   2017-09-10 22:02:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-10 23:02:34
*/
module.exports = {
	"url": "https://www.baidu.com",
	"trace": true,
	"console": true,
	"error": true,
	"load": true,
	"pageerror": true,
	"request": true,
	"requestfailed": true,
	"requestfinished": true,
	"response": true,
	"actions":[
		// {
		// 	"name": "element",
		// 	"selectors":[{
		// 		"selector": "input",
		// 		"actions": [
		// 			{
		// 				"name": "click",
		// 				"arguments": {
		// 					"button": "middle",
		// 					"clickCount": 1,
		// 					"delay": 100
		// 				}
		// 			},{
		// 				"name": "dispose",
		// 				"arguments": {}
		// 			},{
		// 				"name": "hover",
		// 				"arguments": {}
		// 			},{
		// 				"name": "tap",
		// 				"arguments": {}
		// 			}
		// 		]
		// 	}]
		// },
		{
			"name": "page",
			"actions":[
				{
					"name": "type",
					"actions": [{
						"text": "123",
						"delay": 100
					}]
				},
				// {
				// 	"name": "press",
				// 	"actions": [{
				// 		"text": "a",
				// 		"delay": 100
				// 	}]
				// },
				// {
				// 	"name": "keyboard",
				// 	"actions": [{
				// 		"name": "down",
				// 		"arguments": ["a", "b"]
				// 	},{
				// 		"name": "up",
				// 		"arguments": ["a", "b"]
				// 	},{
				// 		"name": "sendCharacter",
				// 		"arguments": ["a", "b"]
				// 	}]
				// },
				// {
				// 	"name": "mouse",
				// 	"actions": [{
				// 		"name": "click",
				// 		"arguments": [1, 100, {
				// 			"button": "middle",
				// 			"clickCount": 1,
				// 			"delay": 2
				// 		}]
				// 	},{
				// 		"name": "up",
				// 		"arguments": [1, 100, {
				// 			"button": "middle",
				// 			"clickCount": 1,
				// 		}]
				// 	},{
				// 		"name": "move",
				// 		"arguments": [1, 100, {
				// 			"steps ": 5
				// 		}]
				// 	},{
				// 		"name": "down",
				// 		"arguments": [1, 100, {
				// 			"steps ": 5
				// 		}]
				// 	}]
				// },
				// {
				// 	"name": "touchscreen",
				// 	"actions": [{
				// 		"name": "tap",
				// 		"arguments": [1, 2]
				// 	}]
				// }
			]
		},
		{
			"name": "element",
			"selectors":[{
				"selector": "#su",
				"actions": [
					{
						"name": "click",
						"arguments": {
							"button": "middle",
							"clickCount": 20,
							"delay": 100
						}
					}
				]
			}]
		}
	],
	"waitForNavigation":{
		"timeout": 30000,
		"waitUntil": "load",
		"networkIdleTimeout": 2000
	},
	"waitForSelector": {
		"selector": "img",
		"arguments": {
			"visible": true,
			"timeout": 30000
		}
	}

}