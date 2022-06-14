
export default {
  state: {
    catalogs: [
      { id: 1, count: 0, like: false, sale: '-50%', price: 222,info: '22 отзывов', rating: '2', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса4', made: 'АиР'},
      { id: 2, count: 0, like: false, price: 11,info: '12 отзывов', rating: '1', img: "image.jpg", text: 'Среднеклинковое оружие', title: 'Нож Лиса3', made: 'Булат Сергея Баранова'},
      { id: 3, count: 0, like: false, price: 33,info: '22 отзывов', rating: '2', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса2', made: 'Булат Сергея Баранова'},
      { id: 4, count: 0, like: false, price: 444,info: '12 отзывов', rating: '1', img: "image.jpg", text: 'Среднеклинковое оружие', title: 'Нож Лиса1', made: 'АиР'},
      { id: 5, count: 0, like: false, sale: '-50%', price: 999,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 6, count: 0, like: false, sale: '-30%', price: 2777,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'АиР'},
      { id: 7, count: 0, like: false, sale: '-50%', price: 2777,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 8, count: 0, like: false, price: 555,info: '12 отзывов', rating: '4', img: "image.jpg", text: 'Среднеклинковое оружие', title: 'Нож Лиса', made: 'АиР'},
      { id: 9, count: 0, like: false, price: 777,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 10, count: 0, like: false, price: 2474,info: '12 отзывов', rating: '4', img: "image.jpg", text: 'Среднеклинковое оружие', title: 'Нож Лиса', made: 'АиР'},
      { id: 11, count: 0, like: false, sale: '-50%', price: 2777,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'АиР'},
      { id: 12, count: 0, like: false, sale: '-50%', price: 2777,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'АиР'},
      { id: 13, count: 0, like: false, sale: '-50%', price: 2777,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Лиса Лиса', made: 'Китай'},
      { id: 14, count: 0, like: false, price: 435,info: '12 отзывов', rating: '4', img: "image.jpg", text: 'Среднеклинковое оружие', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 15, count: 0, like: false, price: 346,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 16, count: 0, like: false, price: 2719,info: '12 отзывов', rating: '4', img: "image.jpg", text: 'Среднеклинковое оружие', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 17, count: 0, like: false, price: 2719,info: '12 отзывов', rating: '4', img: "image.jpg", text: 'Среднеклинковое оружие', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 18, count: 0, like: false, sale: '-50%', price: 2777,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'АиР'},
      { id: 19, count: 0, like: false, sale: '-50%', price: 2777,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 20, count: 0, like: false, price: 2719,info: '12 отзывов', rating: '4', img: "image.jpg", text: 'Среднеклинковое оружие', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 21, count: 0, like: false, price: 2777,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      { id: 22, count: 0,vlike: false, price: 2719,info: '12 отзывов', rating: '4', img: "image.jpg", text: 'Среднеклинковое оружие', title: 'Дэмн', made: 'Булат Сергея Баранова'},
      { id: 23, count: 0, like: false, sale: '-50%', price: 34,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Дэмн', made: 'Булат Сергея Баранова'},
      { id: 24, count: 0, like: false, sale: '-50%', price: 444,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Дэмн', made: 'Булат Сергея Баранова'},
      { id: 25, count: 0, like: false, sale: '-50%', price: 662,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Дэмн', made: 'Булат Сергея Баранова'},
      { id: 26, count: 0, like: false, sale: '-50%', price: 232,info: '22 отзывов', rating: '4', img: "image.jpg", text: 'Каталог ножей', title: 'Нож Лиса', made: 'Булат Сергея Баранова'},
      
     
    ],

    selectedValue: "",
    searchValue: ""
  },
  mutations: {
    changeSelect(state, selectedValue) {
      state.selectedValue = selectedValue
    },
    search(state, searchValue) {
      state.searchValue = searchValue
    }
  },
  actions: {
    SEARCH({commit}, searchValue) {
      commit('search', searchValue);
    },
  },
  getters: {
   catalogs: s => s.catalogs,
   selectedValue: s => s.selectedValue,
   searchValue: s => s.searchValue,
   itemById: s => id => s.catalogs.find(t => t.id===id)
  }
}


