<template>
    <section class="products-slider">
        <div class="products-slider__container">
            <div class="products-slider__header">
                <h2 class="products-slider__title">Хиты продаж</h2>
                <router-link :to="'/catalog'" class="products-slider__more">Перейти в каталог</router-link>
            </div>
            <div class="products-slider__slider ">
                <swiper 
                  class="products-slider__swiper"
                  :slidesPerView="num"
                  :spaceBetween="25"
                  :modules="modules"
                  :autoplay="{
                    delay: 4000,
                    disableOnInteraction: false,
                  }"
                  :freeMode="true"
                >
                    <swiper-slide 
                      class="products-slider__slide"
                      v-for="(product, index) in products"
                      :key="index"
                    >
                    <router-link :to="'/catalog'">
                        <article class="product-card">
                            <a href="" class="product-card__image">
                                <span class="product-card__item-image-ibg product-card__item-image-ibg_contain">
                                    <img :src="require('../../img/product-card/' + product.img)" alt="Картинка">
                                </span>
                            </a>
                            <div class="product-card__body">
                                <h4 class="product-card__title">
                                    <a href="" class="product-card__link-title">Нож Лиса</a>
                                </h4>
                                <div class="product-card__info info-product-card">
                                    <div class="info-product-card__size">95х18</div>
                                    <div class="info-product-card__materials">Орех, Алюминий</div>
                                </div>
                                <div class="product-card__rating rating rating_set">
                                    <div class="rating__body">
                                        <div class="rating__active"></div>
                                        <div class="rating__items">
                                            <input type="radio" class="rating__item" value="1" name="rating">
                                            <input type="radio" class="rating__item" value="2" name="rating">
                                            <input type="radio" class="rating__item" value="3" name="rating">
                                            <input type="radio" class="rating__item" value="4" name="rating">
                                            <input type="radio" class="rating__item" value="5" name="rating">
                                        </div>
                                    </div>
                                    <div class="rating__value">3</div>
                                    <div class="rating__info">12 отзывов</div>
                                </div>
                                <div class="product-card__footer">
                                    <div class="product-card__price">2 719 р.</div>

                                </div>

                            </div>
                        </article>
                    </router-link>
                        
                    </swiper-slide>
                </swiper>
                <div class="products-slider__dotts dotts"></div>
            </div>
        </div>
    </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import {Autoplay, FreeMode} from "swiper";
import "swiper/swiper-bundle.css";
import "swiper/swiper.min.css";

export default {
	name: "",  
	components: {
		Swiper,
		SwiperSlide,
	},
	data() {
		return {
			modules: [ Autoplay, FreeMode],
			products: [
				{ img: "image-02.jpg", text: 'Гарантия 100% возврата денежных средств', rating: '3'},
                { img: "image.jpg", text: 'Доставка по России, Казахстану и Белоруссии', rating: '3'},
				{ img: "image.jpg", text: 'Возможность оформление заказа без регистрации', rating: '3'},
                { img: "image.jpg", text: 'Скидки постоянным покупателям', rating: '3'},
                { img: "image.jpg", text: 'Гарантия 100% возврата денежных средств', rating: '3'},
                { img: "image.jpg", text: 'Доставка по России, Казахстану и Белоруссии', rating: '3'},
				{ img: "image.jpg", text: 'Возможность оформление заказа без регистрации', rating: '3'},
                { img: "image.jpg", text: 'Скидки постоянным покупателям'},
				
			],
            num: null,
            width: 0,
		}
	},
	computed: {
	},
    watch: {
      width() {
        if (this.width > 1555) {
            this.num = 4; 
        }          
        if (this.width < 1555 && this.width > 1111) {
            this.num = 3; 
        }
        if (this.width < 1111  && this.width > 699) {
            this.num = 2; 
        } 
        if (this.width < 699  && this.width > 222) {
            this.num = 1; 
        } 
      }
    },
	methods: {
		updateWidth() {
            this.width = window.innerWidth;
        },
	},
    created() {
        window.addEventListener('resize', this.updateWidth);
        
        if(window.innerWidth > 1555) {
            this.num = 4; 
        }
        if (window.innerWidth < 1555 && window.innerWidth > 1111) {
            this.num = 3; 
        }
        if (window.innerWidth < 1111  && window.innerWidth > 699) {
            this.num = 2; 
        } 
        if (window.innerWidth < 699  && window.innerWidth > 222) {
            this.num = 1; 
        } 
    },
}
</script>

