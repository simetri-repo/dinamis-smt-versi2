<template>
  <div class="content-wrapper">
    <list-loader v-if="!myData" :speed="1" :animate="true" viewBox="0 0 250 90">
    </list-loader>
    <bullet-list-loader
      v-if="!myData"
      :speed="2"
      :animate="true"
      viewBox="-50 0 350 130"
    >
    </bullet-list-loader>
    <list-loader
      v-if="!myData"
      :speed="1"
      :animate="true"
      viewBox="0 0 250 110"
    >
    </list-loader>

    <div v-else class="my-real-content">
      <router-view />
      <bawah />
    </div>
  </div>
</template>

<script>
import bawah from "./views/frontend/Footer.vue";
import { ListLoader, CodeLoader, BulletListLoader } from "vue-content-loader";

export default {
  name: "App",
  components: {
    BulletListLoader,
    CodeLoader,
    ListLoader,
    bawah,
  },
  data() {
    return {
      myData: null,
    };
  },

  mounted() {
    // Just pretend this is an AJAX call. Use your imagination.
    setTimeout(() => {
      this.myData = "Example Data";
    }, 1000);
  },
};
</script>

