import { createRouter, createWebHistory } from 'vue-router'
import TodoList from '../views/TodoListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todoList',
      component: TodoList
    }
  ]
})

export default router
