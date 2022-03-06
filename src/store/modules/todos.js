import { SAVE_TODO, DELETE_TODO, DELETE_MULTIPLE_TODO } from "../mutations"
import { saveTodos, deleteTodo, deleteMultipleTodo } from "../actions"

const todoModel = {
    state: () => ({
        todos: [],
    }),
    mutations: {
        SAVE_TODO,
        DELETE_TODO,
        DELETE_MULTIPLE_TODO,
    },
    actions: {
        saveTodos,
        deleteTodo,
        deleteMultipleTodo,
    },
    getters: {
        listTodoDone(state) {
            return state.todos.filter(todo => todo.done);
        },
        listSearchTodo: (state) => (title) => {
            if (title.length) {
                const searchList = state.todos.filter(todo => {
                    return todo.title.includes(title);
                })
                return searchList;
            }
        }
    }
}

export default todoModel;