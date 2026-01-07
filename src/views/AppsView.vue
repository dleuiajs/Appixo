<script lang="ts">
export default {
    name: 'AppsView',
    props: {
        appsType: { type: String, required: true }
    }
}
</script>

<template>
    <v-app>
        <v-main>
            <p class="text-h5 d-flex justify-center">Apps: {{ appsType }}</p>
        </v-main>
    </v-app>
</template>
