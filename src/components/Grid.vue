<template>
  <div v-editable="blok" class="flex py-8 mb-6">
      
      <!-- <h3>{{blok}}</h3> -->
    <div v-for="blok in blok.columns" :key="blok._uid" class="flex-auto px-6">
      <!-- <p>{{blok}}</p> -->
      <StoryblokComponent :blok="blok" />
      <!-- <p>Nagarjuna</p> -->
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });
</script>
