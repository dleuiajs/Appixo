<script lang="ts">
import { defineComponent } from 'vue';
import AppBigCard from './AppBigCard.vue';
import appsData from '@/assets/appsData.json';

export default defineComponent({
    name: "AppCardsList",
    components: {
        AppBigCard,
    },
    props: {
        appsLimit: { type: Number, required: true }
    },
    data() {
        return {
            apps: appsData.apps,
        }
    },
    computed: {
        randomApps() {
            const appsCopy = [...this.apps];
            appsCopy.sort(() => 0.5 - Math.random());
            return appsCopy.slice(0, this.appsLimit);
        }
    }
})
</script>

<template>
    <v-card class="py-4" elevation="2">
        <v-carousel height="380" cycle hide-delimiter-background delimiter-icon="mdi-square-rounded" color="grey">
            <v-carousel-item v-for="(app, index) in randomApps" :value="index" :key="app.id">
                <AppBigCard :url="app.url" :title="app.name" :description="app.description" :tags="app.tags"
                    :wideLogoImg="app.wideLogo" :screenshotsImgs="app.screenshots" :type="app.type" />
            </v-carousel-item>
        </v-carousel>
    </v-card>
</template>