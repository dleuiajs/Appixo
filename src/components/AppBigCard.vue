<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "AppBigCard",
    props: {
        title: { type: String, required: true },
        description: { type: String, required: true },
        tags: { type: Array as () => string[], required: true },
        wideLogoImg: { type: String, required: true },
        screenshotsImgs: { type: Array as () => string[], required: true },
        type: { type: String, required: true }
    },
})
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="5">
                <v-img :aspect-ratio="4 / 3" :src="wideLogoImg" :alt="title + ' logo'" max-width="390" rounded
                    cover></v-img>
            </v-col>
            <v-col cols="7" class="d-flex flex-column">
                <span class="text-h6">{{ title }}</span>
                <span class="text-subtitle text-truncate-2">{{ description }}</span>
                <div class="d-flex flex-row ga-2 mt-2">
                    <v-img v-for="img in screenshotsImgs" :key="img" :src="img" :alt="`${title} screenshot`"
                        :aspect-ratio="16 / 9" cover max-width="179"></v-img>
                </div>
                <div class="mt-4 d-flex flex-wrap ga-2">
                    <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
                </div>
                <v-btn class="my-4" max-width="100" append-icon="mdi-arrow-right" variant="outlined"
                    :to="`/apps/${type === 'software' ? 'software' : 'games'}/${title.toLowerCase()}`">Get</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.text-truncate-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>