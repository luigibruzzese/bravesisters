<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { usePeopleStore } from '@/stores/people.ts';
import { computed, watch } from 'vue';

const route = useRoute(); 
const router = useRouter();
const store = usePeopleStore(); 

const personId = computed(() => route.params.id);
const person = computed(() => store.people.find(p => p.id === parseInt(personId.value, 10)));

watch(personId, async () => { // watch for changes in the personId
  if (!store.people.length) {
    await store.init();
  }
}, { immediate: true });

// Sarebbero da prendere dal db
const projects = [
  { id: 1, name: 'Project 1', description: 'Description of Project 1' }
];

// Sarebbero da prendere dal db
const services = [
  { id: 1, name: 'Service 1', description: 'Description of Service 1' }
];

function goToProject(id) {
  router.push(`/projects-${id}`);
}

function goToService(id) {
  router.push(`/services-${id}`);
}
</script>

<template>
  <main>
    <section id="person">
      <h1 id="info_person">Person</h1>
      <GeneralInfoComponent
        v-if="person"
        :id="person.id"
        :full-name="`${person.name} ${person.surname}`"
        :role="person.role"
        :short-presentation="person.description"
      />
    </section>

    <section id="projects">
      <h2 class="title-with-lines">Projects</h2>
      <div class="projects-container">
        <div
          v-for="project in projects"
          :key="project.id"
          @click="goToProject(project.id)"
          class="project"
        >
          <img src="~/assets/img/homepage/home_1.jpg" alt="Project Image" />
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </section>
    
    <section id="services">
      <h2 class="title-with-lines">Services</h2>
      <div class="services-container">
        <div
          v-for="service in services"
          :key="service.id"
          @click="goToService(service.id)"
          class="service"
        >
          <img src="~/assets/img/homepage/home_1.jpg" alt="Service Image" />
          <h3>{{ service.name }}</h3>
          <p>{{ service.description }}</p>
        </div>
      </div>
    </section>
    
    <br>
    <br>
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}

#info_person {
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

.projects-container,
.services-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.project,
.service {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  flex: 0 1 auto; 
  max-width: 500px; 
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease; /* Transition for the hover effect */
  border: 1px solid transparent; 
}

.project:hover,
.service:hover {
  transform: translateY(-5px); /* Slightly lift the element */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a shadow effect */
  border: 1px solid #ccc; 
}

.project img,
.service img {
  max-width: 100%;
  height: auto;
  display: block;
  margin: 0 auto 10px;
}

@media (max-width: 768px) {
  .project,
  .service {
    flex: 1 1 100%;
  }
}
</style>
