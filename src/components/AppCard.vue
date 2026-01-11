<script lang="ts">
import { defineComponent } from 'vue';

import { getImgUrl } from '@/utils/getImgUrl';

export default defineComponent({
    name: "AppCard",
    props: {
        url: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        tags: { type: Array as () => string[], required: true },
        logoImg: { type: String, required: true },
        screenshotsImgs: { type: Array as () => string[], required: true },
        views: { type: Number, required: true },
        downloads: { type: Number, required: true },
        hearts: { type: Number, required: true },
        type: { type: String, required: true }
    },
    methods: {
        getImgUrl
    },
})
</script>

<template>
    <v-tooltip max-width="400" open-on-hover :open-delay="350">
        <template v-slot:activator="{ props: activatorProps }">
            <v-card class="pb-3" width="200" elevation="2"
                :to="`/apps/${type === 'software' ? 'software' : 'games'}/${url}`" v-bind="activatorProps">
                <v-img :aspect-ratio="1" :src="getImgUrl(logoImg)" :alt="title + ' logo'" cover></v-img>
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
        <div class="d-flex flex-column my-1">
            <span class="text-h6">{{ title }}</span>
            <div class="mt-1 mb-2">
                <v-carousel hide-delimiters :show-arrows="false" cycle height="205" interval="2000" crossfade>
                    <v-carousel-item v-for="scrImg in screenshotsImgs" :key="scrImg">
                        <v-img :aspect-ratio="16 / 9" :src="getImgUrl(scrImg)" :alt="title + ' screenshot'"
                            cover></v-img>
                    </v-carousel-item>
                </v-carousel>
            </div>
            <span class="text-body1">{{ description }}</span>
            <v-chip-group>
                <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
            </v-chip-group>
        </div>
    </v-tooltip>
</template>