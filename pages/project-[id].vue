<script setup lang="js">
import {useRoute, useRouter} from 'vue-router';
import {usePeopleStore} from '@/stores/people.ts';
import {computed, watch} from 'vue';
import {useProjectStore} from "~/stores/projects.ts";
import ElementComponent from '@/components/ElementComponent.vue';

const route = useRoute();
const router = useRouter();
const peopleStore = usePeopleStore();
const projectStore = useProjectStore();

const projectId = computed(() => route.params.id);
const project = computed(() => projectStore.getProject(parseInt(projectId.value, 10)));
const person = computed(() => peopleStore.getPerson(project.value?.person));

const imgBasePath = '/img/project/' + route.params.id + '/';
const numberOfImages = 3;

function goToPerson(id) {
  router.push(`/people-${id}`);
}
useHead({
  title: project.value.name +" - Brave Sisters",
  meta:[
    {
      name:"description",
      content:"This page contains a short description of " + project.value.name + ". After that we can find the referent of this activity and the end some correlated images"
    },
    {
      name:"keywords",
      content: project.value.name
    }
  ]
})
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
      <div class="staff-container">
        <ElementComponent
            :type="'people'"
            :item="person"
            :onClick="goToPerson"
        />
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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

</style>
