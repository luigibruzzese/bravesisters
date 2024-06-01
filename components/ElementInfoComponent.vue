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
          <h2 style="font-size: 100%"> {{ fullName }}</h2>
          <h4 style="font-size: 100%">{{ role }}</h4>
          <p style="font-size: 80%">{{ shortPresentation }}</p>
      </div>
      <div class="link">
        <NuxtLink :href="'/people-' + (parseInt(id)).toString()" >
          <p style="font-size: 80%">More</p>
        </NuxtLink>
      </div>
    </div>

</template>

<style scoped>
    .border {
      border: 1px solid black;
      display: flex;
    }

    .generalInfo, .generalInfo > div {
      align-items: center;
      justify-content: space-between;
      text-align: center;
      margin: 5%;
    }

    .portrait {
      width: 60%;
      margin: 5%;
    }

    .link{
      position: relative;
      align-content: flex-end;
    }
</style>