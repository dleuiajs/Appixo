<script lang="ts">
// components
import AppCard from '@/components/AppCard.vue';
import AppBigCard from '@/components/AppBigCard.vue';

// logos
import SnakeLogo from '@/assets/images/apps_logos/SnakeLogo1_1.png';
import SnakeWideLogo from '@/assets/images/apps_logos/SnakeLogo16_10.png';
import VirtualPianoLogo from '@/assets/images/apps_logos/VirtualPianoLogo.png';

// screenshots
import SnakeScreenshot1 from '@/assets/images/apps_screenshots/SnakeScreenshot1.png';
import SnakeScreenshot2 from '@/assets/images/apps_screenshots/SnakeScreenshot2.png';
import SnakeScreenshot3 from '@/assets/images/apps_screenshots/SnakeScreenshot3.png';
import VirtualPianoScreenshot from '@/assets/images/apps_screenshots/VirtualPianoScreenshot.png';

export default {
  name: 'HomeView',
  components: {
    AppCard,
    AppBigCard,
  },
  data() {
    return {
      // logos
      snakeLogo: SnakeLogo,
      snakeWideLogo: SnakeWideLogo,
      virtualPianoLogo: VirtualPianoLogo,

      // screenshots
      snakeScreenshot1: SnakeScreenshot1,
      snakeScreenshot2: SnakeScreenshot2,
      snakeScreenshot3: SnakeScreenshot3,
      virtualPianoScreenshot: VirtualPianoScreenshot,
    }
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column ga-3 mt-5 mb-10 px-5">
        <span class="text-h5">Recommended app:</span>
        <v-card class="py-4" elevation="2">
          <v-carousel height="380" cycle hide-delimiter-background delimiter-icon="mdi-square-rounded" color="grey">
            <v-carousel-item :value="0">
              <AppBigCard url="snake" title="Snake: Tetris Style Edition"
                description="Simple Snake game created in Unity, inspired by the classic visual style of Tetris. The game features a minimalist Tetris-style design, best score saving, pause and fullscreen support, as well as Discord Rich Presence support."
                :tags="['Retro', '2D', 'Pixel Art', 'Tetris', 'Arcade']" :wideLogoImg="snakeWideLogo"
                :screenshotsImgs="[snakeScreenshot1, snakeScreenshot2, snakeScreenshot3]" type="game" />
            </v-carousel-item>
            <v-carousel-item :value="1">
              <AppBigCard url="virtualpiano" title="VirtualPiano"
                description="Play a virtual piano using the keyboard in a console application written in C#. The program is lightweight, and sounds are reproduced via frequencies."
                :tags="['Lightweight', 'Music', 'C#']" :wideLogoImg="virtualPianoLogo"
                :screenshotsImgs="[virtualPianoScreenshot]" type="software" />
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </div>
      <!-- lists -->
      <div class="d-flex flex-column ga-5 mb-10 px-5">
        <div class="d-flex flex-column ga-3">
          <div class="d-flex flex-row align-center ga-5">
            <span class="text-h5 pl-2">Top games:</span>
            <v-btn append-icon="mdi-arrow-right" variant="outlined" color="red-lighten-2" max-height="28"
              to="/apps/games">
              <p class="text-caption">More</p>
            </v-btn>
          </div>
          <div class="d-flex flex-row">
            <AppCard url="snake" title="Snake: Tetris Style Edition"
              description="Simple Snake game created in Unity, inspired by the classic visual style of Tetris. The game features a minimalist Tetris-style design, best score saving, pause and fullscreen support, as well as Discord Rich Presence support."
              :tags="['Retro', '2D', 'Pixel Art', 'Tetris', 'Arcade']" :logoImg="snakeLogo"
              :screenshotsImgs="[snakeScreenshot1, snakeScreenshot2, snakeScreenshot3]" :views="3" :downloads="1"
              :hearts="0" type="game" />
            <AppCard url="snake" title="Snake: Tetris Style Edition"
              description="Simple Snake game created in Unity, inspired by the classic visual style of Tetris. The game features a minimalist Tetris-style design, best score saving, pause and fullscreen support, as well as Discord Rich Presence support."
              :tags="['Retro', '2D', 'Pixel Art', 'Tetris', 'Arcade']" :logoImg="snakeLogo"
              :screenshotsImgs="[snakeScreenshot1, snakeScreenshot2, snakeScreenshot3]" :views="3" :downloads="1"
              :hearts="0" type="game" />
            <AppCard url="snake" title="Snake: Tetris Style Edition"
              description="Simple Snake game created in Unity, inspired by the classic visual style of Tetris. The game features a minimalist Tetris-style design, best score saving, pause and fullscreen support, as well as Discord Rich Presence support."
              :tags="['Retro', '2D', 'Pixel Art', 'Tetris', 'Arcade']" :logoImg="snakeLogo"
              :screenshotsImgs="[snakeScreenshot1, snakeScreenshot2, snakeScreenshot3]" :views="3" :downloads="1"
              :hearts="0" type="game" />
          </div>
        </div>

        <div class="d-flex flex-column ga-3">
          <div class="d-flex flex-row align-center ga-5">
            <span class="text-h5 pl-2">Top software:</span>
            <v-btn append-icon="mdi-arrow-right" variant="outlined" color="red-lighten-2" max-height="28"
              to="/apps/software">
              <p class="text-caption">More</p>
            </v-btn>
          </div>
          <div class="d-flex flex-row">
            <AppCard url="virtualpiano" title="VirtualPiano"
              description="Play a virtual piano using the keyboard in a console application written in C#. The program is lightweight, and sounds are reproduced via frequencies."
              :tags="['Lightweight', 'Music', 'C#']" :logoImg="virtualPianoLogo"
              :screenshotsImgs="[virtualPianoScreenshot]" :views="5" :downloads="2" :hearts="1" type="software" />
            <AppCard url="virtualpiano" title="VirtualPiano1"
              description="Play a virtual piano using the keyboard in a console application written in C#. The program is lightweight, and sounds are reproduced via frequencies."
              :tags="['Lightweight', 'Music', 'C#']" :logoImg="virtualPianoLogo"
              :screenshotsImgs="[virtualPianoScreenshot]" :views="5" :downloads="2" :hearts="1" type="software" />
            <AppCard url="virtualpiano" title="VirtualPiano2"
              description="Play a virtual piano using the keyboard in a console application written in C#. The program is lightweight, and sounds are reproduced via frequencies."
              :tags="['Lightweight', 'Music', 'C#']" :logoImg="virtualPianoLogo"
              :screenshotsImgs="[virtualPianoScreenshot]" :views="5" :downloads="2" :hearts="1" type="software" />
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>
