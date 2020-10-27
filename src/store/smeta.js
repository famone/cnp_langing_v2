
import axios from 'axios'

const smeta = {
	namespaced: true,
	state: {
		user: null,
		token: null
  	},
	mutations: {
		SET_TOKEN(state, token) {
            state.token = token;
        },

        SET_USER(state, user) {
            state.user = user;
        },
	},
	actions: {
		 async AUTH_REQUEST({ commit, dispatch }, payload) {
            try {
                const { data } = await axios.post(`https://nikitapugachev.ru/wp-json/jwt-auth/v1/token`, payload)
                return dispatch('VALIDATE', data)
            }
            catch (err) {
            	alert('Тута ошибочка')
            }
        },
        async VALIDATE({ commit, state }, user) {
            if (user) {
                commit("SET_TOKEN", user.token);
                commit("SET_USER", user);
            }

            if (!state.user) {
                return
            }

            try {
                const response = await axios({
                    url: `https://nikitapugachev.ru/wp-json/jwt-auth/v1/token/validate`,
                    method: 'post',
                    headers: {
                        'Authorization': `Bearer ${user.token}`
                    }
                });

                localStorage.setItem("user", JSON.stringify(user));
                commit("SET_TOKEN", user.token);
                commit("SET_USER", user);
            }
            catch (err) {
                localStorage.removeItem("user");
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
            }
        },
         async SIGN_OUT({ commit }) {
            localStorage.removeItem("user");
            commit("SET_TOKEN", null);
            commit("SET_USER", null);
        }
	},
	getters: {
  		getUser(state) {
            return state.user
        },
        getAuthenticated(state) {
            return state.token && state.user
        }
	}
}

export default smeta


