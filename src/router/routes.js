import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import store from '../store'
import Course from '../pages/Course.vue'
import Login from '../pages/Login.vue'
import Signup from '../pages/Signup.vue'
import Recovery from '../pages/Recovery.vue'
import Politika from '../pages/Politika.vue'
import Soglashenie from '../pages/Soglashenie.vue'
import Platezhi from '../pages/Platezhi.vue'


const routes = [
		{
			path: '/',
			component: Home
		},
		{
			path: '/course',
			component: Course,
			beforeEnter: (to, from, next) => {
				if(!store.getters["smeta/getAuthenticated"] || !store.getters["smeta/checkAcces"]){
					 next("/")
					 return
				}else{
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
		{
			path: '/politika',
			component: Politika,
		},
		{
			path: '/soglashenie',
			component: Soglashenie,
		},
		{
			path: '/platezhi',
			component: Platezhi,
		},

	]

export default routes;