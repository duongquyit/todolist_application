import { createStore } from 'vuex'
import todoModel from './modules/todos'


export default createStore({
  modules: {
    todoModel
  }
})
