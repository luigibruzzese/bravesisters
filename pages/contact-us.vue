<script setup lang="ts">
import { ref, onMounted } from 'vue';

const faq = [
  { question: "Where is the Brave Sisters center located?", answer: "The center is located at Via di Grignano, 102, 59100 Prato (PO). You can reach us by bus (lines 210 and SC) or by train (Prato Centrale station)." },
  { question: "What are the opening hours of the center?", answer: "The center is open Monday to Friday from 9:00 am to 12:00 pm and from 1:00 pm to 6:00 pm. On Saturday, it is open from 9:00 am to 12:00 pm. It is closed on Sunday." },
  { question: "What services does the Brave Sisters center offer?", answer: "We offer psychological support, legal consultations, conversations with experts, assistance for imminent danger situations, and a list of available jobs for women." },
  { question: "Can I get free legal assistance at the center?", answer: "Yes, regardless of income, victims of domestic violence are entitled to legal aid at the state's expense. Contact us for more information and assistance." },
  { question: "Who works at the Brave Sisters center?", answer: "Our staff includes psychologists, lawyers, psychiatrists, economy experts, and EMDR experts. You can find more details about our team on our website." },
  { question: "Does the center provide support for stalking cases?", answer: "Yes, we offer support for victims of stalking. Contact us to learn more about our services." },
  { question: "Can I participate in the center's projects if I have experienced violence in the past?", answer: "Yes, we have various projects to help women who have experienced violence to improve their lives. Contact us to learn more about these projects." },
  { question: "How can I report an incident of domestic violence?", answer: "If you have experienced domestic violence, it's important to go to the nearest emergency room for necessary medical care. Then, contact a lawyer to draft and file the complaint. Our lawyers can assist you with this process." },
  { question: "Does the center offer psychological support for victims of violence?", answer: "Yes, our center provides psychological support for victims of domestic violence. Contact us to schedule an appointment or for more information." },
  { question: "Can I attend group therapy sessions at the center?", answer: "Yes, we offer group therapy sessions to share experiences and receive support from other women victims of violence. Contact us to learn more about these sessions." }
];

const showAnswer = ref(Array(faq.length).fill(false));
const messageSent = ref(false);

const toggleAnswer = (index: number) => {
  showAnswer.value[index] = !showAnswer.value[index];
};

const handleTextareaInput = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement;
  if (textarea.value.length > 150) {
    textarea.value = textarea.value.substring(0, 500);
  }
};

const handlePhoneInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  input.value = input.value.replace(/\D/g, '').slice(0, 12);
};

const handleSubmit = (event: Event) => {
  event.preventDefault();
  messageSent.value = true;

  const form = event.target as HTMLFormElement;
  form.reset();

  setTimeout(() => {
    messageSent.value = false;
  }, 7000);
};

onMounted(() => {
  const textarea = document.getElementById('message') as HTMLTextAreaElement;
  if (textarea) {
    textarea.addEventListener('input', handleTextareaInput);
  }

  const phoneInput = document.getElementById('phone') as HTMLInputElement;
  if (phoneInput) {
    phoneInput.addEventListener('input', handlePhoneInput);
  }
});
</script>

<template>
  <div>
    <main>
      <section id="contact">
        <h1 id="info_contacts">Contact us</h1>
        <div class="contact-form">
          <h3 class="title-with-lines">Contact form</h3>
          <form @submit="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label for="name">Name*</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div class="form-group">
                <label for="surname">Surname*</label>
                <input type="text" id="surname" name="surname" required />
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label for="email">Email*</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div class="form-group">
                <label for="phone">Phone number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div class="form-group full-width">
              <label for="message">Text*</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
          <div v-if="messageSent" class="confirmation-message">
            Message sent correctly, you will be contacted as soon as possible.
          </div>
        </div>
        <div class="faq-section">
          <p>Or find answers to the most frequently asked questions about Brave Sister here:</p>
          <h3 class="title-with-lines">FAQ</h3>
          <ul>
            <li v-for="(item, index) in faq" :key="index">
              <div @click="toggleAnswer(index)" :class="{'faq-question': true, 'open': showAnswer[index]}">
                {{ item.question }}
                <span>{{ showAnswer[index] ? '▲' : '▼' }}</span>
              </div>
              <div v-if="showAnswer[index]" class="faq-answer">
                {{ item.answer }}
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
main {
  padding: 20px;
}

#info_contacts {
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

#contact {
  padding: 20px;
  background-color: white;
  border-radius: 8px;
}

.contact-form {
  margin-bottom: 40px;
  text-align: center;
  font-size: 18px;
}

.contact-form h3 {
  color: #4c8189;
  margin-bottom: 20px;
}

.form-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.form-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  max-width: 45%;
}

.form-group.full-width {
  max-width: 100%;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 18px;
}

form button {
  display: block;
  width: 8%;
  padding: 8px;
  margin: 20px auto 0;
  background-color: #4c8189;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
}

form button:hover {
  background-color: #3a6775;
}

#message {
  width: 100%;
  min-height: 100px;
  margin: 0 auto;
  overflow-y: auto;
  resize: none;
}

.confirmation-message {
  margin-top: 40px;
  margin-bottom: 40px;
  color: green;
  font-size: 1.8em;
}

.faq-section {
  margin-top: 40px;
  text-align: center;
  font-size: 18px;
}

.faq-section h3 {
  color: #4c8189;
  margin-bottom: 20px;
}

.faq-section p {
  margin-bottom: 20px;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  background-color: white;
  width: 80%;
  margin: 0 auto;
  font-size: 1.2em;
  text-align: left;
}

.faq-answer {
  padding: 10px;
  background-color: white;
  width: 80%;
  margin: 0 auto;
  text-align: left;
  border-bottom: 1px solid #ccc;
  font-size: 1em;
}

.faq-question.open {
  border-bottom: none;
}

ul {
  padding-left: 0;
  list-style-type: none;
}

/* Media Query for Mobile Screens */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }

  .form-group {
    max-width: 100%;
    margin-bottom: 20px;
  }

  form button {
    width: 50%;
  }


  .title-with-lines::before,
  .title-with-lines::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 25%;
    height: 1.1px;
    background-color: #4c8189;
  }
}
</style>
