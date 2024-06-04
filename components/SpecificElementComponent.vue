<script setup lang="ts">
    defineProps({
      id: Number,
      fullName: String,
      role: String,
      shortPresentation: String
    })
</script>

<template>
  <div class="generalInfo">
    <img class="portrait" :src="'_nuxt/assets/img/people/' + id + '.png'"/>
    <NuxtLink :href="'/people-' + (parseInt(id)).toString()" >
      <h2 style="font-size: 100%"> {{ fullName }}</h2>
    </NuxtLink>

  </div>
</template>

<style scoped>
  .generalInfo, .generalInfo > div {
    border: 1px solid black;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    margin-left: 40%;
    margin-right: 40%;
    margin-top: 5%;
    margin-bottom: 5%;
  }

  .portrait {
    width: 60%;
    margin: 5%;
  }
</style>