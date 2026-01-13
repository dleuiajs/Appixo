<script lang="ts">
import AppCardsList from '@/components/AppCardsList.vue';

import appTypesData from '@/assets/appTypesData.json'

export default {
    name: 'AppsView',
    components: {
        AppCardsList
    },
    props: {
        appTypePlural: { type: String, required: true },
    },
    data() {
        return {
            appTypesData: appTypesData.types,
            searchInputText: '',
            searchText: '',
            sortBy: 'popular',
            sortOptions: [
                { title: 'Most popular', value: 'popular' },
                { title: 'Newest', value: 'newest' },
                { title: 'Oldest', value: 'oldest' },
                { title: 'Name (A-Z)', value: 'name_asc' },
                { title: 'Name (Z-A)', value: 'name_desc' },
            ]
        }
    },
    methods: {
        applySearch() {
            this.searchText = this.searchInputText.trim().toLowerCase();
        }
    },
    computed: {
        getAppTypeData() {
            return this.appTypesData.find((t) => t.typePlural === this.appTypePlural);
        }
    },
    watch: {
        getAppTypeData: {
            handler(newValue) {
                if (!newValue) {
                    this.$router.replace({ name: 'NotFound' })
                }
            },
            immediate: true
        }
    }
}
</script>

<template>
    <v-app>
        <v-main>
            <div class="d-flex flex-column ga-5 mb-10 px-5 mx-1 my-5" v-if="getAppTypeData">
                <div class="d-flex flex-column ga-3">
                    <div class="d-flex flex-row align-center justify-space-between ga-5">
                        <span class="text-h5">{{ getAppTypeData.namePlural }}:</span>
                        <div class="d-flex align-center ga-2">
                            <v-text-field v-model="searchInputText" label="Search apps" prepend-inner-icon="mdi-magnify"
                                clearable density="compact" width="200" @keyup.enter="applySearch"></v-text-field>
                            <v-select v-model="sortBy" :items="sortOptions" label="Sort by" density="compact"
                                max-width="200" />
                        </div>
                    </div>
                    <AppCardsList :appType="getAppTypeData.type" :sortBy="sortBy" :searchText="searchText" />
                </div>
            </div>
        </v-main>
    </v-app>
</template>
