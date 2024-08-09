import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import YsjElement from 'ysj-element'

const app = createApp(App)
app.use(YsjElement)
app.mount('#app')
