const SAVE_TODO = (state, todo) => {
    state.todos.push(todo);
}

const DELETE_TODO = (state, payload) => {
    state.todos.splice(payload, 1)
}

export { SAVE_TODO, DELETE_TODO };