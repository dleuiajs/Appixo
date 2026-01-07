<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent(
    {
        name: "TheNavigation"
    }
)
</script>

<template>
    <v-toolbar :elevation="8" title="Appixo">

        <v-toolbar-items>
            <v-btn to="/" text="Home"></v-btn>
            <v-btn to="/apps/games" text="Games"></v-btn>
            <v-btn to="/apps/software" text="Software"></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>