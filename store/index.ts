import { Store } from 'vuex'

//Vuex: Vue全体のデータストア


export default () => (new Store<{
  todos: string[]
}>({
  state: {
    todos: []
  },
  getters: {
    getTodos (state) {
      return state.todos
    }
  },
  mutations: {
    ADD_TODO(state, newTodo: string) {
      state.todos.push(newTodo)
    },
    DELETE_TODO(state, index: number) {
      state.todos = state.todos.filter(function (_, i) {
        return i !== index
      })
    }
  },
  actions: {
    addTodo(context, t) {
      context.commit('ADD_TODO', t)
    },
    deleteTodo(context, i) {
      context.commit('DELETE_TODO', i)
    }
  }
}))

/**
 * - state
 *   データを持っておくオブジェクト
 *    **基本的に直接変更を加えない**
 * 
 * - mutations
 *    唯一直接stateに変更を加える関数群
 * 
 * - actions
 *    mutationsを利用して色々処理をする関数群
 *    e.g. __API叩く__、なんかデータ計算・処理してからmutationを呼ぶ
 * 
 * - (getters)
 *    ゲッター
 */