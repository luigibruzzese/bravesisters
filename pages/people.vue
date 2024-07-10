<script setup lang="js">

const people = ref(usePeopleStore().people), shown = ref(12), numberOfPeople = people.value.length;

function showMore() {
    if (shown.value + 6 > numberOfPeople)
        shown.value = numberOfPeople;
    else
        shown.value = shown.value + 6;
}

useHead({
  title: "People - Brave Sisters",
  meta:[
    {
      name:"description",
      content:"This page contains a short description of the team of employees that works in Brave Sisters. " +
          "After that it shows all the members of the team with the link to the corresponding personal page"
    },
    {
      name:"keywords",
      content:"people, workers, employees, person, member"
    }
  ]
})

</script>

<template>
    <section id="service">
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
            <SpecificElementComponent
                    v-for="person in people.slice(0, shown)"
                    :key="person.id"
                    :id="person.id"
                    :full-name="`${person.name} ${person.surname}`"
                    :role="person.role"
                    :type = "'people'"
                    :short-presentation="person.description.slice(0, 80) + '...'"
            />
        </div>
        <div style="text-align: center; margin-top: 2%;">
            <button v-show="shown < numberOfPeople" @click="showMore">Show more people</button>
        </div>
    </section>
</template>

<style scoped>
#title {
    margin-top: 20px;
    margin-bottom: 20px;
}

#our_people, #service {
    margin-top: 40px;
    margin-bottom: 40px;
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