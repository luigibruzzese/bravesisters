<script setup lang="ts">

const store= usePeopleStore()
const people = store.people

</script>

<template>

  <section id="people">
    <h1 id="title">People</h1>
    <a href="person-1">Ciao</a>
  </section>

</template>

<style scoped>

  #title {
    font-size: 2em;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #4c8189;
    text-align: center;
  }

</style>