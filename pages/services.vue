<script setup lang="ts">
import {useServiceStore} from "~/stores/services";

const store = useServiceStore();
const services = store.service;

useHead({
  title: "Service - Brave Sisters",
  meta:[
    {
      name:"description",
      content:"This page makes a short description of all the services offered by Brave Sister. " +
          "After that it shows all the different services with the link to the corresponding page"
    },
    {
      name:"keywords",
      content:"services, meeting, support, assistance, counseling"
    }
  ]
}
)
</script>

<template>
  <section id="service">
    <h1 id="title">Services</h1>
    <div class="people-info">
      <img class="people-image" src="/img/service/home_2.webp" alt="People Image" />
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
  font-size: larger;
  margin-left: 50px;
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