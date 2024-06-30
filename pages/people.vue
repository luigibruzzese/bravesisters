<script setup lang="js">
import ElementInfoComponent from '@/components/ElementInfoComponent.vue';

const people = ref(usePeopleStore().people), shown = ref(), numberOfPeople = people.value.length;

onMounted(() => {
    shown.value = 12;
})

function showMore() {
    if (shown.value + 6 > numberOfPeople)
        shown.value = numberOfPeople;
    else
        shown.value = shown.value + 6;
}
</script>

<template>
    <section id="people">
        <h1 id="title">People</h1>
        <div class="people-info">
            <img class="people-image" src="/img/people/collaboration.webp" alt="People Image"/>
            <div class="people-text">
                <p>At Brave Sister Center, our team consists of highly qualified professionals dedicated to supporting
                    women in need. Our staff includes psychologists specialized in gender-based violence, social workers
                    experienced in women's rights, lawyers knowledgeable in legal issues related to domestic violence,
                    and healthcare providers offering medical and psychological assistance. Additionally, we collaborate
                    with volunteers and interns who contribute to our daily work with passion and dedication.</p>
            </div>
        </div>
        <section id="our_people">
            <h2 class="title-with-lines">Our People</h2>
        </section>
        <div class="people-list">
            <ElementInfoComponent
                    v-for="person in people.slice(0, shown)"
                    :key="person.id"
                    :id="person.id"
                    :full-name="`${person.name} ${person.surname}`"
                    :role="person.role"
                    :short-presentation="person.description.slice(0, 80) + '...'"
            />
        </div>
        <div style="text-align: center; margin-top: 2%;">
            <button v-if="shown < numberOfPeople" @click="showMore">Show more people</button>
        </div>
    </section>
</template>

<style scoped>
#title {
    font-size: 2em;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #4c8189;
    text-align: center;
}

#our_people, #people {
    margin-top: 40px;
    margin-bottom: 40px;
}

.title-with-lines {
    position: relative;
    text-align: center;
    color: #4c8189;
    font-size: 20px;
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

.people-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
}

.people-image {
    width: 700px;
    height: auto;
    margin-right: 20px;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 10px;
}

.people-text {
    max-width: 600px;
    font-size: larger;
    margin-left: 50px;
}

.people-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 20px;
}

@media (max-width: 1000px) {
    .people-info {
        flex-direction: column;
    }

    .people-image, .people-text {
        width: 100%;
        margin-right: 0;
        margin-bottom: 20px;
    }
}
</style>