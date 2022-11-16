<template>
    <div>
        <h1>About View</h1>
        <StoryblokComponent v-if="story" :blok="story.content" />

    </div>
</template>
<script setup>
import { useStoryblok } from '@storyblok/vue';

 
const story = await useStoryblok('about', { version: 'draft' }, { customParent: 'http://localhost:3000/'});
console.log(story)

</script>