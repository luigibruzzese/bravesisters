<script setup lang="ts">
</script>

<template>
  <main>
    <section id="center">
      <h1 id="info_home">The Center</h1>
      <img id="main-img" src="/img/homepage/building_photo.jpg" alt="Building photo" />
    </section>
    <section id="mission">
      <h2 class="title-with-lines">Mission</h2>
      <p>
        The mission of Brave Sister Center is to provide unwavering support, empowerment, and resources to women facing adversity, particularly those experiencing violence and family maltreatment. Through compassionate care and tailored services, we strive to create a safe haven where women can find solace, regain their confidence, and rebuild their lives. Our dedicated team works tirelessly to foster a community of resilience and healing, and advocating for justice and equality for all women. At Brave Sister, we believe in the power of solidarity and the potential for positive change, endeavoring to break the cycle of violence and cultivate a future where every woman can thrive free from fear.
      </p>
    </section>
    <section id="history-people">
      <div id="history">
        <h2 class="title-with-lines">History</h2>
        <p>
          Brave Sister Center was founded in 2006 by a group of passionate individuals dedicated to addressing the urgent need for support and advocacy for women facing violence and family maltreatment. Despite the challenges we have faced along the way, our commitment to our mission has never wavered. With each passing year, we have continued to adapt and innovate, striving to create a more inclusive and supportive environment for all women. As we look to the future, we remain steadfast in our belief that every woman deserves to live a life free from violence and fear, and we are dedicated to doing everything in our power to make that vision a reality.
        </p>
      </div>
      <div id="people">
        <h2 class="title-with-lines">People</h2>
        <div class="image-container" @click="goToPeople">
          <img id="main-img" src="/img/people/collaboration.png" alt="Staff photo" />
          <div class="hover-text">Meet the team</div>
          <div class="hover-overlay"></div>
        </div>
      </div>
    </section>
    <section id="location-hours">
      <h2 class="title-with-lines">Location</h2>
    </section>
    <section id="location">
      <div id="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.4934116439467!2d11.085237475822755!3d43.866327638620774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af61bd731b397%3A0x10e39e397c812421!2sVia%20di%20Grignano%2C%20102%2C%2059100%20Prato%20PO!5e0!3m2!1sit!2sit!4v1716039615957!5m2!1sit!2sit"
                width="100%"
                height="450"
                style="border:0;"
                allowfullscreen="false"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
      <div id="contact-info">
        <h3 id="hours">Opening hours</h3>
        <p>Mon - Fri: 9:00 - 12:00 / 13:00 - 18:00</p>
        <p>Saturday: 9:00 - 12:00</p>
        <p>Sunday: Closed</p>
        <h3 id="address">Address</h3>
        <p>Via di Grignano 102, Prato</p>
      </div>
    </section>
    <section id="gallery">
      <h2 class="title-with-lines">Gallery</h2>
      <div id="gallery-container">
        <button @click="previousImages" class="gallery-button">&lt;</button>
        <div id="gallery-images">
          <img v-for="(src, index) in currentImages" :src="src" :alt="'Gallery image ' + (index + 1)">
        </div>
        <button @click="nextImages" class="gallery-button">&gt;</button>
      </div>
    </section>
  </main>
</template>

<script lang="js">
export default {
  data: () => ({
    images: [
      "/img/homepage/home_1.jpg",
      "/img/homepage/home_4.jpg",
      "/img/homepage/home_2.jpg",
      "/img/homepage/home_5.jpg",
      "/img/homepage/home_3.jpg",
      "/img/homepage/home_6.jpg"
    ],
    currentImages: [],
    imageSet: 0
  }),
  mounted() {
    this.currentImages = this.images.slice(0, 3);
  },
  methods: {
    nextImages() {
      this.imageSet = (this.imageSet + 1) % 2;
      this.currentImages = this.images.slice(this.imageSet * 3, this.imageSet * 3 + 3);
    },
    previousImages() {
      this.imageSet = (this.imageSet - 1 + 2) % 2;
      this.currentImages = this.images.slice(this.imageSet * 3, this.imageSet * 3 + 3);
    },
    goToPeople() {
      window.location.href = '/people';
    }
  }
}
</script>

<style scoped>
main {
  padding: 20px;
}

#info_home {
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

#main-img {
  display: block;
  margin: auto;
  width: 100%;
  height: auto;
}

section {
  margin-bottom: 40px;
}

#mission, #history-people, #location, #gallery {
  padding: 20px;
  background-color: #f7f1e3;
  border-radius: 8px;
}

#history-people {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#history, #people {
  width: 48%;
}

.image-container {
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  font-size: 1.3em;
  text-align: center;
  background-color: #4c8189;
  padding: 10px 20px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.image-container:hover .hover-text {
  opacity: 1;
}

#hours, #address {
  color: #4c8189;
}

#location {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#map {
  width: 100%;
  max-width: 60%;
  margin-bottom: 20px;
}

#contact-info {
  width: 100%;
  max-width: 35%;
}

#gallery-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.gallery-button {
  background: none;
  border: none;
  font-size: 1.5em;
  padding: 7px;
  background-color: #4c8189;
  border-radius: 7px;
}

#gallery-images {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 80%;
}

#gallery-images img {
  width: 410px;
  height: 410px;
  object-fit: cover;
  border-radius: 10px;
  margin: 15px;
}

@media (max-width: 1000px) {
  #history, #people {
    width: 100%;
  }

  #map, #contact-info {
    width: 100%;
    max-width: 100%;
  }

  #map {
    width: 100%;
    max-width: 90%;
    margin-bottom: 10px;
  }

  #contact-info {
    width: 100%;
    max-width: 23%;
  }
}
</style>




