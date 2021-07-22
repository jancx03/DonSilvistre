import { createApp } from 'vue';
import router from '/src/router';
import App from './App.vue';
import BaseButton from '/src/components/BaseButton.vue';
import TheModal from '/src/components/TheModal.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TheTestimonials from '/src/components/TheTestimonials.vue';
import BaseGrid from '/src/components/BaseGrid.vue';
import TheProductTitle from '/src/components/TheProductTitle.vue';
import NewProductGrid from '/src/components/NewProductGrid.vue';
const app = createApp(App);

app.use(router);

app.component('BaseButton', BaseButton);
app.component('TheModal', TheModal);
app.component('FontAwsomeIcon', FontAwesomeIcon);
app.component('TheTestimonials', TheTestimonials);
app.component('BaseGrid', BaseGrid);
app.component('TheProductTitle', TheProductTitle);
app.component('NewProductGrid', NewProductGrid);
app.mount('#app');
