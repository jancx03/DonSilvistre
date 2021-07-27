<template>
  <section>
    <img src="" alt="" />
    <h1>Nianinamide Serum</h1>
    <div>$22.28 USD</div>
    <button>ADD TO CART</button>
    <div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum sit nemo
        hic nisi odit fugiat sequi itaque velit fugit debitis, ea, magni
        expedita ratione doloribus? Eaque earum cumque molestias tempora.
        Adipisci voluptatum minima dolores sint cupiditate, quidem expedita.
        Ipsum necessitatibus sunt id ullam ratione quaerat, sit provident qui
        amet, neque eveniet omnis ea beatae rerum architecto voluptas ducimus!
        Quia, ea. Deserunt nihil minima sequi ducimus tempora eos voluptate,
        dolorem voluptas? Earum et error cumque, hic impedit, officiis
        blanditiis aut asperiores quam modi accusantium, beatae officia culpa
        doloribus animi odit nesciunt? Debitis error et ipsum, eos neque minus
        odio id officia quo perferendis architecto cumque ipsam fuga vero eum ex
        quaerat incidunt accusamus nulla beatae. Mollitia voluptatibus quas
        numquam optio enim! Quos beatae omnis autem adipisci porro neque
        perspiciatis praesentium cumque dolorum ad reiciendis quibusdam, iusto
        tempore alias molestiae maxime optio debitis perferendis? Quia obcaecati
        ipsum, dolor atque iusto esse eius.
      </p>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut molestias
        a reprehenderit eveniet. Hic ea molestias nam. Iure iusto optio fugit.
        Vel, ducimus laboriosam! Exercitationem ab beatae natus iste facilis.
        Sit optio ut earum laudantium alias eius, facere, est expedita debitis
        ratione officia temporibus. Deleniti nam tenetur labore fugit voluptatem
        dolores, doloremque corrupti maiores quod doloribus. Distinctio, ratione
        rerum. Itaque! Totam aliquid in sunt labore, rem magnam laboriosam esse
        ipsam nihil quam dolorum eaque recusandae officiis iusto consequuntur
        ullam dolor. Expedita nobis temporibus harum enim quibusdam voluptatum
        exercitationem deleniti reprehenderit.
      </p>

      <ul>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ullam
          velit quidem explicabo quo quasi quos quis? Est, natus! Dolorem enim
          inventore unde voluptatibus similique odit nisi quia doloribus porro!
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ullam
          velit quidem explicabo quo quasi quos quis? Est, natus! Dolorem enim
          inventore unde voluptatibus similique odit nisi quia doloribus porro!
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ullam
          velit quidem explicabo quo quasi quos quis? Est, natus! Dolorem enim
          inventore unde voluptatibus similique odit nisi quia doloribus porro!
        </li>
        <li>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est ullam
          velit quidem explicabo quo quasi quos quis? Est, natus! Dolorem enim
          inventore unde voluptatibus similique odit nisi quia doloribus porro!
        </li>
        <div>Ingredients:</div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          inventore? Magni consequuntur aperiam reprehenderit ipsam placeat et
          tempore, eveniet architecto aspernatur quod dolores officiis non aut!
          Officia est eveniet consequuntur.*4
        </p>
      </ul>
    </div>
    <button>Share</button>
    <button>Tweet</button>
    <button>PIN IT</button>
  </section>
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

<style>
</style>