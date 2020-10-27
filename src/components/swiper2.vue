<template>
  <div class="slider second-slider wow">
    <swiper ref="mySwiper" :options="swiperOptions" class="slider">
      <swiper-slide v-for="img in images">
        <img :src="img" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>


<script>
import {mapState} from 'vuex'

export default{
    data(){
        return{
            swiperOptions: {
                    slidesPerView: 1,
                  spaceBetween: 0,
                  draggable: true,
                  loop: true,    
                  autoplay: true,
                  infinite: true,
                  effect: 'fade',
                  speed: 1000,
            },
            images: [
                'https://nikitapugachev.ru/wp-content/themes/np/assets/img/second-slider__img1-min.jpg',
                'https://nikitapugachev.ru/wp-content/themes/np/assets/img/second-slider__img2-min.jpg',
                'https://nikitapugachev.ru/wp-content/themes/np/assets/img/second-slider__img3-min.jpg'
            ]
        }  
    },
    computed: {
        swiper(){
            return this.$refs.mySwiper.$swiper
        }
    }
}
</script>