<script setup lang="ts">
  import { usePeopleStore } from '@/stores/people.ts';

  const store = usePeopleStore();
  const projects = store.project;
</script>

<template>
  <section id="project">
    <h1 id="title">Project</h1>
    <div class="people-info">
      <img class="people-image" src="/img/homepage/home_3.jpg" alt="People Image" />
      <div class="people-text">
        <p>Brave Sisters offers a range of projects aimed at empowering women affected by domestic violence, fostering resilience and promoting a brighter future. Our initiatives engage survivors and past victims in meaningful actions to reclaim their lives. From vocational training programs designed to enhance job skills and promote financial independence, to community-driven efforts that encourage women to share their experiences and support one another, each project is crafted to empower and inspire.
          Additionally, we focus on securing a stable future for children impacted by violence, providing essential support and resources. Our projects also include sports activities aimed at improving both mental and physical health, contributing to holistic recovery.</p>
      </div>
    </div>
    <section id="our_project">
      <h2 class="title-with-lines">Our Project</h2>
    </section>
    <div class="project-list">
      <SpecificElementComponent
          v-for="project in projects"
          :id = "project.id"
          :full-name = "project.name"
          :type = "'project'"
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
  }
  #title {
    font-size: 2em;
    margin-top: 20px;
    margin-bottom: 20px;
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
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .people-text {
    max-width: 600px;
    font-size: large;
  }

  @media (max-width: 1000px) {
    .people-info {
      flex-direction: column;
    }
    .people-image, .people-text {
      width: 100%;
      margin-right: 0;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
</style>