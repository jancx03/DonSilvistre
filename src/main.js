import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from '/src/components/BaseButton.vue';
import TheModal from '/src/components/TheModal.vue';
const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('TheModal', TheModal);
app.mount('#app')
