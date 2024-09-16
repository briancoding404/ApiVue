import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//Componentes
import navComponent from './components/navBar.vue'
import formCreate from './components/Form.vue'
import formEdit from './components/Edit.vue'
const app = createApp(App)

app.use(router)
app.component('navbar-custom', navComponent)
app.component('form-create', formCreate)
app.component('form-edit', formEdit)

app.mount('#app')
