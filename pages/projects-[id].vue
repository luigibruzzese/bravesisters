<script setup lang="js">
import {useRoute, useRouter} from 'vue-router';
import {usePeopleStore} from '@/stores/people.ts';
import {computed} from 'vue';
import {useProjectStore} from "~/stores/projects.ts";

const route = useRoute();
const router = useRouter();
const peopleStore = usePeopleStore();
const projectStore = useProjectStore();

const projectId = computed(() => route.params.id);
const project = computed(() => projectStore.getProject(parseInt(projectId.value, 10)));
const person = computed(() => peopleStore.getPerson(project.value?.person));

const imgBasePath = '/img/projects/' + route.params.id + '/';
const numberOfImages = 3;

const SEOData = computed( () => new Object ({
    title: project.value.name + " - Brave Sisters",
    meta: [
        {
            name: "description",
            content: "This page contains a short description of " + project.value.name + ". After that we can find the referent of this activity and the end some correlated images"
        },
        {
            name: "keywords",
            content: project.value.name
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
        <section id="project">
            <GeneralInfoComponent
                    v-if="project"
                    :id="project.id"
                    :name="project.name"
                    :subtitle="'Project'"
                    :content="project.description"
                    context="projects"
                    total=5
            />
        </section>

        <section v-if="person" id="staff">
            <div class="title-with-lines"><h2>Project's staff</h2></div>
            <div>
                <RelatedElementComponent
                        :id="person.id"
                        :type="'people'"
                        :name="person.name"
                        :description="person.description"
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
    padding-top: 30px;
}

button {
    padding: 10px 15px;
}


</style>
