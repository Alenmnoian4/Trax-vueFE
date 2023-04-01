import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import IndexFile from './components/pages/IndexFile.vue'
import TraxFile from './components/pages/TraxFile.vue'
import ShowFile from './components/pages/ShowFile.vue'
import CreateFile from './components/pages/CreateFile.vue'
import TraxEdit from './components/pages/TraxEdit.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: IndexFile }, 
        { path: '/trax', component: TraxFile }, 
        { path: '/trax/:id', component: ShowFile }, 
        { path: '/new', component: CreateFile }, 
        { path: '/edit/:id', component: TraxEdit } 

    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');