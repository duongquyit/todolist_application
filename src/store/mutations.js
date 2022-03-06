const SAVE_TODO = (state, todo) => {
    state.todos.push(todo);
}

const DELETE_TODO = (state, payload) => {
    state.todos.splice(payload, 1);
    console.log(state.todos);
}

const DELETE_MULTIPLE_TODO = (state, payload) => {
    state.todos = payload.filter(todo => todo.isSelected == false);
}

export { SAVE_TODO, DELETE_TODO, DELETE_MULTIPLE_TODO };