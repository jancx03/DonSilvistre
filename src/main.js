import { createApp } from 'vue'
import App from './App.vue'
import BaseButton from '/src/components/BaseButton.vue';
import TheModal from '/src/components/TheModal.vue';
import TheTestimonials from '/src/components/TheTestimonials.vue'
const app = createApp(App);

app.component('BaseButton', BaseButton);
app.component('TheModal', TheModal);
app.component('TheTestimonials', TheTestimonials);
app.mount('#app')
