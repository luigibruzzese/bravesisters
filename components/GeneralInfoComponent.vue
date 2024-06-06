<script setup lang="js">
    defineProps({
        id: Number,
        fullName: String,
        role: String,
        shortPresentation: String
    })
</script>

<template>
    <div class="generalInfo">
        <NuxtLink :href="'/people-' + (parseInt(id)-1).toString()">
            <img alt="Left arrow" class="arrow" src="~/assets/icons/left-arrow.png"/>
        </NuxtLink>
        <div>
            <img class="portrait" :src="'/_nuxt/assets/img/people/' + id + '.png'"/>
            <div>
                <h2>{{ fullName }}</h2>
                <h4>{{ role }}</h4>
                <p>{{ shortPresentation }}</p>
            </div>
        </div>
        <NuxtLink :href="'/people-' + (parseInt(id)+1).toString()">
            <img alt="Right arrow" class="arrow" src="~/assets/icons/right-arrow.png"/>
        </NuxtLink>
    </div>
</template>

<style scoped>
    .arrow {
    //border-left: #b7403c solid 2px; width: 35px; width: 25px;
        width: 60px;
    }

    .generalInfo, .generalInfo > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: center;
        margin: 5%;
    }


    .portrait {
        width: 300px;
        margin: 5%;
    }

    @media(max-width: 800px) {
        .generalInfo > div {
            display: initial;
        }
    }
    @media(max-width: 600px) {
        .portrait {
            width: 200px;
        }
        .arrow {
            width: 50px;
        }
    }
</style>