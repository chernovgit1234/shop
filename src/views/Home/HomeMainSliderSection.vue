<template>
    <main class="page page_home">
		<section class="page__main-block main-block">
			<div class="main-block__container">
				<div class="main-block__body">
					<div class="main-block__slider">
						<swiper
						  class="main-block__swiper"
						  :parallax="true"
                          @slideChange="onSlideChange"
						  :navigation="false"
						  :modules="modules"
						  :autoplay="{
						    delay: 500,
						    disableOnInteraction: true,
						  }"
						>
							<swiper-slide 
							   class="main-block__slide slide-main-block"
							   v-for="(slideContent, index) in 3"
                               :key="index"
							>
								<div class="slide-main-block__content">
									<h2 data-swiper-parallax="-100" class="slide-main-block__title">Интернет магазин сертифицированных</h2>
									<div data-swiper-parallax="-150" class="slide-main-block__sub-title">златоустовских ножей</div>
									<div data-swiper-parallax="-200" class="slide-main-block__text">
										Добро пожаловать на официальный сайт «ЗЛАТМАКС»! В нашем магазине представлен наиболее широкий выбор Златоустовских ножей от Златоустовских Оружейных Фабрик и компаний, мы являемся официальными поставщиками.
									</div>
								</div>
								<a href="" data-swiper-parallax="-300" class="slide-main-block__button button">Подробнее</a>
							</swiper-slide>
						
						</swiper>
						<div class="main-block__controll controll-main-block">
							<div class="controll-main-block__dotts"></div>
							<div class="controll-main-block__fraction fraction-controll">
								<span class="fraction-controll__current">{{slide}}</span> / <span class="fraction-controll__all">{{slidesCount}}</span>
							</div>
						</div>
					</div>
					<div class="main-block__media media-main-block">
						<div class="media-main-block__body">
							<div class="media-main-block__image">
								<img src="../../img/mainpage/main-block/image.png" alt="Картинка">
							</div>

						</div>
					</div>
				</div>
				<div class="main-block__advantages advantages-main">
					<div 
					  class="advantages-main__item"
					  v-for="(advantage, ind) in advantages"
					  :key="ind"
					>
						<div class="advantages-main__icon">
							<img :src="require('../../img/mainpage/main-block/icons/' + advantage.img)">
						</div>
						<div class="advantages-main__text">
						  {{advantage.text}}
						</div>
					</div>
					
				</div>
			</div>
		</section>
	</main>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue/swiper-vue";
import { Parallax, Navigation ,Autoplay} from "swiper";
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
			modules: [Parallax, Navigation, Autoplay],
			slides: 3,
			advantages: [
				{ img: "02.svg", text: 'Гарантия 100% возврата денежных средств'},
                { img: "03.svg", text: 'Доставка по России, Казахстану и Белоруссии'},
				{ img: "02.svg", text: 'Возможность оформление заказа без регистрации'},
                { img: "02.svg", text: 'Скидки постоянным покупателям'},
				
			],
		}
	},
	computed: {
		slidesCount() {
		return this.slides;
		}
	},
	methods: {
		onSlideChange(swiper) {
		const currentSlide = document.querySelector('.fraction-controll__current');
		currentSlide.innerHTML = swiper.realIndex+1;
		}
	},
	mounted() {
		const currentSlide = document.querySelector('.fraction-controll__current');
		currentSlide.innerHTML = 1;
	}
}
</script>

