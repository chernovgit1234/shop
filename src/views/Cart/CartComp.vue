<template>
  <div class="cart">
    <div class="cart__container">
      <h1 class="cart__title big-title">Корзина</h1>
      <div v-if="!cartItems.length"  class="cart__nocontent">
        <h1 class="cart__nocontent__title title">В корзине нет товаров.</h1>
        <div class="cart__nocontent__btn">
          <router-link :to="'/catalog'">В каталог</router-link>
        </div>
      </div>
      <div v-else class="cart__body">
        <div class="cart__table table-cards">
              <ul class="table-cards__items">
                <li class="table-cards__item item-card-tables" v-for="(cart, i) of cartItems" :key= "i">
                  <div class="item-card-tables__body">
                      <div class="item-card-tables__card">
                        <div class="item-card-tables__image ">
                            <img class="item-card-tables__image_ibg" :src="require('../../img/product-card/' + cart.img)">
                        </div>
                        <div class="item-card-tables__content">
                          <div class="item-card-tables__label">Название:</div>
                          <div class="item-card-tables__value">{{cart.title}}</div>
                          <div class="item-card-tables__label">Артикул:</div>
                          <div class="item-card-tables__value">AF0000001952</div>
                          <div class="item-card-tables__label">Материал:</div>
                          <div class="item-card-tables__value">Сталь</div>
                        </div>
                      </div>
                      <div class="actions-product__row">
                        <div class="actions-product__quantity quantity">
                            <button @click="addOneCount(cart.id)" type="button" class="quantity__button quantity__button_plus"></button>
                            <div class="quantity__input">
                                <input :disabled="true" autocomplete="off" type="text" name="form[]" :value="cart.count">
                            </div>
                            <button @click="deleteOneCount(cart.id)" :disabled="cart.count==1"  type="button" class="quantity__button "></button>
                        </div>
                      </div>
                      <div @click="deleteFromCart(cart.id)" class="item-card-tables__actions">
                          ╳
                      </div>
                  </div>
                </li>
              </ul>
        </div>
        <div class="cart__board board-cart">
            <div class="board-cart__block">
                <div class="board-cart__title title">Ваш заказ</div>
                <div class="board-cart__info">
                  <div class="board-cart__label">Товары, {{totalCount}}шт</div> 
                  <div class="board-cart__value">{{totalSumCount}} ₽</div>   
                  <div class="board-cart__label">Итого</div> 
                  <div class="board-cart__value">{{totalSumCount}} ₽</div>  
                </div> 
            </div>
            
        </div>    
      </div>
    </div>
  </div>
  <order-comp v-if="cartItems.length"></order-comp>
</template>

<script>
import OrderComp from '../Order/OrderComp.vue'

export default {
  name: "d",  
  props: [''],
  components: {OrderComp},
  data() {
    return {
      countItems: 1
    }
  },
  methods: {
    deleteFromCart(id) {
      this.$store.dispatch('DELETEFROMCART', id)
    },
    deleteOneCount(id) {
      console.log('deleteOneCount')
      this.$store.dispatch('DELETEONECOUNT', id)
    },
    addOneCount(id) {
      this.$store.dispatch('ADDONECOUNT', id)
    }
  },
  watch: {
  },
  computed: {
    cartItems() {
      return this.$store.getters.cart
    },
    totalCount() {
      return this.$store.getters.totalCount
    },
    totalSumCount() {
      return this.$store.getters.totalSumCount
    },
    
  },
  mounted() {
    
  }
}
</script>