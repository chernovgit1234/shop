<template>
<header class="header">
	<div class="header__top top-header">
		<div class="top-header__container">
			<nav class="top-header__menu menu-top-header">
				<ul data-da=".menu__body, 991.98" class="menu-top-header__list">
					<li class="menu-top-header__item menu-top-header__item_catalog"><a href="" class="menu-top-header__link menu-top-header__link_catalog _icon-arrow-bottom">Каталог товаров</a></li>
					<li class="menu-top-header__item"><a href="" class="menu-top-header__link">О нас</a></li>
					<li class="menu-top-header__item"><a href="" class="menu-top-header__link">Оплата и доставка</a></li>
					<li class="menu-top-header__item"><a href="" class="menu-top-header__link">Новости</a></li>
					<li class="menu-top-header__item"><a href="" class="menu-top-header__link">Контакты</a></li>
				</ul>
			</nav>
			
			<div id="tow">Ваш город: определяется...</div>
			<nav hidden class="menu">
				<button type="button" class="menu__icon icon-menu"><span></span></button>
				<div class="menu__body">
				</div>
			</nav>
		</div>
	</div>
	<div class="header__body body-header">
		<div class="body-header__container">
			<a href="" class="body-header__logo"></a>
			<div data-da=".catalog-header__container, 479.98" class="body-header__search">
				<form @submit.prevent="search(searchValue)" class="search-header">
					<button :disabled="!searchValue.length" type="submit" class="search-header__button _icon-search"></button>
					<input v-model="searchValue" autocomplete="off" type="text" name="form[]" data-error="Ошибка" placeholder="Поиск" class="search-header__input">
				</form>
			</div>
			<div class="body-header__actions actions-header">
				
				<div data-da=".top-header__container,991.98,first" class="actions-header__phones phones-header">
					<div data-spoller class="phones-header__items">
						<div class="phones-header__item">
							<a href="tel:88007774967" class="phones-header__phone"><span>8-800-777-49-67</span></a>
							<button type="button" @click="phoneList=!phoneList"  class="phones-header__arrow _icon-arrow-bottom"></button>
							<ul class="phones-header__list" v-if="phoneList">
								<li><a href="tel:88007774968" class="phones-header__phone">8-800-777-49-68</a></li>
								<li><a href="tel:88007774969" class="phones-header__phone">8-800-777-49-69</a></li>
								<li><a href="tel:88007774970" class="phones-header__phone">8-800-777-49-70</a></li>
							</ul>
						</div>
					</div>
					<button type="button" @click="openPopup()" class="phones-header__callback">Заказать звонок</button>
					<PopupTool 
					  :isPopupOpen="isPopupOpen"
					  @closePopup="closePopup"
					  ref="confirmationPopup">
					  <template  v-slot:call>
					    заказ номера
					  </template>
					</PopupTool>
				</div>
		
				<div data-da=".top-header__container,991.98,2" class="actions-header__cart cart-header">
					<router-link :to="'/cart'" class="cart-header__icon _icon-cart"><span>{{totalCount?totalCount:0}}</span></router-link>
					<div class="cart-header__body">
						<div class="cart-header__summ">{{totalSumCount}}₽</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="header__catalog catalog-header">
		<div class="catalog-header__container">
			<nav class="catalog-header__menu menu-catalog">
				<button type="button" class="menu-catalog__back _icon-back">Назад</button>
				<ul class="menu-catalog__list">
					<li class="menu-catalog__item"><button data-parent="1" class="menu-catalog__link">Каталог ножей</button></li>
					<li class="menu-catalog__item"><button data-parent="2" class="menu-catalog__link">Клинковое оружие</button></li>
					<li class="menu-catalog__item"><a href="" class="menu-catalog__link">Сувенирные изделия</a></li>
					<li class="menu-catalog__item"><a href="" class="menu-catalog__link">Фонари ARMYTEK</a></li>
					<li class="menu-catalog__item"><a href="" class="menu-catalog__link">Сопуствующие товары</a></li>
				</ul>
				<div class="menu-catalog__sub-menu sub-menu-catalog">
					<button type="button" class="sub-menu-catalog__back _icon-back">Назад</button>
					<div class="sub-menu-catalog__container">
						<div hidden data-submenu="1" class="sub-menu-catalog__block">
							<div class="sub-menu-catalog__category">
								<a href="" class="sub-menu-catalog__link-category">Категория ножей</a>
							</div>
							<div class="sub-menu-catalog__category">
								<a href="" class="sub-menu-catalog__link-category">Производство ножей</a>
							</div>
							<div class="sub-menu-catalog__category">
								<a href="" class="sub-menu-catalog__link-category">Ножи по маркам стали</a>
							</div>
							<div class="sub-menu-catalog__category">
								<a href="" class="sub-menu-catalog__link-category">Заточка и полировка ножей</a>
							</div>
							<div class="sub-menu-catalog__category">
								<a href="" class="sub-menu-catalog__link-category">Ножевая мастерская</a>
							</div>
							<ul class="sub-menu-catalog__list">
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Разделочные ножи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Туристические ножи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи охотничьи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Булатные ножи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из дамаска</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Тактического назначения</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Метательные ножи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Мачете и кукри</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи кухонные</a></li>
							</ul>
							<ul class="sub-menu-catalog__list">
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи АИР</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи ЗИК</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи ЗЗОСС</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи РОСоружие</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи Оружейник</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Булат Сергея Баранова</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Булат Андрея Умерова</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи Златко</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи Стиль-М</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Оружейная компания</a></li>
							</ul>
							<ul class="sub-menu-catalog__list">
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали 40х102С2М</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали 95х18</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали 100х13м</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали 110х18м-ШД</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали ЭИ-107 ТЦ</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали 50х14МФ</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали AUS-8</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали К340</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали M390</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из стали ЭП-766</a></li>
							</ul>
							<ul class="sub-menu-catalog__list">
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Паста ГОИ</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Алмазная паста</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Бруски и камни для заточки</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Заточные системы</a></li>
							</ul>
							<ul class="sub-menu-catalog__list">
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножевые клинки</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Заготовки для ножей</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Литье для ножей</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Материалы для рукоятей</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Уход за рукоятиями ножей</a></li>
							</ul>
							<div class="sub-menu-catalog__footer">
								<a href="" class="sub-menu-catalog__all">Смотреть все</a>
							</div>
							<div class="sub-menu-catalog__footer">
								<a href="" class="sub-menu-catalog__all">Смотреть все</a>
							</div>
							<div class="sub-menu-catalog__footer">
								<a href="" class="sub-menu-catalog__all">Смотреть все</a>
							</div>
							<div class="sub-menu-catalog__footer">
								<a href="" class="sub-menu-catalog__all">Смотреть все</a>
							</div>
							<div class="sub-menu-catalog__footer">
								<a href="" class="sub-menu-catalog__all">Смотреть все</a>
							</div>
						</div>
						<div hidden data-submenu="2" class="sub-menu-catalog__block">
							<div class="sub-menu-catalog__category">
								<a href="" class="sub-menu-catalog__link-category">Категория ножей</a>
							</div>
							<div class="sub-menu-catalog__category">
								<a href="" class="sub-menu-catalog__link-category">Производство ножей</a>
							</div>
							<div class="sub-menu-catalog__category">
								<a href="" class="sub-menu-catalog__link-category">Заточка и полировка ножей</a>
							</div>
							<ul class="sub-menu-catalog__list">
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Разделочные ножи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Туристические ножи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи охотничьи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Булатные ножи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи из дамаска</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Тактического назначения</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Метательные ножи</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Мачете и кукри</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи кухонные</a></li>
							</ul>
							<ul class="sub-menu-catalog__list">
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи АИР</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи ЗИК</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи ЗЗОСС</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи РОСоружие</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи Оружейник</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Булат Сергея Баранова</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Булат Андрея Умерова</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи Златко</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Ножи Стиль-М</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Оружейная компания</a></li>
							</ul>
							<ul class="sub-menu-catalog__list">
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Паста ГОИ</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Алмазная паста</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Бруски и камни для заточки</a></li>
								<li class="sub-menu-catalog__item"><a href="" class="sub-menu-catalog__link">Заточные системы</a></li>
							</ul>
							<div class="sub-menu-catalog__footer">
								<a href="" class="sub-menu-catalog__all">Смотреть все</a>
							</div>
							<div class="sub-menu-catalog__footer">
								<a href="" class="sub-menu-catalog__all">Смотреть все</a>
							</div>
							<div class="sub-menu-catalog__footer">
								<a href="" class="sub-menu-catalog__all">Смотреть все</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</div>
	</div>
</header>
</template>

<script>
	import * as menu from '../js/libs/script.js'
    import PopupTool from "./tools/Popup.vue";
    
    export default {
		name: "headerComp",  
		components: {
          PopupTool 
		},
		methods: {
           openPopup() {
         
			this.isPopupOpen = true
		  },
		  closePopup() {
			this.isPopupOpen = false
		  },
		  search(searchValue) {
			this.$store.dispatch('SEARCH', searchValue)
			this.$router.push('/catalog')
		  }
		},
		computed: {
		  totalCount() {
			return this.$store.getters.totalCount
		  },
		  totalSumCount() {
			return this.$store.getters.totalSumCount
		  },
          cart() {
			return this.$store.getters.cart
		  }, 

		},
        data() {
            return {
                phoneList: null,
				isPopupOpen: false,
				searchValue: ''
            }
        },
	
        mounted() {
			menu.executeScript()
        }
    }
</script>

<style lang="scss" >
  
</style>