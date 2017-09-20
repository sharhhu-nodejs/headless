
//示例vuex使用，请自行修改状态
const Login = {
	state: {
		isLogin: false,
		isLoging: false,
	},
	actions: {
		doLogin(context, data){
			// console.log(context);
			context.dispatch('setLogin', true);
		},
		doLogout(state){
			
		},

		setLogin({commit}, data){
			commit('setLoginState', data)
		}

	},
	mutations: {
		setLoginState(state, data){
			state.isLoging = data;
		}
	},
	getters: {
		loginState (state) {
			return state.isLogin
		}
	}
}

export default Login