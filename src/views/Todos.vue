<template>
  <div class="todo-list-container">
    <h1>Todo list app</h1>
    <div class="todos">
      <TodoInput v-model="title" @saveTodo="saveTodo" />
      <SearchInput v-model="searchTitle" @search="handleSearch" />
      <Actions
        @deleteMultipleTodo="deleteMultipleTodo"
        @coppyTodo="coppyTodo"
      />
    </div>
    <div class="list-todo" v-if="searchStatus">
      <ListTodo :todos="listSearchTodo" @deleteTodo="deleteTodo" />
    </div>
    <div class="list-todo" v-else>
      <ListTodo
        :todos="todos"
        @selectTodo="selectTodo"
        @deleteTodo="deleteTodo"
      />
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { computed } from "@vue/runtime-core";

import ListTodo from "../components/Todo/ListTodo.vue";
import TodoInput from "../components/Todo/TodoInput.vue";
import SearchInput from "../components/Todo/SearchInput.vue";
import Actions from "../components/Todo/Actions.vue";

export default {
  name: "Todos",
  components: {
    ListTodo,
    TodoInput,
    SearchInput,
    Actions,
  },
  setup() {
    const store = useStore();

    // Save todo
    const todos = ref(store.state.todoModel.todos);
    const title = ref("");
    let todoId = ref(0);

    const saveTodo = () => {
      store.dispatch("saveTodos", {
        id: todoId.value,
        title: title.value,
        done: false,
        isSelected: false,
      });
      title.value = "";
      todoId.value++;
    };

    // delete todo by index
    const deleteTodo = (event, index) => {
      return store.dispatch("deleteTodo", index);
    };

    const deleteMultipleTodo = () => {
      store.dispatch("deleteMultipleTodo", todos.value);
      todos.value = store.state.todoModel.todos;
    };

    // Todo done
    const todoDone = computed(() => {
      return store.getters.listTodoDone;
    });

    // Search todo
    const searchTitle = ref("");
    const listSearchTodo = ref([]);
    const searchStatus = ref(false);

    const handleSearch = () => {
      if (searchTitle.value.length) {
        const listTodo = store.getters.listSearchTodo(searchTitle.value);
        listSearchTodo.value = [...listTodo];
        searchStatus.value = true;
      } else {
        listSearchTodo.value = [];
        searchStatus.value = false;
      }
    };

    // Select todo
    function selectTodo(e, index) {
      if (e.ctrlKey) {
        if (!todos.value[index].isSelected) {
          todos.value[index].isSelected = true;
        } else {
          todos.value[index].isSelected = false;
        }
      } else {
        for (let i = 0; i < todos.value.length; i++) {
          if (i === index) {
            todos.value[index].isSelected = !todos.value[index].isSelected;
            continue;
          }
          todos.value[i].isSelected = false;
        }
      }
    }

    const coppyTodo = () => {
      const listTodoSelected = todos.value.filter((todo) => todo.isSelected);
      listTodoSelected.forEach((todo) => {
        store.dispatch("saveTodos", {
          id: todoId.value,
          title: todo.title,
          done: false,
          isSelected: false,
        });
      });
    };

    return {
      todos,
      title,
      searchTitle,
      todoDone,
      listSearchTodo,
      searchStatus,
      saveTodo,
      deleteTodo,
      handleSearch,
      selectTodo,
      deleteMultipleTodo,
      coppyTodo,
    };
  },
};
</script>

<style>
.todos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>