<script setup lang="ts">
    defineProps({
      id: Number,
      fullName: String,
      role: String,
      shortPresentation: String
    })
</script>

<template>
    <div class="border">
      <div class="generalInfo">
          <img class="portrait" :src="'_nuxt/assets/img/people/' + id + '.png'"/>
          <h2> {{ fullName }}</h2>
          <h4>{{ role }}</h4>
          <p>{{ shortPresentation }}</p>
      </div>
      <div class="link">
        <NuxtLink :href="'/people-' + (parseInt(id)).toString()" >
          <p class="button">More</p>
        </NuxtLink>
      </div>
    </div>

</template>

<style scoped>
    .border {
      border: 2px solid black;
      width: 25%;
      height:700px;
      display: flex;
    }


    .generalInfo, .generalInfo > div {
      align-items: center;
      justify-content: space-between;
      text-align: center;
      margin: 5%;
    }

    .portrait {
      width: 300px;
      margin: 5%;
    }

    @media(max-width: 800px) {
      .generalInfo > div {
        display: initial;
      }
    }
    @media(max-width: 600px) {
      .portrait {
        width: 200px;
      }
    }

    .link{
      align-content: flex-end;
    }
</style>