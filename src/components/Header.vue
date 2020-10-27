<template>
	<div class="myheader" :class="{transp: this.$route.path === '/'}">
		<div class="container-fluid">
            <div class="shapka">
            	<router-link to="/" tag="a" class="header__logo wow">
	            	<img src="https://nikitapugachev.ru/wp-content/themes/np/assets/img/Logo.svg">
	            </router-link>

	            <div class="log-row">
	            	<router-link to="/course" tag="button" class="shapka-btn" v-if="!user">
	            		Войти
	            	</router-link>
	            	<p class="white-txt" v-if="user !== null">Привет, {{ user.user_display_name }}</p>
	            	<router-link to="/course" tag="button" class="shapka-btn" v-if="user !== null">
	            		🔥 Личный кабинет
	            	</router-link>
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
			...mapGetters({ user: "smeta/getUser" }),
		},
		methods: {
    		...mapActions({
      			singOut: "smeta/SIGN_OUT",
    		}),

	    	logout() {
	      		this.singOut().then(() => {
	        		this.$router.replace("/login");
	      		});
	    	}
  		},
	}
</script>


