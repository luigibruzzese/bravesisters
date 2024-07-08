<script setup lang="js">
import {onMounted, ref} from "vue";

const props = defineProps({
    imgBasePath: String,
    numberOfImages: Number
})

onMounted(() => {
    window.addEventListener("resize", () => {
        if (window.innerWidth < 800)
            shownImages.value = 1;
        else if (window.innerWidth < 1000)
            shownImages.value = 2;
        else
            shownImages.value = 3;
    });
})


const currImage = ref(0);
let shownImages = ref(3);

function nextImages() {
    if (currImage.value === props.numberOfImages - 1)
        currImage.value = 0;
    else
        currImage.value++;
}

function previousImages() {
    if (currImage.value === 0)
        currImage.value = props.numberOfImages - 1;
    else
        currImage.value--;
}
</script>

<template>
    <section id="gallery">
        <h2 class="title-with-lines">Gallery</h2>
        <div id="gallery-container">
            <button v-show="numberOfImages > shownImages" @click="previousImages" class="gallery-button">&lt;</button>
            <div id="gallery-images">
                <img v-for="i in shownImages" :src="imgBasePath + ((currImage + i - 1) % numberOfImages) + '.webp'"
                     :alt="'Gallery image ' + ((currImage + i - 1) % numberOfImages)">
            </div>
            <button v-show="numberOfImages > shownImages" @click="nextImages" class="gallery-button">&gt;</button>
        </div>
    </section>
</template>

<style scoped>
#gallery {
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    font-size: 20px;
}

#gallery-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.gallery-container img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 10px;
    margin: 15px;
}

.gallery-button {
    border: none;
    font-size: 1.5em;
    padding: 7px;
    background: #4c8189 none;
    border-radius: 7px;
}

#gallery-images {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
}

#gallery-images img {
    width: 25%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    margin: 15px;
}

@media (max-width: 1000px) {
    #gallery-images img {
        width: 40%;
    }

    #gallery {
        margin-bottom: 20px;
        margin-top: 20px;
    }
}

@media (max-width: 800px) {
    #gallery-images img {
        width: 90%;
    }
    .gallery-container img {
        width: 100%;
        max-width: 410px;
    }
}
</style>