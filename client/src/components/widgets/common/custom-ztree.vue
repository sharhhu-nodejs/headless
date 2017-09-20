<!-- 
simpleData提供初始化参数：
{
	enable: true,//激活
	idKey: "id",//条目id的属性值
	pIdKey: "pId",//条目pid的属性值
	rootPId: "-2"//根目录的id
}
data提供数据，树形数据。

open指定打开的树节点
-->
<template>
	<div style="font-size: 18px;">
		<ul ref="ztree" id="ztree" class="ztree"></ul>
	</div>
</template>
<script>
	import '../../../assets/libs/zTree_v3/css/metroStyle/metroStyle.css';
	import '../../../assets/libs/zTree_v3/js/jquery.ztree.core.min.js';

	export default {
		name: 'custom-ztree',
		mounted(){
			this.initTree();
		},
		methods: {
			initTree() {
				if (this.inited) {
					return;
				}
				var setting = {
					view: {
						dblClickExpand: false,
						showLine: false,
						selectedMulti: false,
						showIcon: true,
						nameIsHTML: true
					},
					data: {
						simpleData: this.simpleData
					},
					callback: {
						beforeClick:(treeId, treeNode)=>{
							var zTree = $.fn.zTree.getZTreeObj(treeId);
							this.$emit('ztree:before:click', treeNode, zTree);
							if (treeNode.isParent) {
								zTree.expandNode(treeNode);
								return false;
							} else {
								return true;
							}
						},
						onClick: (e, treeId, treeNode) =>{
							var zTree = $.fn.zTree.getZTreeObj(treeId);
							this.$emit('ztree:click', treeNode, zTree);
						}
					}
				};
				var zTree = $.fn.zTree.init($(this.$refs.ztree), setting, this.data);
				var node = zTree.getNodesByFilter((node) => {
					return node.id == this.open;
				}, true);
				if (node) {
					zTree.expandNode(node, true, true, true, true);
					zTree.selectNode(node, true, true, true, true);
					$('#ztree_' + node.tId + '_a', this.$el).trigger('click');
				}
				this.inited = true;
			},
		},
		props: {
			simpleData: {
				type: Object,
				default(){
					return {
						enable: true,
						idKey: "id",
						pIdKey: "pId",
						rootPId: "-2"
					}
				}
			},
			data: {
				type: Array,
				required: true,
				default(){
					return [];
				}
			},
			open: {
				type: [String, Number],
				default: ''
			}
		}
	}
</script>