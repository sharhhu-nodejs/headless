<template>
	<div>
		<table class="ivu-table" v-if="list.length">
			<thead>
				<tr>
					<th class="index">序号</th>
					<th>测试名称</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item, index) in list" :key="index" title="点击查看详细情况">
					<td class="index">{{index + 1}}</td>
					<td class="t-name" @click="goDetail(item)">
						{{item}}
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default {

		data(){
			return{
				list: []
			}
		},
		methods: {
			async getList(){
				try{
					this.list = await this.$axios.get('/list');
				}catch(e){
					this.list = [];
				}
			},
			goDetail(item){
				this.$router.push('detail/'+item);
			}
		},
		mounted(){
			this.getList();
		}
	}
</script>
<style lang="less">
	.ivu-table{
		width: 100%;
		border-collapse: collapse;
		.index{
			padding: 0 15px;
			width: 100px;
			text-align: center;
		}
		.t-name{
			cursor: pointer;
		}
		tbody tr:hover{
			td{
				background-color: #ddd;
			}
			background-color: #ddd;
		}
	}
</style>