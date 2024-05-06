<script setup lang="ts">
  import {target} from "@vue/devtools-shared";

  function openSubMenu () {
    event.target.children[0].style.display = "flex";
  }
  function closeSubMenu() {
      event.target.children[0].style.display = "none";
  }
</script>

<template>
  <header>
      <div>
          <img class="logo" src="~/assets/logos/logo.png"/>
          <div style="display: initial;">
              <h1>Brave Sisters</h1>
              <h2>One for all, all for women</h2>
          </div>
      </div>
      <div>
          <div style="display: initial;">
              <div style="justify-content: flex-end;">
                  <NuxtLink to="/contacts">Contacts</NuxtLink>
                  <img class="icon" alt="Search" style="border-left: #b7403c 2px solid;" src="~/assets/icons/search icon.png">
              </div>
             <nav>
                  <NuxtLink to="/">Home</NuxtLink>
                  <NuxtLink to="/dogs">People</NuxtLink>
                  <NuxtLink to="/about" @mouseover="openSubMenu()" @mouseleave="closeSubMenu()">Activities
                     <div class="submenu">
                         <NuxtLink to="/dogs">Projects</NuxtLink>
                         <NuxtLink to="/dogs">Services</NuxtLink>
                     </div>
                  </NuxtLink>
                 <img class="icon" style="margin-left: -35px; height: 100%; margin-top: 10px;"  src="~/assets/icons/arrow down.png"

             </nav>
          </div>

      </div>


  </header>

  <main>
    <slot/>
  </main>

  <footer>
    Made by me :)
  </footer>
</template>

<style scoped>
header, footer
{
  background-color: #f0e6dd;
}

footer
{
  flex-shrink: 0;
  text-align: center;
  margin-top: auto;
  border-top: 5px solid brown;
  padding: 10px;

  min-height: 1vh;
}

header
{
  padding: 0 20px 0 20px;

    display: flex;


}


.icon {
    //border-left: #b7403c solid 2px;
    width: 10%;
    margin-left: 10px;
    padding-left: 10px;
}

header  div {
    display: flex;
    align-items: center;
    text-align: right;
}


nav {
  display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 22px;
}

.submenu {
    position:absolute;
    flex-direction: column;
    background-color: #f0e6dd;
    width: 110px;
    display: none;
}

a {
    text-decoration: none;
    font-weight: bold;
    line-height: 40px;
    color: #5c5c5c;
}
a:hover {
    color: #4c8189;
}
menu {
    border: #b7403c solid;
    border-width: 3px 0 3px 0;
}

h2 {
    margin-top:0;
}
h1 {
    margin-top: 20px;
}

.logo {
  width: 15%;
    margin-right: 2%;
    border-right: #b7403c solid 2px;
}

@media (max-width: 800px) {
    .logo {
        width: 30%;

    }

    .icon {
        width: 5%;
    }
    header
    {
        padding: 20px 20px 0 20px;

        flex-direction: column;

    }
    header > div {

        justify-content: center;
        text-align: center;
    }

}
</style>