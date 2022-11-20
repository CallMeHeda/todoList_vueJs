<template>
  <div>
    <input type="text" v-model="todoToAdd">
    <a href="#" v-if="todoToAdd != ''" @click="handleClick">&nbsp; Ajouter</a>
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue"

const todoToAdd = ref("");
const emit = defineEmits(['newTodo']);

function handleClick() {
  emit('newTodo', todoToAdd.value);
  todoToAdd.value = "";
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>