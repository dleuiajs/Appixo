<script lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    RouterView,
    TheNavigation
  }
}
</script>

<template>
  <v-app>
    <!-- header -->
    <TheNavigation />

    <!-- main -->
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
