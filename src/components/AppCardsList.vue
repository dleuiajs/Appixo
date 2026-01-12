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
        appsLimit: { type: Number, required: false, default: 0 },
        sortBy: { type: String, required: true }
    },
    data() {
        return {
            apps: appsData.apps,
        }
    },
    computed: {
        filteredApps() {
            let filteredApps = this.apps.filter((app) => app.type === this.appType)
            if (this.appsLimit > 0) {
                filteredApps = filteredApps.slice(0, this.appsLimit)
            }

            switch (this.sortBy) {
                case 'newest':
                    filteredApps.sort((a, b) => {
                        const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
                        const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
                        return dateB - dateA;
                    })
                    break;
                case 'oldest':
                    filteredApps.sort((a, b) => {
                        const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
                        const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
                        return dateA - dateB;
                    })
                    break;
                case 'name_asc':
                    filteredApps.sort((a, b) => a.name.localeCompare(b.name))
                    break;
                case 'name_desc':
                    filteredApps.sort((a, b) => b.name.localeCompare(a.name))
                    break;
            }
            return filteredApps;
        }
    }
})
</script>

<template>
    <div class="d-flex flex-row flex-wrap ga-3">
        <AppCard v-for="app in filteredApps" :key="app.url" :url="app.url" :title="app.name"
            :description="app.description" :tags="app.tags" :logoImg="app.logo" :screenshotsImgs="app.screenshots"
            :type="appType" :views="0" :downloads="0" :hearts="0" />
    </div>
</template>