<script lang="ts">
import { defineComponent } from 'vue';
import { useTheme } from 'vuetify';

export default defineComponent(
    {
        name: "TheNavigation",
        setup() {
            {
                const theme = useTheme();

                return { theme };
            }
        },
    }
)
</script>

<template>
    <v-toolbar :elevation="8" title="Appixo">

        <v-toolbar-items>
            <v-btn to="/" text="Home"></v-btn>
            <v-btn to="/apps/games" text="Games"></v-btn>
            <v-btn to="/apps/software" text="Software"></v-btn>
            <v-divider inset vertical></v-divider>
            <v-btn icon="mdi-theme-light-dark" @click="theme.toggle()"></v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>