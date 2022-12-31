import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import App from './App.vue'
import IndexView from './views/IndexView.vue'

import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
        path: '/',
        name: 'Index',
        component: IndexView,
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('./views/AboutView.vue'),

    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ('./views/ContactView.vue'),
    },
    {
        path: '/tech-stack',
        name: 'TechStack',
        component: () =>
            import ('./views/TechStackView.vue'),
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App)
    .use(router)
    .use(autoAnimatePlugin)
    .mount('#app')