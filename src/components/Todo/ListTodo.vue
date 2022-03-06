<template>
  <div class="list-todo">
    <div v-for="(todo, index) in todos" :key="todo.id">
      <div
        class="todo"
        :class="{ select: todo.isSelected }"
        @click.self="$emit('selectTodo', $event, index)"
        @dblclick="$emit('viewDetail', todo)"
      >
        <input type="checkbox" name="" id="" v-model="todo.done" />
        <h3>{{ todo.title }}</h3>
        <span @click="$emit('deleteTodo', $event, index)">&times;</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListTodo",
  props: ["todos"],
  setup() {},
};
</script>

<style>
.todo {
  display: flex;
  align-items: center;
  max-width: 400px;
  margin: 0.5em auto;
  padding: 1em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: relative;
}

.todo input {
  margin: 0 1em;
}

.todo h3 {
  margin: 0;
}

.select {
  background: #f7b5b545;
}

.list-todo span {
  font-size: 1.7em;
  font-weight: 600;
  position: absolute;
  right: 1em;
}
</style>