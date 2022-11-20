<template>
  <AddTodo @newTodo="addTodo" />
  <p v-for="todo in todos" @click="checkTodo"><span v-if="todo.id != 0">({{ todo.id }}) - {{ todo.tache }}</span></p>
</template>

<script lang="ts">

import AddTodo from './AddTodo.vue';

const todos: [{ id: Number, tache: String }] = [{ id: 0, tache: "" }]

export default ({
  data() {
    return {
      todos
    }
  },
  components: {
    AddTodo
  },
  methods: {
    checkTodo(e: any) {
      if (!e.target.firstChild.parentElement.classList.contains("line-through")) {
        e.target.firstChild.parentElement.classList.add("line-through");
      } else {
        e.target.firstChild.parentElement.classList.remove("line-through");
      }
    },
    addTodo(message: string) {
      let id = this.todos.length;
      this.todos.push({ id: id, tache: message });
    }
  },
});

</script>

<style scoped>
.line-through {
  text-decoration: line-through;
}
</style>