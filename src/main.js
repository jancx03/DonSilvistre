import { createApp } from 'vue';
import router from '/src/router';
import App from './App.vue';
import BaseButton from '/src/components/BaseButton.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import BaseProductCard from '/src/components/BaseProductCard.vue'

const app = createApp(App);

app.use(router);

app.component('BaseButton', BaseButton);
app.component('FontAwsomeIcon', FontAwesomeIcon);
app.component('BaseProductCard', BaseProductCard);
app.mount('#app');
