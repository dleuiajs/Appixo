<script lang="ts">
import { defineComponent } from 'vue';

import { useSettingsStore } from '@/stores/settings';

import appTypesData from '@/assets/appTypesData.json'

export default defineComponent(
    {
        name: "TheNavigation",
        data() {
            return {
                settingsStore: useSettingsStore(),
                appTypesData: appTypesData.types,
            }
        }
    }
)
</script>

<template>
    <v-toolbar :elevation="8" title="Appixo">

        <v-toolbar-items>
            <v-btn to="/" text="Home"></v-btn>
            <v-btn v-for="t in appTypesData" :to="`/apps/${t.typePlural}`" :text="t.namePlural"></v-btn>
            <v-divider inset vertical></v-divider>
            <v-btn :icon="settingsStore.getTheme === 'light' ? 'mdi-weather-night' : 'mdi-weather-sunny'"
                @click="settingsStore.toggleTheme()"></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>