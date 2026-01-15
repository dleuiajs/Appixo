<script lang="ts">
import { RouterView } from 'vue-router'
import { useTheme } from 'vuetify';

import TheNavigation from './components/TheNavigation.vue';
import TheFooter from './components/TheFooter.vue';

import { useSettingsStore } from './stores/settings';
import { useStatsStore } from './stores/stats'

export default {
  name: 'App',
  components: {
    RouterView,
    TheNavigation,
    TheFooter
  },
  data() {
    return {
      settingsStore: useSettingsStore(),
      statsStore: useStatsStore(),
      theme: useTheme(),
    }
  },
  watch: {
    'settingsStore.theme'(newTheme) {
      this.theme.change(newTheme);
    }
  },
  created() {
    this.settingsStore.initTheme();
    this.statsStore.load();
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
