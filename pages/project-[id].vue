<script setup lang="js">
import { useRoute, useRouter } from 'vue-router';
import { usePeopleStore } from '@/stores/people.ts';
import { computed, watch } from 'vue';
import {useProjectStore} from "~/stores/projects.ts";

const route = useRoute();
const router = useRouter();
const peopleStore = usePeopleStore();
const projectStore = useProjectStore();

const projectId = computed(() => route.params.id);
const project = computed(() => projectStore.getProject(parseInt(projectId.value, 10)));
const person = computed(() => peopleStore.getPerson(project.value?.person));


function goToPerson(id) {
    router.push(`/people-${id}`);
}

const getGalleryImages = (id, count = 3) => {
  return Array.from({ length: count }, (_, i) => `/img/project/${id}/${i + 1}.webp`);
};
</script>

<template>
  <main>
    <section id="project">
      <button @click="router.push(`/projects`);" id="back-button">< Up to all projects</button>
      <h1 id="info_project">Project</h1>
      <GeneralInfoComponent
          v-if="project"
          :id="project.id"
          :full-name="project.name"
          :role="'Project'"
          :short-presentation="project.description"
          context="project"
          total=5
      />
    </section>

    <section v-if="person" id="staff">
      <h2 class="title-with-lines">Staff</h2>
      <div class="staff-container" @click="goToPerson(person.id)">
        <img :src="`/img/people/${person.id}.webp`" alt="Staff Image" />
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
  width: 350px;
  height: 350px;
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
  .staff-container {
    flex: 1 1 100%;
  }
}
</style>
