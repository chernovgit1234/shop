
export default {
    state: {
      cart: [],
    },
    mutations: {
        addToCart(state, item) {
            const cartItem = state.cart.find(t=>t.id === item.id)
            if(cartItem) {
                cartItem.count++
            } else {
                item.count++
                state.cart.push(item)
            }
        },
        deleteFromCart(state, id) {
            const item = state.cart.find(r => r.id === id)
            item.count = 0
            state.cart = state.cart.filter(t=>  t.id !== id)
        },
        deleteOneCount(state, id) {
            const item = state.cart.find(r => r.id === id)
            item.count--
        },
        addOneCount(state, id) {
            const item = state.cart.find(r => r.id === id)
            item.count++
        },
        zeroedCart(state) {
            state.cart = []
        }
    },
    actions: {
        ADDTOCART({commit}, item) {
            commit('addToCart', item);
        },
        DELETEFROMCART({commit}, id) {
            commit('deleteFromCart', id);
        },
        DELETEONECOUNT({commit}, id) {
            commit('deleteOneCount', id);
        },
        ADDONECOUNT({commit}, id) {
            commit('addOneCount', id);
        },
        ZEROEDCART({commit}) {
            commit('zeroedCart');
        },
    },
    getters: {
        cartLength: t => t.cart.length,
        cart: t => t.cart,
        totalCount: t => t.cart.reduce((total, y) => {
          return total + y.count
        }, 0),
        totalSumCount: t => t.cart.reduce((total, y) => {
            return total + y.count * y.price
        }, 0)
    }
  }
  
  
  