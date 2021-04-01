import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueMq from 'vue3-mq';

createApp(App)
    .use(router)
    .use(VueMq, {
        breakpoints: {
          tablet: 768,
          desktop: Infinity,
        }
      })
    .mount('#app')
