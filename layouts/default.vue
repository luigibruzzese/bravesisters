<script setup lang="js">

const messages = [
    ["question1", "answer1"],
    ["question2", "answer2"]
];

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
                <NuxtLink to="/contact-us">
                    <button>
                        Contact us
                    </button>
                </NuxtLink>
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
        <img id="chatbot-icon" src="~/assets/icons/chatbot.png" alt="ChatBot"/>
        <div id="chatbot" style="display: none;">
            <div id="chatbot-top-bar">
                <p>Hi! I'm here to help you.</p>
                <img src="~/assets/icons/delete.png" alt="Close"/>
            </div>
            <div id="chatbot-messages">
                <template v-for="couple in messages">
                    <p user="true">{{couple[0]}}</p>
                    <p>{{couple[1]}}</p>
                </template>

            </div>
            <div id="chatbot-send-bar">
                <input>
                <img src="~/assets/icons/send-icon.png" alt="Send"/>
            </div>
        </div>
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



        /********* For chatbot ******************/
        let chatbotIcon = document.querySelector("#chatbot-icon");
        let chatbotDiv = document.querySelector("#chatbot");
        chatbotIcon.addEventListener("click", () => {
            if(chatbotDiv.style.display === "none") {
                chatbotDiv.style.display = "unset";
                chatbotIcon.style.right = "0";
                chatbotIcon.style.transform = "scale(1.2)";
            } else {
                chatbotDiv.style.display = "none";
                chatbotIcon.removeAttribute("style");
            }
        })
        document.querySelector("#chatbot-top-bar > img").addEventListener("click", () => {
            chatbotDiv.style.display = "none";
            chatbotIcon.removeAttribute("style");
        })
    },
    methods: {
    }
}
</script>



<style scoped>

main{
    background-color: #f7f1e3;
}

header, footer {
    background-color: #eee1d5;
}


 
footer {
    flex-shrink: 0;
    text-align: center;
    margin-top: auto;
    border-top: 5px solid rgb(212, 195, 195);
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

/****************************** CHATBOT ********************************/


#chatbot-icon {
    position: fixed;
    width: 90px;
    z-index: 110;
    right: -10px;
    bottom: 5%;
    padding: 10px;
    cursor: pointer;
    transition: right .5s, transform .5s;
}

#chatbot-icon:hover {
    right: 0;
    transform: scale(1.2);
}


#chatbot {
    position: fixed;
    z-index: 1;
    right: 2%;
    bottom: 8%;
    width: 450px;
    height: 50%;
    background-color: #ffffff;
    border: 5px solid #4c8189;
    border-radius: 10px;

}

#chatbot-send-bar {
    width: 77%;
    position: absolute;
    bottom: 0;
    height: 8%;
    margin: 10px 0 0 10px;
}

#chatbot img {
    width: 7%;
    position: absolute;
    right: 0px;
    top: 2px;
    cursor: pointer;
}

#chatbot-send-bar > input {
    width: 88%;
    position: absolute;
    height: 60%;
    border: #4c8189 2px solid;
    border-radius: 3px;
}

#chatbot-top-bar {
    background-color: #4c8189;
    height: 10%;
    color: #ffffff;
}

#chatbot-top-bar p {
    padding-left: 10px;
    padding-top: 10px;
    margin: 0;
}

#chatbot-messages {
    position: absolute;
    bottom: 10%;
    width: 100%;
    max-height: 80%;
    overflow-y: auto;
    overflow-anchor: auto;
}

/*Messages coming from the chatbot*/
#chatbot-messages > p {
    background-color: #90b4b9;
    margin-left: 12px;
    margin-right: 60px;
    border-radius: 10px;
    padding: 12px;
}

/* Messages coming from the agent*/
#chatbot-messages > p[user="true"] {
    text-align: right;
    background-color: #e2e2e2;
    margin-left: 60px;
    margin-right: 12px;
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

@media (max-width: 600px) {
    #chatbot {
        width: 300px;
    }
    #chatbot img {
        width: 12%;
    }
    #chatbot-send-bar {
        width: 65%;
    }
    #chatbot-send-bar input {
        width: 80%;
    }

}
</style>