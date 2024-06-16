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

    // To close the menu if open on the mobile
    changeDisplay(null, menu, "none")
})

function changeDisplay(evt, element, newValue) {
    if(evt)
        evt.stopPropagation();
    if (newValue) {
        newValue === 'none' ?
            element.removeAttribute("style")
            : element.style.display = newValue
    }
    else {
        element.style.display === 'flex' ?
            element.removeAttribute("style")
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
        chatbotDiv.querySelector("input").select();
    } else {
        chatbotDiv.style.display = "none";
        chatbotIcon.removeAttribute("style");
    }
}

let history = [
    /*    {
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
        }*/
];

const messages = ref([])

const inputValue = ref('');
let isQueuing = false;

async function onChatbotSend() {
    const newMessage = inputValue.value
    if (inputValue.value && !isQueuing) {
        isQueuing = true;
        inputValue.value = '';

        history.push({role: "user", parts: [{text: newMessage}]})
        messages.value.push({role: "user", parts: [{text: newMessage}]})

        const request = {
            history: history,
            message: newMessage
        };

        await fetch("/api/chatbot", {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(request)
        }).then(async response => {
            if (response.status === 200) {
                const answerMess = await response.text()
                history.push({role: "model", parts: [{text: answerMess}]})
                messages.value.push({role: "model", parts: [{text: convert(answerMess)}]})
            } else {
                messages.value.push({role: "model", parts: [{text: "I'm sorry but I'm not able to give you an answer in that moment, due to temporaly unavailability of the server. Please, try again."}]})
                history.pop()
               // console.log(document.getElementById("chatbot-messages").lastElementChild)
            }
        })
        isQueuing = false;
    }

}

function convert(message) {
    return message.replaceAll("\n", "<br>").replaceAll(/(\*\*.*?\*\*)/g, function(match) {
        return "<strong>" + match.slice(2, -2) + "</strong>"
    }).replaceAll("*", "&bull;")
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
                <img alt="Menu" class="ourIcon" src="~/assets/icons/menu.png"
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
                        <img alt="Arrow down" class="ourIcon" src="~/assets/icons/arrow down.png"
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
                    <p v-bind:user="(element.role === 'user')?'true' : 'false'" v-html="element.parts[0].text"></p>
                </template>

            </div>
            <div id="chatbot-send-bar">
                <input v-model="inputValue" v-on:keyup.enter="onChatbotSend()" placeholder="Send a message to the bot."/>
                <img src="~/assets/icons/send-icon.png" @click="onChatbotSend()" alt="Send"/>
            </div>
        </div>
        <slot/>
    </main>

    <footer>
        <div>
            <div style="border-radius: 15px 15px 15px 5px; background-color:  rgba(255,255,255,0.6);">
                <img class="ourIcon" src="~/assets/icons/address.png" alt="Address"/>
                <div style="display: initial;">
                    <p style="letter-spacing: .1rem;">ADDRESS</p>
                    <p>Via ...</p>
                </div>

            </div>
            <div style="border-radius: 15px; background-color:  rgba(255,255,255,0.6);">
                <img class="ourIcon" src="~/assets/icons/hour.png" alt="Address"/>
                <div style="display: initial;">
                    <p style="letter-spacing: .1rem;">OPENING HOURS</p>
                    <p>Via ...</p>
                </div>
            </div>
            <div style="border-radius: 15px 15px 5px 15px; background-color:  rgba(255,255,255,0.6);">
                <img class="ourIcon" src="~/assets/icons/phone-call.png" alt="Address"/>
                <div style="display: initial;">
                    <p style="letter-spacing: .1rem;">PHONE NUMBER</p>
                    <p>Via ...</p>
                </div>
            </div>

        </div>
        <div id="bottom-bar">Made by me</div>
    </footer>
</template>

<style scoped>


main {
    padding-top: 160px;
    /*
    background-color: #f7f1e3;
    */
    background-color: white;
}

/************************* FOOTER **************************/
footer {
    flex-shrink: 0;
    text-align: center;
    padding: 0;
    background-color: #4c8189;

    color: #5c5c5c;

    font-family: Figtree, serif;
    font-size: 14px;

    background-image: url("/footer.jpg");
    background-repeat: no-repeat;
    background-position: top;
    background-size: 100% 100% ;
}

footer div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
}

footer > div {
    background-color: unset;
    padding: 30px;
}



footer p {
    margin: 0;
}

#bottom-bar {
    background-color:  rgba(255,255,255,0.7);
    padding: 10px;
    margin: 0;
    color: #5c5c5c;
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
    height: 160px;
    z-index: 110;
    background-image: url("/header.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
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

/*.vl {
    border-left: 3px solid #b7403c;
    height: 75%;
    margin: 15px;
}*/

.ourIcon {
    cursor: pointer;
//border-left: #b7403c solid 2px; width: 35px; width: 25px; margin-left: 10px;
}


/*************** MENU ****************/

nav {
    display: flex;
    justify-content: center;
    gap: 40px;
    font-size: 20px;
    line-height: 40px;
    border-radius: 15px 5px 5px 15px;
    padding: 0 20px 0 20px;
    background-color:  rgba(255,255,255,0.8);
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
    background-color:  rgba(255,255,255,0.8);
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
    z-index: 111;
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
    z-index: 110;
    right: 2%;
    bottom: 8%;
    width: 60%;
    height: 70%;
    background-color: #ffffff;
    border: 5px solid #4c8189;
    border-radius: 10px;

}

#chatbot-send-bar {
    width: calc(100% - 120px);
    position: absolute;
    bottom: 0;
    height: 5%;
    margin: 10px;
    border: #4c8189 2px solid;
    border-radius: 3px;
    align-content: center;
    padding: 5px;
}

#chatbot img {
    height: 60%;
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 50%;
    margin-right: 5px;
    transform: translate(-0%, -50%);
}

#chatbot-send-bar > input {
    border: none;
    width: 96%;
}

#chatbot-send-bar > input:focus {
    outline: none;
}

#chatbot-top-bar {
    background-color: #4c8189;
    height: 8%;
    color: #ffffff;
    position: absolute;
    width: 100%;
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
    max-height: 82%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

/*Messages coming from the chatbot*/
#chatbot-messages > p {
    background-color: #90b4b9;
    margin: 2% 10% 2% 2%;
    max-width: 90%;
    width: fit-content;
    border-radius: 10px;
    padding: 12px;
    word-wrap: break-word;
}

/* Messages coming from the agent*/
#chatbot-messages > p[user="true"] {
    align-self: end;
    text-align: right;
    margin: 2% 2% 2% 10%;
    background-color: #e2e2e2;
}

@media (max-width: 800px) {
    .logo {

    }


    header {
        flex-direction: column;
        height: auto;
        padding-top: 20px;
        padding-bottom: 20px;
/*        background-image: url("/header-mobile.jpg");
        background-size: 100% ;
        background-repeat: no-repeat;
        background-position: center;*/
    }

    main {
        padding-top: 190px;
    }

    nav {
        display: none;
        flex-direction: column;
        gap: 0;
        background-color: rgb(255,255,255,0.93);
        border-bottom: 2px blueviolet solid;

        border-left: 2px blueviolet solid;
        border-right: 2px blueviolet solid;
        border-radius: 0 0 10px 10px;
        position: absolute;
        top: 50px;
        width: 90%;
        padding: 20px;
        text-align: left;
    }

    .submenu {
        background-color: rgb(255,255,255,0.93);

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

    #chatbot {
        width: 90%;
    }

    #chatbot-send-bar input {
        width: 90%;
    }

}

@media (max-width: 600px) {

}
</style>