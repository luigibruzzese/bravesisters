<script setup lang="js">
import {ref} from 'vue';

onMounted(() => {
    // To highlight the current page in the menu
    let menu = document.querySelector("nav");
    if (menu.querySelector("a[href='" + window.location.pathname + "']") !== null)
        menu.querySelector("a[href='" + window.location.pathname + "']").setAttribute("active", "true");
})

onUpdated(() => {
    // To highlight the current page in the menu
    let menu = document.querySelector("nav");
    if (menu.querySelector("[active='true']") !== null)
        menu.querySelector("[active='true']").removeAttribute("active");
    if (menu.querySelector("a[href='" + window.location.pathname + "']") !== null)
        menu.querySelector("a[href='" + window.location.pathname + "']").setAttribute("active", "true");
})

function changeDisplay(evt, element, newValue) {
    evt.stopPropagation();
    if(newValue)
        element.style.display = newValue;
    else {
        element.style.display === 'flex' ?
            element.style.display = 'none'
            : element.style.display = 'flex'
    }
}

function showChatbot() {
    let chatbotIcon = document.querySelector("#chatbot-icon");
    let chatbotDiv = document.querySelector("#chatbot");
    if (chatbotDiv.style.display === "none") {
        chatbotDiv.style.display = "unset";
        chatbotIcon.style.right = "0";
        chatbotIcon.style.transform = "scale(1.2)";
    } else {
        chatbotDiv.style.display = "none";
        chatbotIcon.removeAttribute("style");
    }
}

let history = [
    {
        role: "user",
        parts: [
            {text: "hello"}
        ]
    },
    {
        role: "model",
        parts: [
            {text: "message"}
        ]
    }
];

const messages = ref([
    {
        role: "user",
        parts: [
            {text: "hello"}
        ]
    },
    {
        role: "model",
        parts: [
            {text: "message"}
        ]
    }
])

const inputValue = ref('');
let isQueuing = false;

async function onChatbotSend() {
    const newMessage = inputValue.value
    //   if (!isQueuing) {
    isQueuing = true;
    inputValue.value = '';

    history.push({role: "user", parts: [{text: newMessage}]})
    messages.value.push({role: "user", parts: [{text: newMessage}]})

    const request = {
        history: history,
        message: newMessage
    };

    let response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(request)
    }).then(async response => {
        if (response.status === 200) {
            const answerMess = await response.text()
            history.push({role: "model", parts: [{text: answerMess}]})
            messages.value.push({role: "model", parts: [{text: answerMess}]})
        } else {
            alert('Server error: the chatbot is not available in that moment. Please, try again later.')
            history.pop()
            messages.value.pop()
        }
    })
    isQueuing = false;
    // }

}
</script>

