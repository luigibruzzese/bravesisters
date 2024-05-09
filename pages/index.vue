<script setup lang="ts">

</script>

<template>
    <img id = "main-img" src = "~/assets/img/home-image.jpg" />
    <h2>
      This is a description for the Dog's Hotel. The best place where dogs can rest.
    </h2>
</template>

<script lang="js">
export default {
    data: () => ({
    }),
    mounted() {
        document.querySelector("a[href=\"/\"]").style.color = "#4c8189";
    },
    methods: {
    }
}
</script>

<style scoped>
#main-img {
  width: 80%;
  max-width: 1000px;
  height: auto;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

