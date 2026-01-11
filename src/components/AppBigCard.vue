<script lang="ts">
import { defineComponent } from 'vue';

import { getImgUrl } from '@/utils/getImgUrl';

export default defineComponent({
    name: "AppBigCard",
    props: {
        url: { type: String, required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        tags: { type: Array as () => string[], required: true },
        wideLogoImg: { type: String, required: true },
        screenshotsImgs: { type: Array as () => string[], required: true },
        type: { type: String, required: true }
    },
    data: () => ({
        dialogShowed: false,
        activeIndex: 0,
    }),
    methods: {
        openCarousel(index: number) {
            this.activeIndex = index;
            this.dialogShowed = true;
        },
        getImgUrl
    }
})
</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="5">
                <v-img :aspect-ratio="4 / 3" :src="getImgUrl(wideLogoImg)" :alt="title + ' logo'" max-width="390"
                    rounded cover></v-img>
            </v-col>
            <v-col cols="7" class="d-flex flex-column">
                <span class="text-h6">{{ title }}</span>
                <span class="text-subtitle text-truncate-2">{{ description }}</span>
                <div class="d-flex flex-row ga-2 mt-2">
                    <v-img v-for="(img, index) in screenshotsImgs" :key="img" :src="getImgUrl(img)"
                        :alt="`${title} screenshot`" :aspect-ratio="16 / 9" cover max-width="179"
                        @click="openCarousel(index)" v-ripple class="cursor-pointer">
                    </v-img>
                </div>
                <div class="mt-4 d-flex flex-wrap ga-2">
                    <v-chip v-for="tag in tags" :key="tag">{{ tag }}</v-chip>
                </div>
                <v-btn class="my-4" max-width="100" append-icon="mdi-arrow-right" variant="outlined"
                    :to="`/apps/${type === 'software' ? 'software' : 'games'}/${url}`">Get</v-btn>
            </v-col>
        </v-row>
    </v-container>
    <v-dialog v-model="dialogShowed" max-height="80vh" max-width="80vw">
        <v-card class=" py-5 px-5">
            <v-carousel hide-delimiters v-model="activeIndex">
                <v-carousel-item v-for="(scrImg, index) in screenshotsImgs" :key="scrImg" :value="index">
                    <div class="img-center">
                        <v-img :src="getImgUrl(scrImg)" :alt="title + ' screenshot'" contain></v-img>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-card>
    </v-dialog>
</template>

<style scoped>
.text-truncate-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.img-center {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>