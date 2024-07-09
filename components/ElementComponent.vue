<template>
  <div @click="handleClick" class="element">
    <img :src="getImageSrc(type, item.id)" alt="Element Image" />
    <h3>{{ item.name }} {{item.surname}}</h3>
    <p>{{ item.description.slice(0, 250) + '...' }}</p>
  </div>
</template>

<script setup lang="js">
const props = defineProps({
  type: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
  onClick: {
    type: Function,
    required: true,
  },
});

const handleClick = () => {
  props.onClick(props.item.id);
};

const getImageSrc = (type, id) => {
  return `/img/${type}/${id}.webp`;
};
</script>

<style scoped>
.element {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  flex: 0 1 auto;
  max-width: 500px;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 1px solid transparent;
}

.element:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
}

.element img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 5%;
  border-radius: 50%;
}
</style>
