<script lang="ts">
import { defineComponent } from 'vue';

import { getImgUrl } from '@/utils/getImgUrl';

import appsData from '@/assets/appsData.json';

export default defineComponent({
    name: 'AppDetail',
    props: {
        appUrl: { type: String, required: true }
    },
    data() {
        return {
            apps: appsData.apps,
        }
    },
    methods: {
        getImgUrl
    },
    computed: {
        app() {
            return this.apps.find((a) => a.url === this.appUrl);
        },
        trailerUrl() {
            if (this.app && this.app.trailerLink) {
                return this.app.trailerLink.replace('watch?v=', 'embed/');
            }
        }
    },
    watch: {
        app: {
            handler(newValue) {
                if (!newValue) {
                    this.$router.replace({ name: 'NotFound' })
                }
            },
            immediate: true
        }
    }
})
</script>

<template>
    <v-app>
        <v-main>
            <v-card class="d-flex flex-row flex-wrap justify-center py-5 px-5 mx-16 ga-3 my-5" v-if="app">
                <v-container>
                    <v-row>
                        <v-col cols="6">
                            <v-img :src="getImgUrl(app.wideLogo)" :aspect-ratio="16 / 10" :alt="app.name + ' logo'"
                                max-width="500" cover></v-img>
                        </v-col>
                        <v-col cols="6" class="d-flex flex-column flex-wrap justify-space-between">
                            <div class="d-flex flex-column">
                                <span class="text-h6">{{ app.name }}</span>
                                <span class="text-body-1">{{ app.description }}</span>
                                <span class="text-body-1 mt-2">Tags: {{ app.tags.join(', ') }}</span>
                                <span class="text-body-1 mt-2">Release Date:
                                    <span v-if="app.releaseDate">{{ app.releaseDate }}</span>
                                    <span v-else>Coming Soon</span>
                                </span>
                                <span class="text-body-1">Developer: {{ app.developer }}</span>
                            </div>
                            <div class="d-flex flex-wrap ga-2">

                            </div>
                            <div class="d-flex flex-row ga-2">
                                <v-btn variant="tonal" color="primary" :href="app.downloadLink"
                                    download>Download</v-btn>
                                <v-btn v-if="app.githubLink" variant="tonal" color="primary" :href="app.githubLink"
                                    target="_blank">GitHub</v-btn>
                            </div>
                        </v-col>
                    </v-row>
                    <v-row v-if="app.trailerLink">
                        <v-col cols="12">
                            <span class="text-h6">Trailer:</span>
                            <v-divider class="mb-3"></v-divider>
                            <v-responsive :aspect-ratio="16 / 9">
                                <iframe :src="trailerUrl" :title="`${app.name} Trailer`" frameborder="0" allowfullscreen
                                    class="w-100 h-100"></iframe>
                            </v-responsive>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <span class="text-h6">Screenshots:</span>
                            <v-divider class="mb-3"></v-divider>
                            <div class="d-flex flex-column ga-5 justify-center">
                                <v-img v-for="(scr, index) in app.screenshots" :key="index" :src="getImgUrl(scr)"
                                    :alt="`${app.name} screenshot ${index}`" :aspect-ratio="16 / 9" cover></v-img>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-main>
    </v-app>
</template>
