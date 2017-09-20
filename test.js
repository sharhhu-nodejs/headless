/*
* @Author: Administrator
* @Date:   2017-09-10 22:02:23
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-17 01:32:44
*/
module.exports = {
	"name": "autoTest",
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
	"userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.90 Safari/537.36",
	"headers": {
		"clientHeader": "autotest",
		"power-by": "puppeteer"
	},
	"viewports": [{
		name: 'test',
		viewport: {
			width: 400,
			height: 300,
			deviceScaleFactor: 1,
			isMobile: false,
			hasTouch: false,
			isLandscape: false
		},
		"actions":[
			{
				"name": "element",
				"selectors":[{
					"selector": "input",
					"actions": [
						{
							"name": "click",
							"arguments": {
								"button": "middle",
								"clickCount": 1,
								"delay": 100
							}
						},{
							"name": "hover",
							"arguments": {}
						},{
							"name": "tap",
							"arguments": {}
						}
					]
				}]
			},
			{
				"name": "page",
				"actions":[
					{
						"name": "type",
						"actions": [{
							"text": "123333333333",
							"delay": 100
						}]
					},
					{
						"name": "click",
						"actions": [{
							"selector": "#su"
						}]
					},
					{
						"name": "press",
						"actions": [{
							"text": "a",
							"delay": 100
						}]
					},
					{
						"name": "keyboard",
						"actions": [{
							"name": "down",
							"arguments": ["a", "b"]
						},{
							"name": "up",
							"arguments": ["a", "b"]
						},{
							"name": "sendCharacter",
							"arguments": ["a", "b"]
						}]
					},
					{
						"name": "mouse",
						"actions": [{
							"name": "click",
							"arguments": [1, 100, {
								"button": "middle",
								"clickCount": 1,
								"delay": 2
							}]
						},{
							"name": "up",
							"arguments": [1, 100, {
								"button": "middle",
								"clickCount": 1,
							}]
						},{
							"name": "move",
							"arguments": [1, 100, {
								"steps ": 5
							}]
						},{
							"name": "down",
							"arguments": [1, 100, {
								"steps ": 5
							}]
						}]
					},
					{
						"name": "touchscreen",
						"actions": [{
							"name": "tap",
							"arguments": [1, 2]
						}]
					}
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
								"clickCount": 1,
								"delay": 100
							}
						}
					]
				}]
			}
		],
	}, {
		name: 'test2',
		viewport: {
			width: 1536,
			height: 700,
			deviceScaleFactor: 1,
			isMobile: false,
			hasTouch: false,
			isLandscape: false
		},
	}],
	"actions":[
		{
			"name": "element",
			"selectors":[{
				"selector": "input",
				"actions": [
					{
						"name": "click",
						"arguments": {
							"button": "middle",
							"clickCount": 1,
							"delay": 100
						}
					},{
						"name": "hover",
						"arguments": {}
					},{
						"name": "tap",
						"arguments": {}
					}
				]
			}]
		},
		{
			"name": "page",
			"actions":[
				{
					"name": "type",
					"actions": [{
						"text": "123333333333",
						"delay": 100
					}]
				},
				{
					"name": "click",
					"actions": [{
						"selector": "#su"
					}]
				},
				{
					"name": "press",
					"actions": [{
						"key": '123',
						"text": "a",
						"delay": 100
					}]
				},
				{
					"name": "keyboard",
					"actions": [{
						"name": "down",
						"arguments": ["a", "b"]
					},{
						"name": "up",
						"arguments": ["a", "b"]
					},{
						"name": "sendCharacter",
						"arguments": ["a", "b"]
					}]
				},
				{
					"name": "mouse",
					"actions": [{
						"name": "click",
						"arguments": [1, 100, {
							"button": "middle",
							"clickCount": 1,
							"delay": 2
						}]
					},{
						"name": "up",
						"arguments": [1, 100, {
							"button": "middle",
							"clickCount": 1,
						}]
					},{
						"name": "move",
						"arguments": [1, 100, {
							"steps ": 5
						}]
					},{
						"name": "down",
						"arguments": [1, 100, {
							"steps ": 5
						}]
					}]
				},
				{
					"name": "touchscreen",
					"actions": [{
						"name": "tap",
						"arguments": [1, 2]
					}]
				}
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
							"clickCount": 1,
							"delay": 100
						}
					}
				]
			}]
		}
	]

}