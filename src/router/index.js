
import { createMemoryHistory, createRouter } from 'vue-router'
import AboutView from '../Views/AboutView.vue'
import HomeView from '../Views/HomeView.vue'
import ContactView from '../Views/ContactView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/contact', component:ContactView}
]
const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router;