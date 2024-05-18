<script setup lang="ts">

</script>

<template>
  <main>
    <!--
      <h1 id="info_home">
        The Center
      </h1>
      <img id="main-img" src="~/assets/img/building_photo.jpg" />
    -->
    <section id="center">
        <h1 id="info_home">The Center</h1>
        <img id="main-img" src="~/assets/img/building_photo.jpg" alt="Building photo" />
      </section>
      <section id="mission">
        <h2>Mission</h2>
        <p>
          The mission of Brave Sister Center is to provide unwavering support, empowerment, and resources to women facing adversity, particularly those experiencing violence and family maltreatment. Through compassionate care and tailored services, we strive to create a safe haven where women can find solace, regain their confidence, and rebuild their lives. Our dedicated team works tirelessly to foster a community of resilience and healing, and advocating for justice and equality for all women. At Brave Sister, we believe in the power of solidarity and the potential for positive change, endeavoring to break the cycle of violence and cultivate a future where every woman can thrive free from fear.
        </p>
      </section>
      <section id="history-people">
        <div id="history">
          <h2>History</h2>
          <p>
            Brave Sister Center was founded in 2006 by a group of passionate individuals dedicated to addressing the urgent need for support and advocacy for women facing violence and family maltreatment.
            Despite the challenges we have faced along the way, our commitment to our mission has never wavered. With each passing year, we have continued to adapt and innovate, striving to create a more inclusive and supportive environment for all women. As we look to the future, we remain steadfast in our belief that every woman deserves to live a life free from violence and fear, and we are dedicated to doing everything in our power to make that vision a reality.
          </p>
        </div>
        <div id="people">
          <h2>Our people</h2>
          <p>
            At Brave Sister Center, our team consists of highly qualified professionals dedicated to supporting women in need. Our staff includes psychologists specialized in gender-based violence, social workers experienced in women's rights, lawyers knowledgeable in legal issues related to domestic violence, and healthcare providers offering medical and psychological assistance. Additionally, we collaborate with volunteers and interns who contribute to our daily work with passion and dedication.
          </p>
          <a href="#">Meet the team</a>
        </div>
      </section>
      <section id="location">
        <h2>Location</h2>
        <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.4934116439467!2d11.085237475822755!3d43.866327638620774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af61bd731b397%3A0x10e39e397c812421!2sVia%20di%20Grignano%2C%20102%2C%2059100%20Prato%20PO!5e0!3m2!1sit!2sit!4v1716039615957!5m2!1sit!2sit"
            width="600"
            height="450" 
            style="border:0;" 
            allowfullscreen="false" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div id="contact-info">
          <h3>Opening hours</h3>
          <p>Mon - Fri: 9:00 - 12:00 / 13:00 - 18:00</p>
          <p>Saturday: 9:00 - 12:00</p>
          <p>Sunday: Closed</p>
          <h3>Address</h3>
          <p>Via di Grignano 102, Prato</p>
        </div>
      </section>
      <section id="gallery">
        <h2>Gallery</h2>
        <div id="gallery-images">
          <img src="~/assets/img/building_photo.jpg" alt="Gallery image 1">
          <img src="~/assets/img/building_photo.jpg" alt="Gallery image 2">
          <img src="~/assets/img/building_photo.jpg" alt="Gallery image 3">
        </div>
      </section>
  </main>
</template>

<script lang="js">
export default {
    data: () => ({
    }),
    mounted() {
        //document.querySelector("a[href=\"/\"]").style.color = "#4c8189";
    },
    methods: {
    }
}
</script>
<!--
<style scoped>
#main-img {
  margin: auto;
  width: 100%;
}


#info_home {
  font-size: 2em;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #4c8189;
  text-align: center;
}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
-->

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
}

#history, #people {
  width: 48%;
}

#people a {
  display: inline-block;
  margin-top: 10px;
  color: #4c8189;
  text-decoration: underline;
}

#location {
  display: flex;
  justify-content: space-between;
}

#map {
  width: 60%;
}

#contact-info {
  width: 35%;
}

#gallery-images {
  display: flex;
  justify-content: space-around;
}

#gallery-images img {
  width: 30%;
  border-radius: 8px;
}

</style>