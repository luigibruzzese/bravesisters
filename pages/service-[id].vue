<script setup lang="js">
import {useRoute, useRouter} from 'vue-router';
import {usePeopleStore} from '@/stores/people.ts';
import {computed, watch} from 'vue';
import {useServiceStore} from "~/stores/services.ts";
import {useReviewStore} from "~/stores/reviews.ts";

const route = useRoute();
const router = useRouter();
const peopleStore = usePeopleStore();
const serviceStore = useServiceStore();
const reviewStore = useReviewStore();
let numberOfShownReviews = ref(3);
let feedbackMessage = ref('')

onMounted(() => {
    window.addEventListener("resize", () => {
        if (window.innerWidth < 800)
            numberOfShownReviews.value = 1;
        else if (window.innerWidth < 1000)
            numberOfShownReviews.value = 2;
        else
            numberOfShownReviews.value = 3;
    });
})


const serviceId = computed(() => route.params.id);
const service = computed(() => serviceStore.getService(parseInt(serviceId.value, 10)));
const person = computed(() => peopleStore.getPerson(service.value?.person));
let review = computed(() => (reviewStore.review.filter((r) => r.service === parseInt(serviceId.value))));
const shownReviews = computed(() => review.value.slice(reviewsIndex.value, reviewsIndex.value + numberOfShownReviews.value))

const imgBasePath = '/img/service/' + route.params.id + '/';
const numberOfImages = 3;

const inputReview = reactive({
    name: '',
    surname: '',
    comment: '',
    date: '',
    service: parseInt(serviceId.value)
})

let semdimgReview = {
    name: '',
    surname: '',
    comment: '',
    date: '',
    service: parseInt(serviceId.value)
}

async function addReview(e) {
    sendimgReview.date = new Date().toISOString().substring(0, 10)
    sendimgReview.name = inputReview.name;
    sendimgReview.surname = inputReview.surname;
    sendimgReview.comment = inputReview.comment;
    reviewStore.addReview(sendimgReview).then(error => {
      if(error)
        feedbackMessage.value = error;
      else
        feedbackMessage.value = 'Thank you for your feedback! Your review has been correctly registered.'
    })
    const form=document.getElementById("form")
    form.reset()
    inputReview.name=null
    inputReview.surname=null
    inputReview.comment=null
}

let numberOfReviews = computed(() => review.value.length);
let reviewsIndex = ref(0);

function goToPerson(id) {
    router.push(`/people-${id}`);
}

</script>

<template>
    <main>
        <section id="service">
            <button @click="router.push(`/services`);" id="back-button">< Up to all services</button>
            <h1 id="info_service">Service</h1>
            <GeneralInfoComponent
                    v-if="service"
                    :id="service.id"
                    :full-name="service.name"
                    :role="'Service'"
                    :short-presentation="service.description"
                    context="service"
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

        <section id="review">
            <h2 class="title-with-lines">Reviews</h2>
            <div id="reviews">
                <NuxtLink v-show="numberOfReviews > numberOfShownReviews && reviewsIndex > 0" @click="reviewsIndex--;">
                    <img alt="Left arrow" class="arrow" src="~/assets/icons/left-arrow.png"/>
                </NuxtLink>
                <div v-for="review in shownReviews" class="review_container">
                    <h3>{{ review.name }} {{ review.surname }}</h3>
                    <p>{{ new Date(review.date).toLocaleDateString('eng-us') }}</p>
                    <p>{{ review.comment }}</p>
                </div>
                <NuxtLink
                        v-show="numberOfReviews > numberOfShownReviews && reviewsIndex + numberOfShownReviews !== numberOfReviews"
                        @click="reviewsIndex++">
                    <img alt="Right arrow" class="arrow" src="~/assets/icons/right-arrow.png"/>
                </NuxtLink>
            </div>
            <h3 class="add_review">Add a new review</h3>
            <form id="form">
                <div class="form-row">
                    <div class="form-group">
                        <label for="name">Name*</label>
                        <input v-model="inputReview.name" type="text" id="name" name="name" required/>
                    </div>
                    <div class="form-group">
                        <label for="surname">Surname*</label>
                        <input v-model="inputReview.surname" type="text" id="surname" name="surname" required/>
                    </div>
                </div>
                <div class="form-group full-width">
                    <label for="comment">Comment*</label>
                    <input v-model="inputReview.comment" v-on:keyup.enter="addReview" id="comment" name="comment" required/>
                </div>
              <br>
              <input type="submit" value="Add review" @click="addReview" class="submit">
            </form>
            <h3>{{feedbackMessage}}</h3>
        </section>

        <GalleryComponent
                :number-of-images=numberOfImages
                :img-base-path=imgBasePath
        />

        <br>
        <br>
    </main>
</template>

<style scoped>
main {
    padding: 20px;
}

.arrow {
    width: 60px;
}

#review {
    text-align: center;
}

button {
    margin: 20px;
}

.review_container {
    border: 2px dashed #4c8189;
    border-radius: 10px;
    padding: 20px;
    width: 30%;
}

#reviews {
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 2%;
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

.add_review {
    position: relative;
    color: #4c8189;
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
    .staff-container {
        flex: 1 1 100%;
    }
}
</style>
