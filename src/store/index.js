import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import smeta from './smeta'
import inline from './inline'

export default new Vuex.Store({
	modules: {
		smeta,
		inline
	}
}) 