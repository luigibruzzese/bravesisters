import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';
import { useFetch } from '#app';

interface Person {
  id: number;
  name: string;
  surname: string;
  role: string;
  description: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  person: number
}

interface Service {
  id: number;
  name: string;
  description: string;
  person: number
}

export const usePeopleStore = defineStore('person', () => {
  const people = reactive([] as Person[]);
  const project = reactive([] as Project[]);
  const service = reactive([] as Service[]);

  async function initPeople() {
    const { data } = await useFetch<Person[]>('/api/people');
    const list = data.value;
    if (list) {
      people.splice(0, people.length);  // Clear the list
      people.push(...list);
    }

  }

  async function initProject() {
    const { data } = await useFetch<Project[]>('/api/project');
    const list = data.value;
    if (list) {
      project.splice(0, project.length);  // Clear the list
      project.push(...list);
    }
  }

  async function initService() {
    const { data } = await useFetch<Person[]>('/api/service');
    const list = data.value;
    if (list) {
      service.splice(0, people.length);  // Clear the list
      service.push(...list);
    }

  }
  async function init(){
    initPeople();
    initProject();
    initService()
  }

  init()

  return { people, project, service, init };
});
