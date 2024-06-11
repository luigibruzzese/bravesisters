<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { createClient } from '@supabase/supabase-js';
import GeneralInfoComponent from '@/components/GeneralInfoComponent.vue';
import { useRuntimeConfig } from '#imports';

// Configurazione Supabase
const config = useRuntimeConfig();
const supabaseUrl = config.public.supabaseUrl;
const supabaseKey = config.public.supabaseKey;
const supabase = createClient(supabaseUrl, supabaseKey);

const route = useRoute();
const router = useRouter();

const personId = computed(() => route.params.id);
const person = ref(null);

const fetchPerson = async (id) => {
  const { data, error } = await supabase
      .from('person')
      .select()
      .eq('id', id)
      .single();

  if (error) {
    console.error('Error fetching person:', error);
  } else {
    person.value = data;
  }
};

watch(personId, async (newId) => {
  if (newId) {
    await fetchPerson(newId);
  }
}, { immediate: true });

// Progetti e servizi sarebbero da prendere dal database
const projects = [
  { id: 1, name: 'Project 1', description: 'Description of Project 1' }
];

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
          <img src="/img/homepage/home_1.jpg" alt="Project Image" />
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
          <img src="/img/homepage/home_1.jpg" alt="Service Image" />
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
