<script setup lang="js">
import {useRoute, useRouter} from 'vue-router';
import {usePeopleStore} from '@/stores/people.ts';
import {computed, watch} from 'vue';
import {useProjectStore} from "~/stores/projects.ts";

const route = useRoute();
const router = useRouter();
const peopleStore = usePeopleStore();
const projectStore = useProjectStore();

const projectId = computed(() => route.params.id);
const project = computed(() => projectStore.getProject(parseInt(projectId.value, 10)));
const person = computed(() => peopleStore.getPerson(project.value?.person));

const imgBasePath = '/img/project/' + route.params.id + '/';
const numberOfImages = 3;
//const services = computed(() => store.service.filter(service => service.person === project.value?.person));

/*watch(projectId, async () => {
  const id = parseInt(projectId.value, 10);
  if (isNaN(id)) {
    window.location.href = '/projects';
    return;
  }
  if(id < 1){
    window.location.href = '/project-5';
    return;
  }
  if(id > 5){
    window.location.href = '/project-1';
    return;
  }

  if (!store.people.length || !store.project.length || !store.service.length) {
    await store.init();
  }
}, { immediate: true });

function goToService(id) {
  router.push(`/service-${id}`);
}

function goToProjects() {
  router.push('/projects');
}*/

function goToPerson(id) {
    router.push(`/people-${id}`);
}

/*const getGalleryImages = (id, count = 3) => {
  return Array.from({ length: count }, (_, i) => `/img/project/${id}/${i + 1}.webp`);
};*/
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
                <img :src="`/img/people/${person.id}.webp`" alt="Staff Image"/>
                <h3>{{ person.name }} {{ person.surname }}</h3>
                <p>{{ person.role }}</p>
            </div>
        </section>

        <GalleryComponent
                :img-base-path=imgBasePath
                :number-of-images=numberOfImages
        />

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
</style>
