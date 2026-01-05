import { createApp } from 'vue'
import App from './App.vue'
import routers from './routers'  // router import

// css
import "@/assets/css/reset.scss"
import "@/assets/css/global.scss"

//createApp(App).mount('#app')

const app = createApp(App)
app.use(routers)  // router 추가
app.mount('#app')
