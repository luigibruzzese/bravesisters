<script setup lang="js">
defineProps({
  id: Number,
  fullName: String,
  role: String,
  shortPresentation: String
})
</script>

<template>
  <NuxtLink :href="'/people-' + id.toString()" class="border">
    <div class="generalInfo">
      <img class="portrait" :src="'/img/people/' + id + '.png'" alt="Person Portrait"/>
      <h2 style="font-size: 100%">{{ fullName }}</h2>
      <h4 style="font-size: 100%">{{ role }}</h4>
      <p style="font-size: 80%">{{ shortPresentation }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>
.border {
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px;
  padding: 10px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease; 
  text-decoration: none;
  color: inherit;
}

.border:hover {
  transform: translateY(-5px); 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  border: 1px solid #ccc;
}

.generalInfo, .generalInfo > div {
  text-align: center;
  margin: 5%;
}

.portrait {
  width: 150px; 
  height: 150px; 
  object-fit: cover;
  margin: 5%;
  border-radius: 50%;
}
</style>
