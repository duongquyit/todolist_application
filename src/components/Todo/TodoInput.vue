<template>
  <div class="todo-input">
    <input
      type="text"
      placeholder="Todo something..."
      v-model="title"
      @input="$emit('update:modelValue', $event.target.value)"
      @keypress.enter="$emit('saveTodo'), (title = '')"
    />
  </div>
</template>

<script>
export default {
  name: "TodoInput",
  props: ["title"],
};
</script>


<style>
.todo-input {
  margin: 0.5em;
}

.todo-input input {
  padding: 0.7em;
  font-size: 1.2em;
  width: 500px;
  outline: none;
  border-radius: 5px;
  border: 1px solid gray;
}
</style>