<script setup lang="js">
const props = defineProps({
  id: Number,
  fullName: String,
  role: String,
  shortPresentation: String,
  context: {
    type: String,
    default: 'people'
  }
});

const getPrevId = () => {
  switch (props.context) {
    case 'project':
      return `/project-${props.id - 1}`;
    case 'services':
      return `/service-${props.id - 1}`;
    default:
      return `/people-${props.id - 1}`;
  }
};

const getNextId = () => {
  switch (props.context) {
    case 'project':
      return `/project-${props.id + 1}`;
    case 'services':
      return `/service-${props.id + 1}`;
    default:
      return `/people-${props.id + 1}`;
  }
};
</script>

<template>
  <div class="generalInfo">
    <NuxtLink :href="getPrevId()">
      <img alt="Left arrow" class="arrow" src="~/assets/icons/left-arrow.png"/>
    </NuxtLink>
    <div>
      <img class="portrait" :src="'/img/people/' + id + '.png'"/>
      <div>
        <h2>{{ fullName }}</h2>
        <h4>{{ role }}</h4>
        <p>{{ shortPresentation }}</p>
      </div>
    </div>
    <NuxtLink :href="getNextId()">
      <img alt="Right arrow" class="arrow" src="~/assets/icons/right-arrow.png"/>
    </NuxtLink>
  </div>
</template>

<style scoped>
.arrow {
  width: 60px;
}

.generalInfo, .generalInfo > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  margin: 5%;
}

.portrait {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 5%;
  border-radius: 50%;
}

@media (max-width: 800px) {
  .generalInfo > div {
    display: initial;
  }
}

@media (max-width: 600px) {
  .portrait {
    width: 200px;
  }

  .arrow {
    width: 50px;
  }
}
</style>
