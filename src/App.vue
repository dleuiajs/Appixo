<script lang="ts">
import { RouterView } from 'vue-router'
import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    RouterView,
    TheNavigation,
    TheFooter
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

    <!-- footer -->
    <TheFooter />
  </v-app>
</template>
