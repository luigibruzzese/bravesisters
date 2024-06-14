<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { usePeopleStore } from '@/stores/people.ts';
import { computed, watch } from 'vue';

const route = useRoute();
const router = useRouter();
const store = usePeopleStore();

const personId = computed(() => route.params.id);
const person = computed(() => store.people.find(p => p.id === parseInt(personId.value, 10)));
const projects = computed(() => store.project.filter(project => project.person === parseInt(personId.value, 10)));
const services = computed(() => store.service.filter(service => service.person === parseInt(personId.value, 10)));

watch(personId, async () => {
  const id = parseInt(personId.value, 10);
  if (isNaN(id) || id < 1 || id > 20) {
    router.push('/people');
    return;
  }

  if (!store.people.length || !store.project.length || !store.service.length) {
    await store.init();
  }
}, { immediate: true });

function goToProject(id) {
  router.push(`/project-${id}`);
}

function goToService(id) {
  router.push(`/service-${id}`);
}

function goToPeople() {
  router.push('/people');
}

const getImageSrc = (type, id) => {
  switch (type) {
    case 'project':
      return `/img/projects/${id}.jpg`;
    case 'services':
      return `/img/services/${id}.jpg`;
    default:
      return '';
  }
};
</script>

<template>
  <main>
    <section id="person">
      <button @click="goToPeople" id="back-button">< Up to all people</button>
      <h1 id="info_person">Person</h1>
      <GeneralInfoComponent
          v-if="person"
          :id="person.id"
          :full-name="`${person.name} ${person.surname}`"
          :role="person.role"
          :short-presentation="person.description"
          context="people"
      />
    </section>

    <section v-if="projects.length" id="projects">
      <h2 class="title-with-lines">Projects</h2>
      <div class="projects-container">
        <div
            v-for="project in projects"
            :key="project.id"
            @click="goToProject(project.id)"
            class="project"
        >
          <img :src="getImageSrc('project', project.id)" alt="Project Image" />
          <h3>{{ project.name }}</h3>
          <p>{{ project.description.slice(0, 250) + '...' }}</p>
        </div>
      </div>
    </section>

    <section v-if="services.length" id="services">
      <h2 class="title-with-lines">Services</h2>
      <div class="services-container">
        <div
            v-for="service in services"
            :key="service.id"
            @click="goToService(service.id)"
            class="service"
        >
          <img :src="getImageSrc('services', service.id)" alt="Service Image" />
          <h3>{{ service.name }}</h3>
          <p>{{ service.description.slice(0, 250) + '...' }}</p>
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

#back-button {
  background-color: #4c8189;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 20px;
  position: relative;
  margin-top: 20px;
  margin-left: 30px;
}

#back-button:hover {
  background-color: #3a6775;
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
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 1px solid transparent;
}

.project:hover,
.service:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
}

.project img,
.service img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 5%;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .project,
  .service {
    flex: 1 1 100%;
  }
}
</style>
