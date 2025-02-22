<script setup lang="ts">
import { navigateTo } from '../router';

const goToHome = () => {
    navigateTo('/home');
};

const goToAbout = () => {
    navigateTo('/about');
};

const goToContact = () => {
    navigateTo('/contact');
};

const goToServices = () => {

};
</script>

<template>
    <div>
        <button @click="goToHome" class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Go to
            Home</button>
        <button @click="goToAbout" class="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700">Go to
            About</button>
        <button @click="goToContact" class="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-700">Go to
            Contact</button>
        <button @click="goToServices"
            class="bg-yellow-500 text-white font-bold py-2 px-4 rounded hover:bg-yellow-700">Go to Services</button>
    </div>
</template>

<style scoped></style>
