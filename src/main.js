import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from '/src/components/BaseButton.vue';

const app = createApp(App);

app.component('BaseButton', BaseButton);

app.mount('#app')
