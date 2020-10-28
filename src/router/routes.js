import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import store from '../store'
import Course from '../pages/Course.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Recovery from '../pages/Recovery.vue'


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
		{
			path: '/signup',
			component: Signup,
		},
		{
			path: '/recovery',
			component: Recovery,
		},

	]

export default routes;