import { createStore } from "vuex"

import journalModule from '../modules/daybook/store/journal'
const store = createStore({
  //Acá apunto a los módulos que voy a tener en la app:
  modules: {
    journal: journalModule,
  }
})

export default store