
//示例vuex使用，请自行修改状态
const BreakCrumbs = {
	state: {
		matched: [],
		active: '',
	},
	actions: {
		updateRouter(context, data){
			console.log(data);
			context.commit('setRouter', data);
		}
	},
	mutations: {
		setRouter(state, data){
			state.matched = data.matched;
			state.active = data.path;
			console.log(state);
		}
	}
}

export default BreakCrumbs