var mixins = {
	methods: {
		/**
			初始化菜单树结构
			data: 数组，包含树形结构
			rootId: 根节点id，此节点不显示
		*/
		initTree(data, rootId){
			var _root = {};
			//找到指定id
			for(var i = 0, len = data.length; i < len; i++){
				if(data[i].pId === rootId){
					_root[i] = data[i];
				}
			}
			//缩减数据
			for(var i in _root){
				var index = data.indexOf(_root[i]);
				index > -1 && data.splice(index, 1);
			}

			if(data){

				for(var i in _root){
					_root[i] = this.getTreeNode(data, _root[i].id, true);
				}
			}
			return _root;
		},
		/**
			获取子节点，
			data：传入menu数组，
			id：父节点id
		*/
		getTreeNode(data, id){
			var children = [];
			var checkedArray = [];
			for(var i = 0, len = data.length; i < len; i++){
				var item = data[i];
				if(item.pId === id){
					children.push(item);
					checkedArray.push(item);
				}
			}
			//继续缩减
			for(let mitem of checkedArray){
				var mindex = data.indexOf(mitem);
				mindex > -1 && data.splice(mindex, 1);
			}
			for(var i = 0, len = children.length; i < len; i++){
				var item = children[i];
				item.children = this.getTreeNode(data, item.id);
			}
			return children;
		}
	}
}

export default mixins