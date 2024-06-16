import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TasksView from '../views/TasksView.vue'
import NewTaskView from '../views/NewTaskView.vue'
import CounterView from '../views/CounterView.vue'
import TodosView from '../views/TodosView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/tasks',
      name:'tasks',
      component: TasksView

    },
    {
      path: '/newtask',
      name:'newtask',
      component: NewTaskView

    },
    {
      path: '/counter',
      name:'counter',
      component: CounterView

    },
    {
      path: '/todos',
      name:'todos',
      component: TodosView

    }

  ]
})

export default router
