<template>
	<div style="padding: 20px;">
		<h3>
    		测试基于
    		<a 
    		target="_blank" 
    		href="https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#">
    			puppeteer
    		</a>、
    		<a 
    		target="_blank"
    		href="https://developers.google.com/web/updates/2017/04/headless-chrome">
    			headless chrome
    		</a>、
    		<a 
    		target="_blank"
    		href="https://nodejs.org/api/">
    			nodejsv8.5
    		</a>、
    		<a 
    		target="_blank"
    		href="http://koajs.com/">
    			koa2.0
    		</a>
    		<br>
    		<br>
        	关于keyCode: 
        	<a 
        	target="_blank" 
        	href="https://www.w3.org/TR/uievents-key/#key-attr-values">
        		W3C
        	</a>
        	<br>
        	<br>
        	关于dom选择符，填写跟jQuery选择器一样的形式即可。
        	<br>
        	<br>
        	关于page和element说明，page操作可以理解为document的操作，而element操作是dom元素本身的操作。
        	<br>
        	<br>
    	</h3>
    	<h3>
    		关于接口以及参数: 
    		<a 
    		target="_blank" 
    		href="https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#">
    			puppeteer
    		</a>
    		<br>
    		<br>
    		目前提供的接口，只是puppeter的一部分，已经在后台封装ok。电脑上的UA测试没问题，目前发现的移动端UA无法输入文字，待考证。
    	</h3>

    	<h3 style="margin-top: 70px;">
    		关于测试结果的使用，默认会给每个页面的操作进行截屏，结果呈现就是操作截图。
    		<br><br>
    		截图都带有before和after名称，代表操作的前后截图。
    		<br><br>
    		log日志文件，记录了页面的所有日志，标志了request、response、console等。
    		<br><br>
    		trace文件是记录性能的文件，功能类似chrome devtools下面的Network面板记录的网络请求及性能。
    		<br><br>
    		如果要适应trace查看，请将此trace文件下载到本地，然后打开<a href="https://chromedevtools.github.io/timeline-viewer/" target="_blank">https://chromedevtools.github.io/timeline-viewer/</a>，将下载的文件拖入打开的页面即可。
    	</h3>
	</div>
</template>