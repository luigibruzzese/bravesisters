<script setup lang="ts">
import { usePeopleStore } from '@/stores/people.ts';

const store = usePeopleStore();
const services = store.service;
</script>

<template>
  <section id="service">
    <h1 id="title">Services</h1>
    <div class="people-info">
      <img class="people-image" src="/img/homepage/home_1.jpg" alt="People Image" />
      <div class="people-text">
        <p>At Brave Sisters, we provide essential support and guidance to women who have experienced domestic violence. Our services encompass psychological counseling to help manage trauma, legal assistance to navigate the judicial process, safety planning during times of crisis, job placement aid for financial independence, and expert advice on dealing with stalking situations. Each service is tailored to address the unique needs of our clients, empowering them to rebuild their lives with confidence and security.</p>
      </div>
    </div>
    <section id="our_project">
      <h2 class="title-with-lines">Our Services</h2>
    </section>
    <div class="project-list">
      <SpecificElementComponent
          v-for="service in services"
          :id = "service.id"
          :full-name = "service.name"
          :type = "'service'"
      >

      </SpecificElementComponent>
    </div>
  </section>
</template>

<style scoped>
.project-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 40px;
}
#title {
  font-size: 2em;
  margin-top: 40px;
  margin-bottom: 40px;
  color: #4c8189;
  text-align: center;
}

.title-with-lines {
  position: relative;
  text-align: center;
  color: #4c8189;
}

.title-with-lines::before,
.title-with-lines::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 35%;
  height: 1.1px;
  background-color: #4c8189;
}

.title-with-lines::before {
  left: 0;
  margin-right: 5px;
}

.title-with-lines::after {
  right: 0;
  margin-left: 5px;
}
.people-info {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

.people-image {
  width: 700px;
  height: auto;
  margin-right: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.people-text {
  max-width: 500px;
  font-size: large;
}

@media (max-width: 1000px) {
  .people-info {
    flex-direction: column;
  }
  .people-image, .people-text {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 20px;
  }
}
</style>