const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const headless = require('./headless.js');

router.get('/', async (ctx, next)=>{
	var {page} = await headless.then();
	await page.goto('http://www.baidu.com');
	ctx.body = await page.screenshot({path: 'screen.png'});
	console.log(ctx.body);
	console.log('screen shot');
});
router.get('/test', async (ctx, next)=>{
	ctx.body = '/test';
	var {page} = await headless.then();
	await page.tracing.start({path: 'trace.json', screenshots: true});
	await page.goto('http://www.baidu.com');
	page.type('Hello'); // Types instantly
	page.type('World', {delay: 100}); // Types slower, like a user
	await page.screenshot({path: 'screen2.png'});
	page.tracing.stop();
	console.log(ctx.body);
	console.log('screen shot');
})
app.use(router.routes());
app.listen(9999);