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

interface Review {
  id: number;
  name: string;
  surname: string;
  date: string;
  comment: string;
  service: number;
}

export const usePeopleStore = defineStore('person', () => {
  const people = reactive([] as Person[]);
  const project = reactive([] as Project[]);
  const service = reactive([] as Service[]);
  const review = reactive([] as Review[]);

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
    const { data } = await useFetch<Service[]>('/api/service');
    const list = data.value;
    if (list) {
      service.splice(0, people.length);  // Clear the list
      service.push(...list);
    }
  }

  async function initReview() {
    const { data } = await useFetch<Review[]>('/api/review');
    const list = data.value;
    if (list) {
      review.splice(0, people.length);  // Clear the list
      review.push(...list);
    }
  }

  async function init(){
    initPeople();
    initProject();
    initService();
    initReview();
  }

  init()

  return { people, project, service, review, init };
});
