<template>
  <div class="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-blue-900 py-16 px-6 flex items-center justify-center">
    <div class="backdrop-blur-xl bg-white/10 border border-white/30 rounded-3xl shadow-2xl p-10 w-full max-w-2xl text-white">
      <h2 class="text-4xl font-extrabold text-center mb-8 tracking-wide drop-shadow">Contact Us</h2>
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label class="block mb-1 font-semibold" for="name">Name</label>
          <input
            v-model="form.name"
            id="name"
            type="text"
            required
            class="w-full px-5 py-3 bg-white/20 text-white placeholder-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            placeholder="Your full name"
          />
        </div>
        <div>
          <label class="block mb-1 font-semibold" for="email">Email</label>
          <input
            v-model="form.email"
            id="email"
            type="email"
            required
            class="w-full px-5 py-3 bg-white/20 text-white placeholder-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label class="block mb-1 font-semibold" for="message">Message</label>
          <textarea
            v-model="form.message"
            id="message"
            rows="5"
            required
            class="w-full px-5 py-3 bg-white/20 text-white placeholder-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          class="w-full py-3 mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
        >
          🚀 Send Message
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitForm = () => {
  console.log('Form submitted:', form)
  form.name = ''
  form.email = ''
  form.message = ''
  alert('✨ Your message has been sent. We\'ll get back to you soon!')
}
</script>
