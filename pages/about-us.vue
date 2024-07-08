<script setup lang="js">
</script>

<template>
  <main>
    <section id="center">
      <h1 id="info_home">About us</h1>
      <img id="main-img" src="public/img/homepage/building_photo.webp" alt="Building photo"/>
    </section>
    <section id="mission-history">
      <div id="discoverUs">
        <h2 class="title-with-lines">Mission</h2>
        <p>
          The mission of Brave Sister Center is to provide unwavering support, empowerment, and resources to women
          facing adversity, particularly those experiencing violence and family maltreatment. Through
          compassionate care and tailored services, we strive to create a safe haven where women can find solace,
          regain their confidence, and rebuild their lives. Our dedicated team works tirelessly to foster a
          community of resilience and healing, and advocating for justice and equality for all women. At Brave
          Sister, we believe in the power of solidarity and the potential for positive change, endeavoring to
          break the cycle of violence and cultivate a future where every woman can thrive free from fear.
        </p>
      </div>
      <div id="project">
        <h2 class="title-with-lines">History</h2>
        <p>
          Brave Sister Center was founded in 2006 by a group of passionate individuals dedicated to addressing
          the urgent need for support and advocacy for women facing violence and family maltreatment. Despite
          the challenges we have faced along the way, our commitment to our mission has never wavered. With
          each passing year, we have continued to adapt and innovate, striving to create a more inclusive and
          supportive environment for all women. As we look to the future, we remain steadfast in our belief
          that every woman deserves to live a life free from violence and fear, and we are dedicated to doing
          everything in our power to make that vision a reality.
        </p>
      </div>
    </section>
    <section id="location-hours">
      <h2 class="title-with-lines">Location</h2>
    </section>
    <section id="location">
      <div id="map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.4934116439467!2d11.085237475822755!3d43.866327638620774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132af61bd731b397%3A0x10e39e397c812421!2sVia%20di%20Grignano%2C%20102%2C%2059100%20Prato%20PO!5e0!3m2!1sit!2sit!4v1716039615957!5m2!1sit!2sit"
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
  </main>
</template>

<style scoped>
main {
  padding: 20px;
}

#info_home {
  font-size: 2em;
  margin-top: 40px;
  margin-bottom: 40px;
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

#mission-history, #location {
  padding: 10px;
  background-color: white;
  border-radius: 8px;
  font-size: 20px;
}

#mission-history {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

#discoverUs, #project {
  width: 48%;
  font-size: 20px;
}

#hours, #address {
  color: #4c8189;
}

#location {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-size: 20px;
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

@media (max-width: 1000px) {
  #discoverUs, #project {
    width: 100%;
  }

  #mission-history {
    flex-direction: column;
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
    max-width: 100%;
  }
}
</style>
