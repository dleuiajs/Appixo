<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AppCard",
    props: {
        title: { type: String, required: true },
        image: { type: String, required: true },
        views: { type: Number, required: true },
        downloads: { type: Number, required: true },
        hearts: { type: Number, required: true },
        type: { type: String, required: true }
    }
})
</script>

<template>
    <v-card class="mx-2 pb-3" width="200" elevation="2"
        :to="`/apps/${type === 'software' ? 'software' : 'games'}/${title.toLowerCase()}`">
        <v-img :aspect-ratio="1" :src="image" :alt="title + ' image'" cover></v-img>
        <v-card-title>{{ title }}</v-card-title>
        <v-card-subtitle>
            <div class="d-flex flex-row ga-3">
                <div class="d-flex flex-row ga-1">
                    <v-icon>mdi-eye</v-icon>{{ views }}
                </div>
                <div class="d-flex flex-row ga-1">
                    <v-icon>mdi-download-circle</v-icon>{{ downloads }}
                </div>
                <div class="d-flex flex-row ga-1">
                    <v-icon>mdi-heart</v-icon>{{ hearts }}
                </div>
            </div>
        </v-card-subtitle>
    </v-card>
</template>