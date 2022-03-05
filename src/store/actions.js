const saveTodos = ({ commit }, payload) => {
    commit('SAVE_TODO', payload);
}

const deleteTodo = ({ commit }, payload) => {
    commit('DELETE_TODO', payload);
}

const deleteMultipleTodo = ({ commit, state }, payload) => {
    payload.forEach((id) => {
        // commit('DELETE_TODO', id);
        console.log(id);
    })
    
}

export { saveTodos, deleteTodo, deleteMultipleTodo }