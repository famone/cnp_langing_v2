
import axios from 'axios'

const smeta = {
	namespaced: true,
	state: {
		enterAlert: false
  	},
	mutations: {
		
	},
	actions: {
        async SIGN_UP({commit}, payload){
            
            try {
                const { data } = await axios.post(`https://nikitapugachev.ru/wp-json/np/v1/add/user`, payload)
                return console.log(data)
            }
            catch (err) {
                alert('Ошибочка')
            }
        }
	},
	getters: {

	}
}

export default smeta


