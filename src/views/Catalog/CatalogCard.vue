<template>
  <div class="catalog__products">					
    <article 
        class="product-card"
        v-for="(item , i) in paginatedUsersData"
        :key="i"
        >
        <div v-if="item.sale" class="product-card__sale">{{item.sale}}</div>
        <router-link :to="'/card/' + item.id" href="" class="product-card__image">
            <span class="product-card__item-image-ibg product-card__item-image-ibg_contain">
                <img :src="require('../../img/product-card/' + item.img)">
            </span>
        </router-link>
        <div class="product-card__body">
            <h4 class="product-card__title">
                <a href="" class="product-card__link-title">{{item.title}}</a>
            </h4>
            <div class="product-card__info info-product-card">
                <div class="info-product-card__size">95х18</div>
                <div class="info-product-card__materials">Орех, Алюминий</div>
            </div>
    
            <div class="product-card__footer">
                <div class="product-card__price">{{item.price}}</div>
            </div>
            <button @click="addToCart(item)" type="button" class="product-card__cart button" ><span class="_icon-cart">В корзину</span></button>
        </div>
    </article>
</div>
</template>

<script>

//import * as forms from '../../js/files/forms/forms.js';

export default {
  name: "CatalogCard",  
  props: ['paginatedUsersData'],

  data() {
    return {
      like: true
    }
  },
  methods: {
    addToCart(item) {
      this.$store.dispatch('ADDTOCART', item)
    },
  },
  watch: {
    like(value) {
      console.log('like', value)
    }   
  },
  mounted() {
    //forms.formRating()
  }
}
</script>
