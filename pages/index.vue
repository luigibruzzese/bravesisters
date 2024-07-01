<script setup lang="js">
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const imgBasePath = "/img/homepage/home_";
const numberOfImages = 6;

const currImage = ref(0);
let shownImages = 3;
const textVisibility = ref([false, false, false]);

onMounted(() => {
  currImage.value = 0;
  // Animate text appearance
  setTimeout(() => {
    textVisibility.value[0] = true;
  }, 500);
  setTimeout(() => {
    textVisibility.value[1] = true;
  }, 1000);
  setTimeout(() => {
    textVisibility.value[2] = true;
  }, 1500);
})

function nextImages() {
  if (currImage.value === numberOfImages - 1)
    currImage.value = 0;
  else
    currImage.value++;
}

function previousImages() {
  if (currImage.value === 0)
    currImage.value = numberOfImages - 1;
  else
    currImage.value--;
}

function goToPeople() {
  router.push(`/people`);
}
function goToProjects() {
  router.push(`/projects`);
}
function goToServices() {
  router.push(`/services`);
}
</script>

<template>
  <main>
    <section id="center">
      <div class="image-text-container">
        <img id="main-img" src="public/img/homepage/main-image.webp" alt="Building photo" />
        <div class="text-overlay">
          <span v-for="(text, index) in ['REACT NOW,', 'DON\'T WAIT', 'ANY LONGER']" :key="index"
                :class="{ 'visible': textVisibility[index] }" class="text-line">
            {{ text }}
          </span>
        </div>
      </div>
    </section>
    <section id="warning-signs">
      <h2 class="title-with-lines">Signs of Violence</h2>
      <div class="warning-content">
        <p>Violence can take many forms. If you experience any of these, you may be in an abusive situation:</p>
        <ul>
          <li></li>
          <li>Your partner constantly criticizes or humiliates you</li>
          <li>You feel afraid of your partner or anxious to please them</li>
          <li>Your partner controls your finances or who you see</li>
          <li>Your partner threatens you or your loved ones</li>
          <li>You feel pressured or forced into intimate situations</li>
        </ul>
        <p>Remember, you're not alone. Help is available. If you're in immediate danger, call emergency services.</p>
      </div>
    </section>
    <section id="discoverUs">
      <h2 class="title-with-lines">Discover us</h2>
      <div class="image-container" @click="goToPeople">
        <img src="/img/homepage/collaboration_1.webp" alt="Staff photo" />
        <div class="hover-text">Meet the team</div>
        <div class="hover-overlay"></div>
      </div>
    </section>
    <section id="project-service">
      <div id="project">
        <h2 class="title-with-lines">Projects</h2>
        <div class="image-container" @click="goToProjects">
          <img id="img-home" src="/img/homepage/1.webp" alt="Staff photo" />
          <div class="hover-text">Discover our projects</div>
          <div class="hover-overlay"></div>
        </div>
      </div>
      <div id="service">
        <h2 class="title-with-lines">Services</h2>
        <div class="image-container" @click="goToServices">
          <img id="img-home" src="/img/homepage/2.webp" alt="Staff photo" />
          <div class="hover-text">Discover our services</div>
          <div class="hover-overlay"></div>
        </div>
      </div>
    </section>
    <section id="gallery">
      <h2 class="title-with-lines">Gallery</h2>
      <div id="gallery-container">
        <button @click="previousImages" class="gallery-button">&lt;</button>
        <div id="gallery-images">
          <img v-for="i in shownImages" :src="imgBasePath + ((currImage + i - 1) % numberOfImages) + '.webp'"
               :alt="'Gallery image ' + ((currImage + i - 1) % numberOfImages)">
        </div>
        <button @click="nextImages" class="gallery-button">&gt;</button>
      </div>
    </section>
  </main>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#warning-signs {
  background-color: #ffffff;
  padding: 40px;
  border-radius: 8px;

}

.warning-content {
  max-width: 800px;
  margin-top: 30px;
  font-size: 1.1em;
  line-height: 1.8;
}

.warning-content ul {
  list-style-type: none;
  padding-left: 20px;
}

.warning-content li {
  margin-bottom: 10px;
  position: relative;
}

.warning-content li::before {
  content: "•";
  color: #4c8189;
  font-weight: bold;
  position: absolute;
  left: -15px;
}



body {
  margin: 0;
  padding: 0;
}

main {
  padding: 20px;
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

.image-text-container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  position: relative;
  margin-left: -20px;
}

#main-img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0 20px 20px 0;
  margin-left: 0;
  z-index: 1;
}


.text-overlay {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  font-size: 3em;
  font-family: 'Impact', sans-serif;
  font-weight: bold;
  color: #ffffff;
  text-align: left;
  z-index: 0;
  margin-left: 20px;
}

.text-line {
  opacity: 0;
  transform: translateX(-50%);
  transition: opacity 0.5s, transform 0.5s, filter 0.5s;
  filter: blur(5px);
  margin-bottom: 20px;
  background-color: #4c8189;
  padding: 5px 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.text-line.visible {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
}

section {
  margin-bottom: 40px;
}

#discoverUs,
#project-service,
#gallery {
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  font-size: 20px;
}

#project-service {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#project,
#service {
  width: 48%;
  font-size: 20px;
}

.image-container {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-top: 20px;
  max-width: 75%;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  border-radius: 15px;
}


.image-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.image-container img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: opacity 0.3s ease;
  display: block;
}

.image-container:hover img {
  opacity: 0.6;
}

.hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 1.1em;
  text-align: center;
  background-color: #4c8189;
  padding: 10px 10px;
  border-radius: 10px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .hover-text {
  opacity: 1;
}


#gallery-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin: 15px;
}


@media (max-width: 1000px) {
  .text-overlay {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
  }

  .image-container {
    max-width: 80%;
  }
  #project, #service, #gallery{
    margin-bottom: 20px;
    margin-top: 20px;
  }
  .image-text-container {
    grid-template-columns: 1fr;
  }

  .text-overlay {
    font-size: 1.5em;
  }

  #project,
  #service {
    width: 100%;
  }
  .title-with-lines::before,
  .title-with-lines::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 28%;
    height: 1.1px;
    background-color: #4c8189;
  }
}
</style>
