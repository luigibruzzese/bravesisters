<script setup lang="js">
import { useRoute, useRouter } from 'vue-router';
import { usePeopleStore } from '@/stores/people.ts';
import { computed, watch } from 'vue';
import { useProjectStore } from '~/stores/projects.ts';
import { useServiceStore } from '~/stores/services.ts';
import ElementComponent from '@/components/ElementComponent.vue';

const route = useRoute();
const router = useRouter();
const peopleStore = usePeopleStore();
const projectStore = useProjectStore();
const serviceStore = useServiceStore();

const personId = computed(() => route.params.id);
const person = computed(() => peopleStore.getPerson(parseInt(personId.value, 10)));
const projects = computed(() => projectStore.getPersonProjects(parseInt(personId.value, 10)));
const services = computed(() => serviceStore.getPersonServices(parseInt(personId.value, 10)));

function goToProject(id) {
  router.push(`/project-${id}`);
}

function goToService(id) {
  router.push(`/service-${id}`);
}
</script>

<template>
  <main>
    <section id="person">
      <button @click="router.push(`/people`);" id="back-button">< Up to all people</button>
      <h1 id="info_person">Person</h1>
      <GeneralInfoComponent
          v-if="person"
          :id="person.id"
          :full-name="`${person.name} ${person.surname}`"
          :role="person.role"
          :short-presentation="person.description"
          context="people"
          :total=20
      />
    </section>

    <section v-if="projects.length" id="projects">
      <h2 class="title-with-lines">Projects</h2>
      <div class="projects-container">
        <ElementComponent
            v-for="project in projects"
            :key="project.id"
            :type="'project'"
            :item="project"
            :onClick="goToProject"
        />
      </div>
    </section>

    <section v-if="services.length" id="services">
      <h2 class="title-with-lines">Services</h2>
      <div class="services-container">
        <ElementComponent
            v-for="service in services"
            :key="service.id"
            :type="'service'"
            :item="service"
            :onClick="goToService"
        />
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

.projects-container,
.services-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

@media (max-width: 768px) {
  .project,
  .service {
    flex: 1 1 100%;
  }
}
</style>
