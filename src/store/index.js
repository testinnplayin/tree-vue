import Vue from 'vue'
import Vuex from 'vuex'

import treeview from '@/store/modules/treeview'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    treeview
  },
  strict: true
})
