<template>
	<section id="coursepage">
		<div class="container wide-container">
			<div class="sad">
				<div class="col-lg-8 col-md-8">
				<iframe :src="getVideoLink" width="100%" webkitallowfullscreen frameborder="0" allow="autoplay; fullscreen" allowfullscreen="allowfullscreen" id="videplayer"></iframe>
			</div>
			<div class="col-lg-4 col-md-4">
				<div class="under-scroll">
					<h3>Бюджетная фуд-съемка для начинающих</h3>
				<div class="learn__item-descr">12 Уроков • 1 час 48 мин</div>
				</div>
				<div class="scroll-row">
					<div class="lesson-btn" 
					v-for="(lesson, index) in lessons" 
					:key="index"
					:class="{actLesson: lesson.active}"
					@click="changeLesson(index)"> 
						<div class="lesson-title">
							<p v-if="lesson.name.length > 33">{{index + 1}}.  {{lesson.name.substring(0,33)+"..."}}</p>
							<p v-else>{{index + 1}}.  {{(lesson.name)}}</p>
						</div>
						<p>{{lesson.time}}</p>
					</div>
				</div>
			</div>
			</div>
		</div>
	</section>
</template>


<script>
import {mapState} from 'vuex'

	export default{
		methods: {
			changeLesson(index){
				this.lessons.forEach(item =>{
					item.active = false
				})
				this.lessons[index].active = true

				this.activeLink = this.lessons[index].video

			}
		},
		mounted(){
			this.$store.dispatch('smeta/getLessons')
		},
		computed:{
			getVideoLink(){
				return `https://player.vimeo.com/video/${this.activeLink}`
			},
			...mapState('smeta', ['lessons'])
		},
		data(){
			return{
				activeLink: '474126326',
			}
		}
	}
</script>


<style scoped>
#coursepage{
	padding: 40px 0;
	min-height: calc(100vh - 123px);
}
#coursepage .sad .col-lg-8{
	padding-left: 0;
	padding-right: 0;
}
.learn__item-descr{
	margin: 10px 0;
}
.under-scroll{
	padding-left: 22px;
}
.lesson-btn{
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;
	background-color: transparent;
	border:none;
	padding: 13px 22px;
	transition: all .3s ease-in-out;
	cursor: pointer;
}
.actLesson{
	background-color: #2E97E6;
}
.lesson-btn p{
	font-size: 16px;
	font-weight: 600;
}
#videplayer{
	width: calc(100% - 20px);
	min-height: 500px;
}
.lesson-title{
	overflow:hidden;
	max-width: 85%;
}
.lesson-title p{
	white-space: nowrap;
}
.wide-container {
    max-width: 1410px;
}

.scroll-row{
	overflow-y: scroll;
	height: 400px;
	padding-right: 10px;
}







.scroll-row::-webkit-scrollbar {
	width: 3px;
	margin-left: 15px;
	border-radius: 5px;
	border:none;
}

/* Track */
.scroll-row::-webkit-scrollbar-track {
	background: #1A1A1A;
	border-radius: 3px;
}

/* Handle */
.scroll-row::-webkit-scrollbar-thumb {
	background: #2E97E6;
	border-radius: 3px;
}

/* Handle on hover */
.scroll-row::-webkit-scrollbar-thumb:hover {
	background: #1A1A1A;
	border-radius: 3px;
}




@media (max-width: 1025px) {
	#coursepage{
		padding: 0;
	}
	#videplayer{
		width: 100%;
		min-height: 550px;
	}
}
@media (max-width: 786px) {
	#coursepage{
		padding: 0;
	}
	#videplayer{
		width: 100%;
		min-height: 415px;
	}
}
@media (max-width: 767px) {
 	
}
@media (max-width: 672px) {
	
}
@media (max-width: 512px) {
	#videplayer{
		width: 100%;
		min-height: 200px;
	}
	.lesson-btn{
		padding: 13px 12px;
	}
	.lesson-btn p{
		font-size: 14px;
	}
	#coursepage{
		padding: 0;
	}
}
@media (max-width: 390px) {
	
}
@media (max-width: 320px) {

}
</style>