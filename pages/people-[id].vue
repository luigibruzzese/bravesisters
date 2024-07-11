<script setup lang="js">
import {useRoute} from 'vue-router';
import {usePeopleStore} from '@/stores/people.ts';
import {computed} from 'vue';
import {useProjectStore} from '~/stores/projects.ts';
import {useServiceStore} from '~/stores/services.ts';

const route = useRoute();
const peopleStore = usePeopleStore();
const projectStore = useProjectStore();
const serviceStore = useServiceStore();

const personId = computed(() => route.params.id);
const person = computed(() => peopleStore.getPerson(parseInt(personId.value, 10)));
const projects = computed(() => projectStore.getPersonProjects(parseInt(personId.value, 10)));
const services = computed(() => serviceStore.getPersonServices(parseInt(personId.value, 10)));

const SEOData = computed( () => new Object ({
    title: person.value.name + " " + person.value.surname + " - Brave Sisters",
    meta: [
        {
            name: "description",
            content: "This page contains a short curriculum of " + person.value.name + ". After that we can find all the activities for which he/she is responsible "

        },
        {
            name: "keywords",
            content: person.value.name + ", " + person.value.role
        }
    ]
}))
</script>

<template>
    <Head>
        <Title>{{SEOData.title}}</Title>
        <Meta v-for="meta in SEOData.meta" :name="meta.name" :content="meta.content"/>
    </Head>

    <main>
        <section>
            <GeneralInfoComponent
                    v-if="person"
                    :id="person.id"
                    :name="`${person.name} ${person.surname}`"
                    :subtitle="person.role"
                    :content="person.description"
                    context="people"
                    :total=20
            />
        </section>
        <section v-if="projects.length">
            <div class="title-with-lines"><h2>{{ person.name }} {{ person.surname }}'s projects</h2></div>
            <div>
                <RelatedElementComponent
                        v-for="project in projects"
                        :id="project.id"
                        :type="'projects'"
                        :name="project.name"
                        :description="project.description"
                />
            </div>
        </section>
        <section v-if="services.length">
            <div class="title-with-lines"><h2>{{ person.name }} {{ person.surname }}'s services</h2></div>
            <div>
                <RelatedElementComponent
                        v-for="service in services"
                        :id="service.id"
                        :type="'services'"
                        :name="service.name"
                        :description="service.description"
                />
            </div>
        </section>
    </main>
</template>

<style scoped>
main {
    padding-top: 30px;
}
</style>
