<template>
  <div v-editable="blok" class="py-2">
    <!-- <h1 class="text-lg">{{ blok }}</h1> -->
    <!-- <p>{{blok}}</p> -->
    <img  :src="blok.photo" />
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
