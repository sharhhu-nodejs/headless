<!-- 
使用说明：

1、使用方式：
<custom-timeline direction="center">

	<custom-timeline-item v-for="i in 100">
		icon部分提供的slot：
		slot="icon"
		header部分提供的slot：
		slot="time"
		slot="title"
		content部分提供的slot：
		slot="content"
	</custom-timeline-item>
</custom-timeline>

请配合custom-timeline-item使用，或者自己构建timelineitem，参考custom-timeline-item.vue

2、direction说明：
可选参数： center、right。默认不提供是left；

3、详细示例可参考下面的<slot>的内容
<slot>
	<custom-timeline-item v-for="i in 20" :key="i">
		<div slot="icon">
			<Icon type="ios-analytics"></Icon>
		</div>
		<div slot="time">30.08.2016</div>
		<div slot="title">Lorem ipsum dolor</div>
		<div slot="content">
			<div class="media">
				<div class="media-left">
					<a >
						<img class="media-object img-responsive" src="../../pages/dev/p1.svg" alt="...">
					</a>
				</div>
				<div class="media-body">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
				</div>
			</div>
		</div>
	</custom-timeline-item>
</slot>
-->
<template>
	<div>
		<ul class="custom-timeline" :class="direction ? 'is-'+direction : ''">
            <slot></slot>
        </ul>
	</div>
</template>
<script type="text/javascript">
	import CustomTimelineItem from './custom-timeline-item.vue';
	export default {
		name: 'custom-timeline',
		components: {
			CustomTimelineItem
		},
		props: {
			direction: {
				type: String
			}
		}
	}
</script>

<style lang="less">
.custom-timeline {
  position: relative;
  margin: 0;
  padding: 0;
  list-style: none;
	img{
		max-width: 100%;
	}
}
.custom-timeline:before {
  position: absolute;
  content: ' ';
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(0, 0, 0, 0.1);
  left: 50%;
  z-index: 0;
}
.custom-timeline-item {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  min-height: 40px;
  z-index: 1;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
.custom-timeline-icon {
 background-color: #eeeeee;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-flex: 0 0 40px;
      -ms-flex: 0 0 40px;
          flex: 0 0 40px;
  margin: 20px 0;
}
.custom-timeline-time {
  font-size: 16px;
  padding: 0;
  margin: 0;
}
.custom-timeline-title {
  font-size: 13px;
  padding: 0;
  margin: 0;
  color: #777;
}
.custom-timeline-heading {
  margin: 0 auto 15px auto;
  text-align: center;
}
@media (min-width: 768px) {
  .custom-timeline {
    padding: 10px 0;
  }
  .custom-timeline:before {
    left: 20px;
  }
  .custom-timeline-heading {
    margin: 0 0 15px 0;
    text-align: left;
  }
  .custom-timeline.is-right .custom-timeline-heading {
    text-align: right;
  }
  .custom-timeline.is-center:before {
    left: 50%;
  }
  .custom-timeline.is-right:before {
    left: auto;
    right: 20px;
  }
  .custom-timeline-item {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
    -webkit-align-items: flex-start;
        -ms-flex-align: start;
            align-items: flex-start;
    margin: 20px 0;
  }
  .custom-timeline-item + .custom-timeline-item {
    margin-top: 40px;
  }
  .custom-timeline-icon {
    margin: 0;
  }
}
.custom-timeline-info {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-flex: 1;
      -ms-flex: 1;
          flex: 1;
  padding: 0 15px;
  width: 100%;
}
.custom-timeline.is-right .custom-timeline-icon {
  -webkit-order: 1;
      -ms-flex-order: 1;
          order: 1;
}
@media (min-width: 768px) {
  .custom-timeline.is-center .custom-timeline-icon {
    position: absolute;
    left: calc(~"50% - 40px / 2");
  }
  .custom-timeline.is-center .custom-timeline-info {
    -webkit-flex-direction: row;
        -ms-flex-direction: row;
            flex-direction: row;
  }
  .custom-timeline.is-center .custom-timeline-heading,
  .custom-timeline.is-center .custom-timeline-content {
    -webkit-flex: 50% 0 0;
        -ms-flex: 50% 0 0;
            flex: 50% 0 0;
  }
  .custom-timeline.is-center .custom-timeline-heading.is-last,
  .custom-timeline.is-center .custom-timeline-content.is-last {
    -webkit-order: 1;
        -ms-flex-order: 1;
            order: 1;
  }
  .custom-timeline.is-center .custom-timeline-heading {
    text-align: right;
    padding-right: 35px;
  }
  .custom-timeline.is-center .custom-timeline-heading.is-last {
    text-align: left;
    padding-left: 35px;
  }
  .custom-timeline.is-center .custom-timeline-heading.is-last + .custom-timeline-title-content {
    padding-right: 35px;
  }
  .custom-timeline.is-center .custom-timeline-heading:not(.is-last) + .custom-timeline-content {
    padding-left: 35px;
  }
}
</style>