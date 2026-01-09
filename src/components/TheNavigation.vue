<script lang="ts">
import { defineComponent } from 'vue';

import { useSettingsStore } from '@/stores/settings';

export default defineComponent(
    {
        name: "TheNavigation",
        data() {
            return {
                settingsStore: useSettingsStore(),
            }
        }
    }
)
</script>

<template>
    <v-toolbar :elevation="8" title="Appixo">

        <v-toolbar-items>
            <v-btn to="/" text="Home"></v-btn>
            <v-btn to="/apps/games" text="Games"></v-btn>
            <v-btn to="/apps/software" text="Software"></v-btn>
            <v-divider inset vertical></v-divider>
            <v-btn :icon="settingsStore.getTheme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
                @click="settingsStore.toggleTheme()"></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>