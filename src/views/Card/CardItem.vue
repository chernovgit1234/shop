<template>
    <main class="page page_inner">
        <div class="page__header">
            <div class="page__container">
                <nav class="page__breadcrumbs breadcrumbs">
                    <ul class="breadcrumbs__list">
                        <li class="breadcrumbs__item">
                            <a href="/" class="breadcrumbs__link">Главная</a>
                        </li>
                        <li class="breadcrumbs__item">
                            <a href="" class="breadcrumbs__link">{{item.made}}</a>
                        </li>
                        <li class="breadcrumbs__item">
                            <span class="breadcrumbs__current">{{item.title}}</span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div class="product">
            <div class="product__container">
                <div class="product__main main-product">
                    <card-swiper></card-swiper>
                    <div class="main-product__body body-product">
                        <div class="body-product__header header-product">
                            <div class="header-product__line">
                                <h1 class="header-product__title">{{item.title}}</h1>

                            </div>
                            <div class="header-product__rating rating">
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
                                <div class="rating__value">{{item.rating}}</div>
                            </div>
                        </div>
                        <div class="body-product__table table-product">
                            <div class="table-product__label">Артикул:</div>
                            <div class="table-product__value">AF0000001952</div>
                            <div class="table-product__label">Торговая марка:</div>
                            <div class="table-product__value">WUESTHOF (Германия)</div>
                            <div class="table-product__label">Серия:</div>
                            <div class="table-product__value">Ножи серии Classic Ikon</div>
                            <div class="table-product__label">Бонусные баллы: </div>
                            <div class="table-product__value">38</div>
                        </div>
                        <div class="body-product__actions actions-product">
                            <div class="actions-product__price">{{item.price}}</div>
                            <div class="actions-product__row">
                                <div class="actions-product__quantity quantity">
                                    <button @click="item.count==0 ? addToCart(item) : addOneCount(item.id)" type="button" class="quantity__button quantity__button_plus"></button>
                                    <div class="quantity__input">
                                        <input :disabled="true" autocomplete="off" type="text" name="form[]" :value="item.count">
                                    </div>
                                    <button @click="deleteOneCount(item.id)" :disabled="item.count==0"  type="button" class="quantity__button "></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </main>
</template>

<script>

import CardSwiper from './CardSwiper.vue'

export default {
  name: "CardItem",  
  props: [''],
  components: {CardSwiper},
  data() {
    return {
      countItems: 1
    }
  },
  methods: {
    deleteOneCount(id) {
      this.$store.dispatch('DELETEONECOUNT', id)
    },
    addOneCount(id) {
      this.$store.dispatch('ADDONECOUNT', id)
    },
    addToCart(item) {
      this.$store.dispatch('ADDTOCART', item)
    }
  },
  watch: {
    countItems(value) {
        console.log('countItems', value)
    }
  },
  computed: {
    item() {
        return this.$store.getters.itemById(+this.$route.params.id)
    }
  },
  mounted() {
  }
}
</script>