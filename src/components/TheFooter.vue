<template>
  <footer class="content-footer">
    <SideButtonInput />
    <div class="icons-flex">
      <FontAwsomeIcon :icon="['fab', 'instagram']" class="instacon" />
      <div>
        <FontAwsomeIcon :icon="['fab', 'cc-visa']" class="instacon" />
        <FontAwsomeIcon :icon="['fab', 'cc-mastercard']" class="instacon" />
        <FontAwsomeIcon :icon="['fab', 'cc-amex']" class="instacon" />
        <FontAwsomeIcon :icon="['fab', 'cc-paypal']" class="instacon" />
      </div>
    </div>
    <div class="copyright">
      <p>© {{year}}, Don Silvestre.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';
import SideButtonInput from '/src/components/SideButtonInput.vue'
import { 
  faInstagram, 
  faCcVisa, 
  faCcMastercard, 
  faCcAmex,
  faCcPaypal
  } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
// <i class="fab fa-cc-visa"></i>
library.add(faInstagram, faCcVisa, faCcMastercard, faCcAmex, faCcPaypal)

const date = new Date();

const year = ref(date.getFullYear());
</script>

<style scoped>
.content-footer {
  margin: 6.3rem;
  padding: 3.44rem;
}
.icons-flex {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.instacon {
  font-size: 2rem;
}
</style>