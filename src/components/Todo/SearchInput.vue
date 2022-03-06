<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search tasks..."
      v-model="title"
      @input="$emit('update:modelValue', $event.target.value)"
      @keydown="$emit('search', $event)"
    />
  </div>
</template>

<script>
export default {
  name: "SearchInput",
  props: ["title"],
};
</script>

<style>

.search input {
  padding: 0.5em;
  font-size: 1em;
  width: 400px;
  outline: none;
  border-radius: 5px;
  border: 1px solid gray;
}
</style>