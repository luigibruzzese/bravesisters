<script setup lang="ts">
import { ref } from 'vue';

const faq = [
  { question: "Question 1", answer: "Answer to question 1." },
  { question: "Question 2", answer: "Answer to question 2." },
  { question: "Question 3", answer: "Answer to question 3." },
  { question: "Question 4", answer: "Answer to question 4." },
  { question: "Question 5", answer: "Answer to question 5." },
  { question: "Question 6", answer: "Answer to question 6." },
  { question: "Question 7", answer: "Answer to question 7." },
  { question: "Question 8", answer: "Answer to question 8." }
];

const showAnswer = ref(Array(faq.length).fill(false));

const toggleAnswer = (index: number) => {
  showAnswer.value[index] = !showAnswer.value[index];
};
</script>

<template>
  <div>
    <main>
      <section id="contact">
        <h1 id="info_contacts">Contact us</h1>
        <div class="contact-form">
          <h3>Contact form</h3>
          <form>
            <div class="form-group">
              <label for="name">Name*</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div class="form-group">
              <label for="surname">Surname*</label>
              <input type="text" id="surname" name="surname" required />
            </div>
            <div class="form-group">
              <label for="email">Email*</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
              <label for="phone">Phone number</label>
              <input type="tel" id="phone" name="phone" />
            </div>
            <div class="form-group">
              <label for="message">Text*</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>
        <div class="faq-section">
            <p>Or find answers to the most frequently asked questions about Brave Sister here:</p>
            <h3>FAQ</h3>
          
          <ul>
            <li v-for="(item, index) in faq" :key="index">
              <div @click="toggleAnswer(index)" class="faq-question">
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

#contact {
  padding: 20px;
  background-color: #f7f1e3;
  border-radius: 8px;
  
}

.contact-form {
  margin-bottom: 40px;
}

.contact-form h3 {
  text-align: center;
  color: #4c8189;
}

.form-group {
  margin-bottom: 20px;
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
}

form button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #4c8189;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

form button:hover {
  background-color: #3a6775;
}

.faq-section {
  margin-top: 40px;
}

.faq-section h3 {
  text-align: center;
  color: #4c8189;
}

.faq-section p {
  text-align: center;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.faq-answer {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}


</style>
