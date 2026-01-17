<script lang="ts">
import { getImgUrl } from '@/utils/getImgUrl';
import appsData from '@/assets/appsData.json';
import { useStatsStore } from '@/stores/stats'

export default {
    name: 'AppDetail',
    props: {
        appUrl: { type: String, required: true }
    },
    data() {
        return {
            statsStore: useStatsStore(),
            apps: appsData.apps,
        }
    },
    methods: {
        getImgUrl,
        formatDate(date: string | null) {
            if (!date) return 'Coming Soon';

            const d = new Date(date);
            const day = String(d.getDate()).padStart(2, '0');
            const month = String(d.getMonth() + 1).padStart(2, '0');
            const year = d.getFullYear();
            return `${day}.${month}.${year}`;
        },
        downloadApp() {
            this.statsStore.addDownload(this.appUrl);
        }
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
    },
    created() {
        this.statsStore.addView(this.appUrl);
    }
}
</script>

<template>
    <v-card class="py-5 px-5 mx-16 my-5" v-if="app">
        <v-container>
            <v-row>
                <v-col cols="6">
                    <v-img :src="getImgUrl(app.wideLogo)" :aspect-ratio="16 / 10" :alt="app.name + ' logo'"
                        max-width="500" cover></v-img>
                </v-col>
                <v-col cols="6" class="d-flex flex-column justify-space-between">
                    <div class="d-flex flex-column">
                        <span class="text-h6">{{ app.name }}</span>
                        <span class="text-body-1">{{ app.description }}</span>
                        <span class="text-body-1 mt-2">Tags: {{ app.tags.join(', ') }}</span>
                        <span class="text-body-1 mt-2">Release Date: {{ formatDate(app.releaseDate) }}</span>
                        <span class="text-body-1">Developer: {{ app.developer }}</span>
                    </div>
                    <div class="d-flex flex-wrap ga-2">

                    </div>
                    <div class="d-flex flex-row ga-2 flex-wrap mt-3">
                        <v-btn variant="tonal" color="primary" :href="app.downloadLink" @click="downloadApp"
                            download>Download</v-btn>
                        <v-btn v-if="app.githubLink" variant="tonal" color="primary" :href="app.githubLink"
                            target="_blank">GitHub</v-btn>
                        <v-divider vertical class="mx-2"></v-divider>
                        <v-btn icon height="36" width="36" @click="statsStore.toggleLike(app.url)">
                            <v-icon size="24" :color="statsStore.getLikeState(app.url) ? 'red-lighten-1' : ''">{{
                                statsStore.getLikeState(app.url) ? 'mdi-heart' :
                                    'mdi-heart-outline' }}</v-icon>
                        </v-btn>
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
</template>