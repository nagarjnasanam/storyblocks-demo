<script setup>
// import Home from './pages/Home.vue';
import Header from './components/header.vue'
</script>

<template>
  <Header />
  <Suspense>
    <RouterView ></RouterView>
  </Suspense>
</template>
