const saveTodos = ({ commit }, payload) => {
    commit('SAVE_TODO', payload);
}

const deleteTodo = ({ commit }, payload) => {
    commit('DELETE_TODO', payload);
}

const deleteMultipleTodo = ({ commit }, payload) => {
    commit('DELETE_MULTIPLE_TODO', payload);
}

export { saveTodos, deleteTodo, deleteMultipleTodo }