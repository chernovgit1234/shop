<template>
    <div style="" class="main-product__images images-product">
        <div  class="images-product__slider">
            <swiper 
                class="images-product__swiper"
                :modules="modules"
                :spaceBetween="40"
                :autoplay="{
                  delay: 1000,
                  disableOnInteraction: false,
                }"
            >
                <swiper-slide class="images-product__slide-ibg images-product__slide">
                    <img src="../../img/phoduct/01.jpg" alt="Картинка">
                </swiper-slide>
                <swiper-slide class="images-product__slide-ibg images-product__slide">
                    <img src="../../img/phoduct/01.jpg" alt="Картинка">
                </swiper-slide>
                <swiper-slide class="images-product__slide-ibg images-product__slide">
                    <img src="../../img/phoduct/01.jpg" alt="Картинка">
                </swiper-slide>
                <swiper-slide class="images-product__slide-ibg images-product__slide">
                    <img src="../../img/phoduct/01.jpg" alt="Картинка">
                </swiper-slide>
                <swiper-slide class="images-product__slide-ibg images-product__slide">
                    <img src="../../img/phoduct/01.jpg" alt="Картинка">
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { FreeMode,Navigation,Thumbs,Autoplay} from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";
export default {
  name: "d",  
  props: [''],
  components: {Swiper, SwiperSlide},
  data() {
    return {
      countItems: 0,
      modules: [FreeMode,Navigation,Thumbs,Autoplay],
    }
  },
  methods: {
    
  },
  watch: {
  },
  computed: {
  },
  mounted() {

  }
}
</script>