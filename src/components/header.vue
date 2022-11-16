<template>
  <div>
    <h1>Header</h1>
    <header class="w-full h-24 bg-[#f7f6fd]">
        <router-link to="/">
            <h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok vue</h1>
          </router-link>
          <!-- <p>{{menu.content.body}}</p> -->
          <nav>
            <ul class="flex space-x-8 text-lg font-bold" v-if="menu.content">
                <!-- <li>{{menu.content.body[0].columns[0].About.cached_url}}</li> -->
                <router-link :to="menu.content.body[0].columns[0].Home.cached_url" class="hover:text-[#50b0ae]">
                    {{ menu.content.body[0].columns[0].Home.cached_url }}
                  </router-link>
                  <router-link :to="menu.content.body[0].columns[0].About.cached_url" class="hover:text-[#50b0ae]">
                    {{ menu.content.body[0].columns[0].About.cached_url }}
                  </router-link>
              <!-- <li v-for="blok of menu.content.body[0].columns[0]" :key="blok">
                <router-link :to="blok.cached_url" class="hover:text-[#50b0ae]">
                  {{ blok.cached_url }}
                </router-link>
              </li> -->
            </ul>
          </nav>

    </header>
  </div>
</template>
<script>
import { useStoryblok } from "@storyblok/vue";
export default {
  data() {
    return {
      menu: []
    };
  },
  async mounted() {
    const story = await useStoryblok(
      "navigation",
      { version: "draft" },
      { customParent: "http://localhost:3000/" }
    );
    console.log(story);
    this.menu = story;
  }
};
</script>