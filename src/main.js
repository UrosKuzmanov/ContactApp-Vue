import { createApp } from 'vue'
import router from './Router.js'
import store from './Store'
import App from './App.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseBadge from './components/ui/BaseBadge.vue'
import ImgWrapper from './components/ui/Parts/ImgWrapper.vue'
import BaseButton from './components/ui/BaseButton.vue'
import ContactInfo from './components/ui/Parts/ContactInfo.vue'
import BaseWrapper from './components/ui/BaseWrapper.vue'

const app = createApp(App)

app.use(router)
app.use(store)


app.component('base-card', BaseCard)
app.component('img-wrapper', ImgWrapper)
app.component('base-button', BaseButton)
app.component('contact-info', ContactInfo)
app.component('base-badge', BaseBadge)
app.component('base-wrapper', BaseWrapper)

app.mount('#app')
