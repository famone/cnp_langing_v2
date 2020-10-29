<template>
	<div class="myheader" :class="{transp: this.$route.path === '/'}">
		<div class="container-fluid">
            <div class="shapka">
            	<router-link to="/" tag="a" class="header__logo wow">
	            	<img src="https://nikitapugachev.ru/wp-content/themes/np/assets/img/Logo.svg">
	            </router-link>

	            <div class="log-row">
	            	<router-link to="/enter" tag="button" class="shapka-btn" v-if="!user">
	            		Войти
	            	</router-link>
	            	<p class="white-txt hidden-xs" v-if="user !== null">{{ user.user_email }}</p>
	            	<router-link to="/course" tag="button" class="shapka-btn" 
	            	v-if="user !== null && acces ">
	            		🔥 Личный кабинет
	            	</router-link>
	            	<div class="no-acces" v-if="user !== null && user.roles.toString() === 'contributor'">
	            		<span class="mdi mdi-eye-off-outline" style="color: #f44336;"> </span> Нет подписки
	            	</div>
	            	<button class="shapka-btn logout" 
	            	v-if="user !== null"
	            	@click="logout">
	            		Выйти
	            	</button>
	            </div>
	            
            </div>
        </div>
     </div>
</template>	


<script>
import {mapGetters, mapActions} from 'vuex'
	export default{
		computed: {
			...mapGetters({ user: "smeta/getUser", acces: "smeta/checkAcces" }),
		},
		methods: {
    		...mapActions({
      			singOut: "smeta/SIGN_OUT",
    		}),

	    	logout() {
	      		this.singOut().then(() => {
	        		this.$router.replace("/enter");
	      		});
	    	}
  		},
	}
</script>


