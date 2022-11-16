<template>
  <div v-editable="blok" class="py-8 mb-6 text-3xl font-bold text-center">
    <h1>{{blok.headline}}</h1>
    <!-- <p>{{blok.}}</p> -->
    <p v-if="blok">{{blok.Location}}</p>
    <img :src="blok.Image" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
