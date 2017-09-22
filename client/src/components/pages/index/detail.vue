<template>
	<div>
		 <div class="swiper-container" ref="swiper">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide p-swiper-slide" v-for="viewport in viewports">
	            	<Card :bordered="true">
	            		<p slot="title" class="step-title">视窗: {{viewport.name}}</p>
						<div class="sub-swiper swiper-container">
							<div class="swiper-wrapper">
								<div class="swiper-slide" v-for="step in viewport.steps">
									<Card :dis-hover="true" :bordered="false">
							            <p slot="title" class="step-title">步骤名: {{step.actionName}}</p>
							            <p style="text-align: center;">
							            	<img 
							            	@click="showImg(step)"
							            	class="step-img img" 
							            	:src="prefix(step.screenshotName)" alt="">
							            </p>
							        </Card>
								</div>
							</div>
							<div class="sub-pagination swiper-pagination"></div>
						</div>
						<p class="viewport-bottom">
							查看加载记录：
							打开<a href="https://chromedevtools.github.io/timeline-viewer/" target="_blank">https://chromedevtools.github.io/timeline-viewer/</a>，将此json文件拖入即可：
							<a :href="prefix(viewport.trace)" target="_blank">{{viewport.trace}}</a>
						</p>
						<p>log日志<a :href="prefix(viewport.logFile)" target="_blank">{{viewport.logFile}}</a></p>
	            	</Card>
	            </div>
	        </div>
	        <!-- Add Pagination -->
	        <div class="p-pagination swiper-pagination"></div>
	        <!-- Add Arrows -->
	        <div class="swiper-button-next"></div>
	        <div class="swiper-button-prev"></div>
	    </div>
	    <Modal 
		width="90%"
	    v-model="modal.show">
	    	<div slot="header">
	    		{{modal.header}}
	    	</div>
	    	<div style="text-align: center;">
	    		<img style="max-width: 100%;" class="img" :src="modal.img" alt="">
	    	</div>
	    </Modal>
	</div>
</template>
<script type="text/javascript">
	require('swiper/dist/css/swiper.css');
	export default {
		name: 'detail',
		data(){
			return {
				viewports: [],
				modal: {
					header: '',
					img: '',
					show: false
				}
			}
		},
		methods: {
			showImg(step){
				this.modal = {
					img: this.prefix(step.screenshotName),
					header: step.actionName,
					show: true
				}

			},
			prefix(str){
				return this.$axios.defaults.baseURL + '/' + str;
			},
			async renderView(){
				var data = await this.$axios.get(`/getJson/${this.$route.params.name}`);
				document.title = data.testName;
				console.log(data);
				this.viewports = data.viewports;
				this.$nextTick(()=>{
					this.initSwiper();
				})
				
			},
			initSwiper(){
				console.log(123);
				 var swiper = new Swiper(this.$refs.swiper, {
				 	preventClicks: false,
				 	runCallbacksOnInit: true,
			        nextButton: '.swiper-button-next',
			        prevButton: '.swiper-button-prev',
			        pagination: '.p-pagination',
			        paginationClickable: true,
			        paginationBulletRender: function (swiper, index, className) {
			            return '<span class="pagination-bullet ' + className + '">' + (index + 1) + '</span>';
			        }
			    });

				this.$nextTick(()=>{	
				    var swiper = new Swiper('.sub-swiper', {
				        pagination: '.sub-pagination',
				        paginationType: 'progress',
				        scrollbarHide: true,
				        slidesPerView: 'auto',
				        centeredSlides: true,
				        nested: true,
				        spaceBetween: 30,
				        grabCursor: true
				    });
				})

    
			}
		},
		mounted(){
			if(this.$route.params.name == null){
				console.log(123, this)
				this.$Notice.error({
					title: '错误提示',
					desc: '错误的路径！'
				});
				this.$router.push('index');
			}
			this.renderView();
			console.log(this.$route.params.name)
		}
	}
</script>
<style lang="less">
	.swiper-container{
		height: 650px;
		img{
			max-width: 100%;
			max-height: 300px;
		}
	}
	.img{
		box-shadow: 1px 2px 20px -4px #3d3f45;
	}
	.sub-swiper{
		height: 500px;
	}
	.viewport-bottom{
		margin: 20px 0;
	}
	.step-title{
		text-align: center;
	}
	.pagination-bullet.swiper-pagination-bullet {
        width: 20px;
        height: 20px;
        text-align: center;
        line-height: 20px;
        font-size: 12px;
        color:#000;
        opacity: 1;
        background: rgba(0,0,0,0.2);
    }
    .pagination-bullet.swiper-pagination-bullet-active {
        color:#fff;
        background: #007aff;
    }
     .vertical-center-modal{
        display: flex;
        align-items: center;
        justify-content: center;

        .ivu-modal{
            top: 0;
        }
    }
</style>