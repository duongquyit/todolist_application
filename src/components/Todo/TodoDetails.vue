<template>
  <div class="view-detail-background" v-if="isViewDetail">
    <div class="todo-infor">
      <span @click="$emit('closeTodoDetail')">&times;</span>
      <input
        type="text"
        :value="todo.title"
        @change="todo.title = $event.target.value"
      />
      <button @click="$emit('updateTodo', todo)">Update</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoDetails",
  props: ["todo","isViewDetail"],
};
</script>

<style>
.view-detail-background {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #00000038;
}

.todo-infor {
  width: 35%;
  height: 15%;
  background: white;
  margin: 6em auto;
  position: relative;
}

.todo-infor input {
  width: 65%;
  padding: 1em;
  margin: 2.5em 0.5em;
  border: 1px solid gray;
  border-radius: 5px;
  outline: none;
}

.todo-infor button {
  padding: 1em;
  background: #2d78d5d4;
  color: white;
  border-radius: 5px;
  border: none;
  font-weight: 700;
}

.todo-infor span {
  position: absolute;
  right: 1em;
  font-size: 1.5em;
  font-weight: 700;
  top: 0.2em;
}
</style>