<template>
  <div class="product">
    <div class="image-container">
      <img class="image" src="/src/assets/img/soap.jpg" alt="image" />
    </div>
    <div class="description">
      <h1>Niacinamide Serum</h1>
      <div>
        <p>
          <span>$22.58USD</span>
        </p>
      </div>
      <button>ADD TO CART</button>
      <p>
        También conocida como vitamina B3 y nicotinamida, la niacinamida es una
        vitamina soluble en agua que trabaja con las sustancias naturales de la
        piel para ayudar a minimizar visiblemente los poros dilatados, mejorar
        el tono desigual de la piel, suavizar las líneas finas y las arrugas,
        disminuir la opacidad y fortalecer una superficie debilitada.
      </p>
      <p>
        Nuestro serum de NIACINAMIDA ayuda a mejorar la apariencia de los poros
        dilatados, el tono irregular de la piel y las manchas. La niacinamida es
        perfecta para piel grasa y pieles propensas a manchas, así como las que
        presentan enrojecimiento
      </p>
      <ul>
        <li>Refuerza la barrera protectora de la piel</li>
        <li>Ayuda a prevenir la pigmentación y bloquearla</li>
        <li>Es antioxidante</li>
        <li>Regula la producción de sebo</li>
      </ul>
      <p>
        <span>Ingredients: </span>
      </p>
      <p>
        <span>
          Organic Aloe Leaf Juice, Glycerin, Vitamin B3, Emulsifying Wax,
          Avocado Fruit Oil, Hyaluronic Acid, Vitamin E, Sunflower Seed Oil,
          Organic Neem Seed Oil, Organic Rosemary Leaf Extract, Organic
          Sunflower Seed Oil, Xanthan Gum, Phenoxyethanol, Tetrasodium Glutamate
          Diacetate</span
        >
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const { link, to } = defineProps({
  link: {
    type: Boolean,
    required: false,
    default: false,
  },
  to: {
    type: String,
    required: false,
    default: null,
  },
});
</script>

<style scoped>
.product {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-flow: row nowrap;
  flex-basis: auto;
  flex: 1 2;
}
.image {
  max-width: 90%;
}

.image-container {
  flex: 1;
}

.description {
  flex: 1;
}
</style>