<template>
    <div class="catalog__footer">
        <div class="catalog__pagging pagging">
            <button :disabled="currentPage == 1" @click="prevPages" type="button" class="pagging__arrow pagging__arrow_left _icon-arrow-bottom"></button>
            <ul class="pagging__list">
                <li
                  v-for="page in pages"
                  :key="page"
                  class="pagging__item"
                >
                    <button
                      class="pagging__link"
                      :class="{'_active': currentPage === page}"
                      @click="changePage(page)"
                    >{{page}}</button>
                </li>
            </ul>
            <button :disabled="currentPage == this.pages" type="button" @click="nextPages" class="pagging__arrow pagging__arrow_right _icon-arrow-bottom"></button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Pagination",  
        props: {
            itemsOnPage: {
                type: Number
            },
            totalItems: {
                type: Number
            },
            items: {
                type: []
            },
        },
        emits: {
            'page-changed'(arr) {
              if (arr) {
                return true
              }
              console.warn('Нет данных')
              return false
            }
        },
        computed: {
            pages() {
                return Math.ceil(this.totalItems / this.itemsOnPage)
            },
        },
        data() {
            return {
              keyLoad: 0,
              currentPage: 1,
              itemsOfPage: [],
            }
        },
        watch: {
          currentPage(val) {
            this.changePage(val)
          }
	    },
        methods: {
            changePage(NumPage) {
              this.currentPage = NumPage
              this.itemsOfPage = this.items.slice (( NumPage-1) * this.itemsOnPage, NumPage * this.itemsOnPage)
              this.$emit('page-changed', this.itemsOfPage)
            },
            prevPages() {
              this.currentPage--
            },
            nextPages() {
              this.currentPage++
            },
        },
        mounted() {
         this.changePage(1)
        }      
    }
</script>