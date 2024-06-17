<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { usePeopleStore } from '@/stores/people.ts';
import { computed, watch } from 'vue';
import {use} from "h3";

const route = useRoute();
const router = useRouter();
const store = usePeopleStore();

const serviceId = computed(() => route.params.id);
const service = computed(() => store.service.find(s => s.id === parseInt(serviceId.value, 10)));
const person = computed(() => store.people.find(p => p.id === service.value?.person));
//const projects = computed(() => store.project.filter(project => project.person === service.value?.person));
const reviews = store.review;

const input = reactive({
  name: '',
  surname: '',
  comment:'',
  service: serviceId.value
})

watch(serviceId, async () => {
  const id = parseInt(serviceId.value, 10);
  if (isNaN(id) || id < 1 || id > 5) {
    window.location.href = '/services';
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
  return Array.from({ length: count }, (_, i) => `/img/services/${id}/${i + 1}.jpg`);
};
</script>

<template>
  <main>
    <section id="service">
      <button @click="goToProjects" id="back-button">< Up to all services</button>
      <h1 id="info_service">Service</h1>
      <GeneralInfoComponent
          v-if="service"
          :id="service.id"
          :full-name="service.name"
          :role="'Service'"
          :short-presentation="service.description"
          context="services"
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

    <section id="review">
      <h2 class="title-with-lines">Reviews</h2>
      <div v-for="review in reviews"  class="review_container">
        <h3 v-if="review.service==service.id">{{ review.name }} {{review.surname}}</h3>
        <p v-if="review.service==service.id">{{new Date(review.date).toLocaleString('nl-NL')}}</p>
        <p v-if="review.service==service.id">{{review.comment}}</p>
      </div>
      <h3 class="add_review">Add a new review</h3>
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name*</label>
            <input v-model="input.name" type="text" id="name" name="name" required />
          </div>
          <div class="form-group">
            <label for="surname">Surname*</label>
            <input v-model="input.surname" type="text" id="surname" name="surname" required />
          </div>
        </div>
        <div class="form-group full-width">
          <label for="comment">Comment*</label>
          <input v-model="input.comment" id="comment" name="comment" required></input>
        </div>
        <button @click="store.addReview(input)">Add review</button>
      </form>
    </section>

    <section id="gallery">
      <h2 class="title-with-lines">Gallery</h2>
      <div class="gallery-container">
        <img v-for="(src, index) in getGalleryImages(service.id)" :key="index" :src="src" alt="Gallery Image" />
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

#info_service {
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

.add_review{
  position: relative;
  color: #4c8189;
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

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  max-width: 45%;
}

.form-group.full-width {
  max-width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

form button {
  display: block;
  width: 8%;
  padding: 8px;
  margin: 20px auto 0;
  background-color: #4c8189;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}

form button:hover {
  background-color: #3a6775;
}

@media (max-width: 768px) {
  .project,
  .service,
  .staff-container {
    flex: 1 1 100%;
  }
}
</style>
