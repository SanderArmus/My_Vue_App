<template>
    <nav class="bg-white shadow-md px-6 py-4 flex items-center justify-between relative">
      <!-- Logo -->
      <div class="flex items-center space-x-2">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png" alt="Logo" class="rounded-full w-10 h-10 object-cover" />
        <span class="text-xl font-semibold text-gray-800">MyApp</span>
      </div>
  
      <!-- Desktop Nav -->
      <div class="hidden md:flex space-x-6">
        <router-link to="/" class="text-gray-700 hover:text-blue-600 font-medium transition">Home</router-link>
        <router-link to="/about" class="text-gray-700 hover:text-blue-600 font-medium transition">About</router-link>
        <router-link to="/contact" class="text-gray-700 hover:text-blue-600 font-medium transition">Contact</router-link>
      </div>
  
      <!-- Mobile Menu Button -->
      <div class="md:hidden">
        <button 
          @click="isMenuOpen = !isMenuOpen" 
          class="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          :class="{ 'text-blue-600': isMenuOpen }"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-6 w-6 transition-transform duration-200"
            :class="{ 'rotate-90': isMenuOpen }"
            fill="none"
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            stroke-width="2"
          >
            <path 
              v-if="!isMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Overlay -->
      <div 
        v-if="isMenuOpen" 
        class="fixed inset-0 bg-black/20 backdrop-blur-sm z-10 md:hidden"
        @click="isMenuOpen = false"
      ></div>

      <!-- Mobile Menu Items -->
      <div 
        v-if="isMenuOpen" 
        class="absolute top-full left-0 w-full bg-gradient-to-br from-indigo-50 to-blue-50 shadow-lg md:hidden z-20 transform transition-all duration-300 ease-in-out"
        :class="{ 'translate-y-0': isMenuOpen, '-translate-y-full': !isMenuOpen }"
      >
        <div class="px-6 py-4 space-y-4">
          <router-link 
            to="/" 
            class="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b border-gray-200/50"
            @click="isMenuOpen = false"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2 border-b border-gray-200/50"
            @click="isMenuOpen = false"
          >
            About
          </router-link>
          <router-link 
            to="/contact" 
            class="block text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 py-2"
            @click="isMenuOpen = false"
          >
            Contact
          </router-link>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)
</script>