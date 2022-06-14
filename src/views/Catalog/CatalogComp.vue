<template>
    <body>
		<div class="wrapper">
			<main class="page page_inner">
				<div class="page__header">
					<div class="page__container">
						<h1 class="page__title title">Разделочные ножи</h1>
						<nav class="page__breadcrumbs breadcrumbs">
							<ul class="breadcrumbs__list">
								<li class="breadcrumbs__item">
									<a href="/" class="breadcrumbs__link">Главная</a>
								</li>
								<li class="breadcrumbs__item">
									<span class="breadcrumbs__current">Разделочные ножи</span>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div class="catalog">
					<div class="catalog__container">
						<div class="catalog__body">
							<div class="catalog__filter filter-catalog">
								<button type="button" class="filter-catalog__title">Фильтр товаров</button>
								<div data-spollers class="filter-catalog__items">
									<div class="filter-catalog__price price-filter">
										<button type="button" data-spoller class="price-filter__title">Цена</button>
										<div data-range class="price-filter__body">
											<div class="price-filter__inputs">
												<input :value="minRange"  ref="fromValue" data-range-from="0"  autocomplete="off" type="number" name="form[]" class="price-filter__input">
												<input ref="toValue" data-range-to="5000"  autocomplete="off"  type="number" v-model="maxRange" name="form[]" class="price-filter__input">
											</div>
											<div data-range-item class="price-filter__range">
                                             <noUiSlider @updateRange:value="updateRange" :valuesRange="valuesRange" :rangeDef="rangeDef"></noUiSlider>
											</div>
										</div>
									</div>
									<div class="filter-catalog__item item-filter-catalog">
										<button type="button" class="item-filter-catalog__title">Производство</button>
										<div class="item-filter-catalog__body">
											<div 
											  v-for="(category, i) in categories"
											  :key="i"
											  class="item-filter-catalog__checkbox checkbox" >
												<input  :id=i data-error="Ошибка" class="checkbox__input" type="checkbox" :value=i name="form[]" @change="changeCategory()">
												<label :for=i class="checkbox__label"><span class="checkbox__text">{{category.category}} <small>({{category.count}})</small></span></label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div v-if="categoryChangeData.length" class="catalog__content">
								<div class="catalog__control">
									<Select 
									  :options="options"
                                      @change-select="changeSelect"
									   >
									</Select>
								</div>
								<CatalogCard   :paginatedUsersData="paginatedUsersData"></CatalogCard>
								
								<div class="catalog__footer">
									<pagination
									  :totalItems="this.categoryChangeData.length ? this.categoryChangeData.length : catalogs.length"
									  :itemsOnPage="itemsOnPage"
									  :items="this.categoryChangeData"
									  @page-changed="pageChanged"
									  :key="keyUpdate"
									></pagination>
								</div>
							</div>
							<div v-else class="catalog__content">
							  <h3>Нет данных</h3>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>	
	</body>
</template>

<script>
  import Pagination from '../../components/tools/Pagination.vue';
  import Select from '../../components/tools/Select.vue';
  import noUiSlider from '../../components/tools/noUiSlider.vue';
  import CatalogCard from './CatalogCard.vue';

  export default {
      name: "CatalogComp",  
      components: {Pagination, Select, noUiSlider, CatalogCard},
	  computed: {
		catalogs() {
			return this.$store.getters.catalogs
		},
		searchValue() {
			return this.$store.getters.searchValue
		},
		selectedValueActual() {
			return this.$store.getters.selectedValue
		},
	  },
      watch: {

		searchValue: {
			handler(val) {
				console.log('val', val)
				setTimeout(() => {
					this.categoryChangeData = this.catalogs.filter(item => {
						return item.title.toLowerCase().includes(val.toLowerCase())
					})
				}, 0);
			},
			deep: true,
			immediate: true
		}
	  },
      data() {
		return {
			minRange: 0,
			maxRange: 0,
			categories: [],
			checkCategoty: 0,
			options: [
				'По популярности',
				'По цене'
			],
			valuesRange: [0, 5000],
			rangeDef: {
			'min': 0,
			'max': 5000
			},
			itemsOnPage: 6,
			paginatedUsersData: [],
			categoryChangeData: [],
			keyUpdate: 0,

			test: []
		}
      },
      methods: {
        pageChanged(itemsOfPage) {
		  // получение массива из пагинации
          this.paginatedUsersData = itemsOfPage
		},
		changeSelect(selectedValue) {
          //сортировка по цене
          if (selectedValue === 'По цене') { 
			if (this.categoryChangeData.length) {
				  this.categoryChangeData.sort(function (a, b) {
				  return a.price - b.price;
			    });
			} 
            this.keyUpdate++
		  }
          //сортировка по популярности
		  if (selectedValue === 'По популярности' ) {
			if (this.categoryChangeData.length) {
				  this.categoryChangeData.sort(function (a, b) {
				  return b.rating - a.rating;
			    });
			} 
            this.keyUpdate++
		  }
		},

		allCategories() {
			const dataCount = this.catalogs.reduce((obj, item) => {
				if(!obj[item.made]) {
					obj[item.made] = 0
				}
				obj[item.made]++
				return obj
			}, {})

			Object.entries(dataCount).forEach(([key, value]) => {
				this.categories.push({category: key, count: value})
			});
		},

		changeCategory() {
		   var checkboxs = document.querySelectorAll('.checkbox__input');
           let r = 0
		   
           checkboxs.forEach(element => {
			    if (element.checked) {
                    this.categoryChangeData = [...new Set(
                      this.catalogs.filter(i=> {
						return i.made === this.categories[element.value].category
					}).concat(this.categoryChangeData))]

					r++
			    } else {
					if(this.categoryChangeData.length) {
						this.categoryChangeData = 
							this.categoryChangeData.filter(i=> {
							return i.made !== this.categories[element.value].category
						})
					}
				}				
		   });

		   if(r===0) this.categoryChangeData = this.catalogs
		   this.keyUpdate++
		},

		
		updateRange(values) {
			this.minRange = values[0]
			this.maxRange = values[1]

            this.categoryChangeData = this.catalogs.filter(i => {
				if (i.price >= values[0] && i.price <= values[1]) {
					return true
				}
			})
			
			this.keyUpdate++
			this.changeSelect(this.selectedValueActual)
			
			var checkboxs = document.querySelectorAll('.checkbox__input');
			checkboxs.forEach(element => {if (element.checked) {element.checked = false}})

		}
	  },
      mounted() {
		this.allCategories()
		this.categoryChangeData = this.catalogs
		this.changeSelect('По популярности')
      },     
  }
</script>
