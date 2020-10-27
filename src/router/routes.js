import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import store from '../store'
import Course from '../pages/Course.vue'
import Login from '../pages/Login.vue'


const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/course',
			component: Course,
			beforeEnter: (to, from, next) => {
		        if(store.getters["smeta/getAuthenticated"]){
		        	next()
		        }else {
			        if (to.path != "/login") {
			            next("/login")
			        }
			        else {
			            next()
			        }
			    }
		    }
		},
		{
			path: '/login',
			component: Login,
		},

	]

export default routes;