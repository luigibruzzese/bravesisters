<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { usePeopleStore } from '@/stores/people.ts';
import { computed, watch } from 'vue';

const route = useRoute();
const router = useRouter();
const store = usePeopleStore();

const projectId = computed(() => route.params.id);
const project = computed(() => store.project.find(p => p.id === parseInt(projectId.value, 10)));
const person = computed(() => store.people.find(p => p.id === project.value?.person));
const services = computed(() => store.service.filter(service => service.person === project.value?.person));

watch(projectId, async () => {
  const id = parseInt(projectId.value, 10);
  if (isNaN(id) || id < 1 || id > 5) {
    window.location.href = '/projects';
    return;
  }

  if (!store.people.length || !store.project.length || !store.service.length) {
    await store.init();
  }
}, { immediate: true });

function goToService(id) {
  router.push(`/service-${id}`);
}

function goToPerson(id) {
  router.push(`/people-${id}`);
}

function goToProjects() {
  router.push('/projects');
}

const getGalleryImages = (id, count = 3) => {
  return Array.from({ length: count }, (_, i) => `/img/projects/${id}/${i + 1}.jpg`);
};
</script>

<template>
  <main>
    <section id="project">
      <button @click="goToProjects" id="back-button">< Up to all projects</button>
      <h1 id="info_project">Project</h1>
      <GeneralInfoComponent
          v-if="project"
          :id="project.id"
          :full-name="project.name"
          :role="'Project'"
          :short-presentation="project.description"
          context="project"
      />
    </section>

    <section v-if="person" id="staff">
      <h2 class="title-with-lines">Staff</h2>
      <div class="staff-container" @click="goToPerson(person.id)">
        <img :src="`/img/people/${person.id}.png`" alt="Staff Image" />
        <h3>{{ person.name }} {{ person.surname }}</h3>
        <p>{{ person.role }}</p>
      </div>
    </section>

    <section id="gallery">
      <h2 class="title-with-lines">Gallery</h2>
      <div class="gallery-container">
        <img v-for="(src, index) in getGalleryImages(project.id)" :key="index" :src="src" alt="Gallery Image" />
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

#info_project {
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
.services-container,
.gallery-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
}

.gallery-container {
  gap: 20px;
}

.gallery-container img {
  width: 410px;
  height: 410px;
  object-fit: cover;
  border-radius: 10px;
  margin: 15px;
}

@media (max-width: 768px) {
  .gallery-container img {
    width: 100%;
    max-width: 410px;
  }
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
  width: 410px;
  height: 410px;
  object-fit: cover;
  border-radius: 10px;
  margin: 15px;
}

.staff-container {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  max-width: 500px;
  box-sizing: border-box;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  border: 1px solid transparent;
  margin: 0 auto;
}

.staff-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid #ccc;
}

.staff-container img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin: 5%;
  border-radius: 50%;
}

@media (max-width: 768px) {
  .project,
  .service,
  .staff-container {
    flex: 1 1 100%;
  }
}
</style>
