<script setup lang="ts">

</script>

<template>
    <h1 id = info_home>
      The Center
    </h1>
    <img id = "main-img" src = "~/assets/img/home-photo.jpg" />
   
</template>

<script lang="js">
export default {
    data: () => ({
    }),
    mounted() {
        //document.querySelector("a[href=\"/\"]").style.color = "#4c8189";
    },
    methods: {
    }
}
</script>

<style scoped>
#main-img {
  margin: auto;
  width: 100%;
}


#info_home {
  font-size: 2em;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #4c8189;
  text-align: center;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
