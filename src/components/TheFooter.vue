<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent(
    {
        name: "TheFooter",
        data() {
            return {
                socials: [
                    { iconImg: 'mdi-github', url: 'https://github.com/dleuiajs/Appixo' },
                    { iconImg: 'mdi-youtube', url: 'https://youtube.com' },
                    { iconImg: 'mdi-facebook', url: 'https://facebook.com' },
                    { iconImg: 'mdi-reddit', url: 'https://reddit.com' },
                    { iconImg: 'mdi-linkedin', url: 'https://sk.linkedin.com' },
                ]
            }
        }
    }
)
</script>

<template>
    <v-footer class="text-center d-flex flex-column ga-2 py-4">
        <div class="d-flex ga-3">
            <v-btn v-for="social in socials" :key="social.url" :icon="social.iconImg" density="comfortable"
                :href="social.url"></v-btn>
        </div>

        <v-divider class="my-2" thickness="2" width="80"></v-divider>

        <div class="text-caption font-weigth-regular opacity-60">
            Appixo is a website for sharing applications and games between users.
        </div>

        <v-divider></v-divider>

        <div>
            © {{ new Date().getFullYear() }} Appixo. All rights reserved
        </div>
    </v-footer>
</template>