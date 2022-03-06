<template>
  <div class="action">
    <button class="btn" @click="$emit('deleteMultipleTodo')">Del</button>
    <button class="btn" @click="$emit('coppyTodo')">Coppy</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.btn {
  padding: 0.7em;
  margin: 0em .2em;
  background: white;
  border: 1px solid gray;
  border-radius: 5px;
  font-weight: 700;
}
</style>