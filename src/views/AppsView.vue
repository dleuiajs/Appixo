<script lang="ts">
import AppCardsList from '@/components/AppCardsList.vue';

import appTypesData from '@/assets/appTypesData.json'

export default {
    name: 'AppsView',
    components: {
        AppCardsList
    },
    props: {
        appTypePlural: { type: String, required: true }
    },
    data() {
        return {
            appTypesData: appTypesData.types,
        }
    },
    computed: {
        getAppTypeData() {
            return this.appTypesData.find((t) => t.typePlural === this.appTypePlural) ||
                { type: '', typePlural: '', name: '', namePlural: '' }
        }
    }
}
</script>

<template>
    <v-app>
        <v-main>
            <div class="d-flex flex-column ga-5 mb-10 px-5 mx-1 my-5">
                <div class="d-flex flex-column ga-3">
                    <div class="d-flex flex-row align-center ga-5">
                        <span class="text-h5">{{ getAppTypeData.namePlural }}:</span>
                    </div>
                    <AppCardsList :appType="getAppTypeData.type" :appsLimit="14" />
                </div>
            </div>
        </v-main>
    </v-app>
</template>
