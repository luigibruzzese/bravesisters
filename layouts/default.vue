<script setup lang="js">
</script>

<template>
    <header>
        <div>
            <img class="logo" src="~/assets/logos/logo.png"/>
            <div class="vl"></div>
            <div style="display: initial;">
                <h1>Brave Sisters</h1>
                <h2>One for all, all for women</h2>
            </div>
        </div>
        <div>
            <div style="display: initial; text-align: right;">
                <button>
                    Contact us
                </button>
                <nav>
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/people">People</NuxtLink>
                    <div id="activities">
                        <NuxtLink to="/activities">Activities</NuxtLink>
                        <div class="submenu">
                            <NuxtLink to="/projects">Projects</NuxtLink>
                            <NuxtLink to="/services">Services</NuxtLink>
                        </div>
                        <img class="icon" src="~/assets/icons/arrow down.png">
                    </div>
                    <img class="icon" alt="Search" src="~/assets/icons/search icon.png">


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

<script lang="js">
export default {
    data: () => ({
    }),
    mounted() {
        let activities = document.querySelector("#activities");
        let subMenu = activities.children[1]

        function changeDisplay(evt, newValue) {
            evt.stopPropagation();
            subMenu.style.display = newValue;
        }

        activities.addEventListener("mouseover", (evt) => {
            changeDisplay(evt, "flex");
        })
        activities.addEventListener("mouseleave", (evt) => {
            changeDisplay(evt, "none");
        })
        activities.querySelector(".icon").addEventListener("click", (evt) => {
            subMenu.style.display === "flex" ?
                changeDisplay(evt, "none")
                : changeDisplay(evt, "flex");
        })
    },
    methods: {
    }
}
</script>

<style scoped>
header, footer {
    background-color: #f0e6dd;
}

footer {
    flex-shrink: 0;
    text-align: center;
    margin-top: auto;
    border-top: 5px solid brown;
    padding: 10px;

    min-height: 1vh;
}

header {
    padding: 0 20px 0 20px;
    display: flex;
    justify-content: space-between;

}

.vl {
    border-left: 3px solid #b7403c;
    height: 75%;
    margin: 15px;
}

.icon {
//border-left: #b7403c solid 2px; width: 35px;
}

header div {
    display: flex;
    align-items: center;
    text-align: left;
}


nav {
    display: flex;
    justify-content: center;
    gap: 30px;
    font-size: 22px;

}

#activities {
    position: relative;
}


.submenu {
    position: absolute;
    flex-direction: column;
    background-color: #f0e6dd;
    width: 130px;
    top: 40px;
    display: none;
}

a {
    text-decoration: none;
    font-weight: bold;
    line-height: 40px;
}

a:hover {
    color: #4c8189;
}

menu {
    border: #b7403c solid;
    border-width: 3px 0 3px 0;
}

h2 {
    margin-top: 0;
}

h1 {
    margin-top: 20px;
}

.logo {
    width: 150px;
}

@media (max-width: 800px) {
    .logo {

    }

    .icon {
    }

    header {
        padding: 20px 20px 0 20px;

        flex-direction: column;

    }



    header > div {

        justify-content: center;
        text-align: center;
    }

}
</style>