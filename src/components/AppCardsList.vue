<script lang="ts">
import { defineComponent } from 'vue';
import AppCard from './AppCard.vue';
import appsData from '@/assets/appsData.json';

export default defineComponent({
    name: "AppCardsList",
    components: {
        AppCard,
    },
    props: {
        appType: { type: String, required: true },
        appsLimit: { type: Number, required: false, default: 0 }
    },
    data() {
        return {
            apps: appsData.apps,
        }
    },
    computed: {
        filteredApps() {
            let filtered = this.apps.filter((app) => app.type === this.appType)
            if (this.appsLimit > 0) {
                filtered = filtered.slice(0, this.appsLimit)
            }
            return filtered;
        }
    }
})
</script>

<template>
    <div class="d-flex flex-row flex-wrap ga-3">
        <AppCard v-for="app in filteredApps" :key="app.id" :url="app.url" :title="app.name"
            :description="app.description" :tags="app.tags" :logoImg="app.logo" :screenshotsImgs="app.screenshots"
            :type="appType" :views="0" :downloads="0" :hearts="0" />
    </div>
</template>