<template>
    <section class="page__catalog-cards catalog-cards">
        <div class="catalog-cards__container">
            <div 
              class="catalog-cards__item item-catalog-cards"
              v-for="(card , ind) in cards"
              :key="ind"
            >
                <div class="item-catalog-cards__body">
                    <h3 class="item-catalog-cards__title">
                        <a href="" class="item-catalog-cards__link-title">{{card.text}}</a>
                    </h3>
                    <ul class="item-catalog-cards__list">
                        <li class="item-catalog-cards__item"><a href="" class="item-catalog-cards__link">Разделочные</a></li>
                        <li class="item-catalog-cards__item"><a href="" class="item-catalog-cards__link">Туристические</a></li>
                        <li class="item-catalog-cards__item"><a href="" class="item-catalog-cards__link">Охотничьи</a></li>
                    </ul>
                </div>
                <div class="item-catalog-cards__image">
                    <img :src="require('../../img/mainpage/catalog-cards/' + card.img)">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
  export default {
      name: "HomeComp",  
      data() {
        return {
            cards: [
				{ img: "01.jpg", text: 'Каталог ножей'},
                { img: "02.jpg", text: 'Среднеклинковое оружие'},
				{ img: "03.jpg", text: 'Длинноклинковое оружие'},
                { img: "04.jpg", text: 'Сувенирные изделия'},
                { img: "05.jpg", text: 'Ножевая мастерская'},
				{ img: "06.jpg", text: 'Сопутствующие товары'},
			],
        }
      },
      methods: {},
      mounted() {}      
  }
</script>

<style lang="scss" scoped>

</style>