<template>
    <header>

        <div>
            <img alt="menu" class="logo" src="~/assets/logos/logo.png"/>
            <div>
                <h1>Brave Sisters</h1>
                <h2>One for all, all for women</h2>
            </div>
        </div>
        <div>
            <div id="menu">
                <img class="ourIcon" src="~/assets/icons/menu.png"
                     @click="changeDisplay($event, $event.target.parentElement.querySelector('nav'));"/>
                <div style="text-align: right;">
                    <NuxtLink to="/contact-us">
                        <button>
                            Contact us
                        </button>
                    </NuxtLink>
                </div>

                <nav>
                    <NuxtLink to="/">Home</NuxtLink>
                    <NuxtLink to="/people">People</NuxtLink>
                    <div id="activities"
                         @mouseenter="changeDisplay($event, $event.target.children[0], 'flex')"
                         @mouseleave="changeDisplay($event, $event.target.children[0], 'none')"
                         @click="changeDisplay($event, $event.target.children[0]);">
                        Activities
                        <div class="submenu">
                            <NuxtLink to="/projects">Projects</NuxtLink>
                            <NuxtLink to="/services">Services</NuxtLink>
                        </div>
                        <img class="ourIcon" src="~/assets/icons/arrow down.png"
                        @click="changeDisplay($event, $event.target.previousElementSibling)">
                    </div>
                </nav>
            </div>

        </div>


    </header>

    <main>
        <img id="chatbot-icon" @click="showChatbot()" src="~/assets/icons/chatbot.png" alt="ChatBot"/>
        <div id="chatbot" style="display: none;">
            <div id="chatbot-top-bar">
                <p>Hi! I'm here to help you.</p>
                <img src="~/assets/icons/delete.png" @click="showChatbot()" alt="Close"/>
            </div>
            <div id="chatbot-messages">
                <template v-for="element in messages">
                    <p v-bind:user="(element.role === 'user')?'true' : 'false'">{{ element.parts[0].text }}</p>
                </template>

            </div>
            <div id="chatbot-send-bar">
                <input v-model="inputValue" placeholder="Send a message."/>
                <img src="~/assets/icons/send-icon.png" @click="onChatbotSend()" alt="Send"/>
            </div>
        </div>
        <slot/>
    </main>

    <footer>
        <div>
            <div>
                <img class="ourIcon" src="~/assets/icons/address.png" alt="Address"/>
                <div style="display: initial;">
                    <p style="letter-spacing: .1rem;">ADDRESS</p>
                    <p>Via ...</p>
                </div>

            </div>
            <div>
                <img class="ourIcon" src="~/assets/icons/hour.png" alt="Address"/>
                <div style="display: initial;">
                    <p style="letter-spacing: .1rem;">OPENING HOURS</p>
                    <p>Via ...</p>
                </div>
            </div>
            <div>
                <img class="ourIcon" src="~/assets/icons/phone-call.png" alt="Address"/>
                <div style="display: initial;">
                    <p style="letter-spacing: .1rem;">PHONE NUMBER</p>
                    <p>Via ...</p>
                </div>
            </div>

        </div>
    </footer>
    <div id="bottom-bar">Made by me</div>
</template>

<style scoped>
header, footer {
    background-color: #eee1d5;
}

main {
    padding-top: 120px;
    background-color: #f7f1e3;
}

/************************* FOOTER **************************/
footer {
    flex-shrink: 0;
    text-align: center;
    padding: 30px;
    min-height: 1vh;
    background-color: #4c8189;
    color: #ffffff;
    font-family: Figtree, serif;
    font-size: 14px;
    font-weight: lighter;
}

footer div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
}

footer p {
    margin: 0;
}

#bottom-bar {
    background-color: #385c62;
    padding: 10px;
    margin: 0;
    font-weight: lighter;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
}

/**************** HEADER ******************/

header {
    display: flex;
    justify-content: space-between;
    position: fixed;
    padding-left: 2%;
    padding-right: 2%;
    width: 96%;
    height: 130px;
    z-index: 110;
}

header > div {
    display: flex;
    align-items: center;
    text-align: left;
}

header h2 {
    margin-top: 0;
}

header h1 {
    font-size: 30px;
    margin-top: 20px;
}

.logo {
    width: 100px;
    margin-right: 20px;
}

.vl {
    border-left: 3px solid #b7403c;
    height: 75%;
    margin: 15px;
}

.ourIcon {
//border-left: #b7403c solid 2px; width: 35px; width: 25px; margin-left: 10px;
}


/*************** MENU ****************/

nav {
    display: flex;
    justify-content: center;
    gap: 40px;
    font-size: 20px;
    line-height: 40px;
}

a[active="true"] {
    color: #4c8189;
}

#activities {
    position: relative;
    cursor: pointer;
    user-select: none;
}

.submenu {
    position: absolute;
    flex-direction: column;
    background-color: #f0e6dd;
    width: 90px;
    top: 40px;
    display: none;
    font-size: 18px;
    padding: 0 20px 0 20px;
}

a {
    text-decoration: none;
}

a:hover {
    color: #4c8189;
}

#menu > img {
    display: none;
}

#menu {
    line-height: 50px;
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


    header {
        flex-direction: column;
        height: auto;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    main {
        padding-top: 190px;
    }

    nav {
        display: none;
        flex-direction: column;
        gap: 0;
        background-color: #eee1d5;
        position: absolute;
        top: 50px;
        width: 90%;
        padding: 20px;
        text-align: left;
    }


    header div {
        justify-content: center;
        flex-direction: row;
    }

    #menu > img {
        display: initial;
        width: 40px;
        height: 10%;
    }

    #menu {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
    }


    footer > div {
        flex-direction: column;
        gap: 30px;
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