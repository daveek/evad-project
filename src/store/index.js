import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cities: []
  },

  getters: {
    availableCities (state, getters){

    }
  },

  mutations: {

    FETCH_CITIES (state, cities) {
      state.cities = cities
    },
  
    ADD_CITY (state, cities) {
      state.cities.push(cities)
    }
    /*
    REMOVE_MESSAGE (state, message) {
      // find the index of the obj to remove from array
      let index = _.findIndex(state.messages, { _id: message._id })
      console.log(index)
      // remove the obj at position [index] from array
      if (index !== -1) {
        state.messages.splice(index, 1)
      }
      console.log(state.messages[index])
    }
    */
  },

  actions: {

  }, 

  methods: {

  }

})
