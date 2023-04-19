import Home from './components/Home.vue'
import HelloWorld from './components/HelloWorld.vue'
import About from './components/About.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/helloWorld',
        component: HelloWorld
    },
    {
        path: '/About',
        component: About
    }
]

export default createRouter({
    history: createWebHistory(),
    routes,
})