<script lang="ts">
import AppCard from '@/components/AppCard.vue';

// logos
import SnakeLogo from '@/assets/images/apps_logos/SnakeLogo.png';
import VirtualPianoLogo from '@/assets/images/apps_logos/VirtualPianoLogo.png';

// screenshots
import SnakeScreenshot from '@/assets/images/apps_screenshots/SnakeScreenshot.png';
import VirtualPianoScreenshot from '@/assets/images/apps_screenshots/VirtualPianoScreenshot.png';

export default {
  name: 'HomeView',
  components: {
    AppCard,
  },
  data() {
    return {
      // logos
      snakeLogo: SnakeLogo,
      virtualPianoLogo: VirtualPianoLogo,

      // screenshots
      snakeScreenshot: SnakeScreenshot,
      virtualPianoScreenshot: VirtualPianoScreenshot,
    }
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column ga-5 mb-10 px-5">
        <div class="d-flex flex-column">
          <div class="d-flex flex-row align-center ga-5">
            <p class="text-h5 pl-2">Top games:</p>
            <v-btn append-icon="mdi-arrow-right" variant="outlined" max-height="28" to="/apps/games">
              <p class="text-caption">More</p>
            </v-btn>
          </div>
          <div class="d-flex flex-row">
            <AppCard title="Snake"
              description="Simple Snake game created in Unity, inspired by the classic visual style of Tetris. The game features a minimalist Tetris-style design, best score saving, pause and fullscreen support, as well as Discord Rich Presence support."
              :tags="['Retro', '2D', 'Pixel Art', 'Tetris', 'Arcade']" :logoImg="snakeLogo"
              :screenshotImg="snakeScreenshot" :views="3" :downloads="1" :hearts="0" type="game" />
            <AppCard title="Snake1"
              description="Simple Snake game created in Unity, inspired by the classic visual style of Tetris. The game features a minimalist Tetris-style design, best score saving, pause and fullscreen support, as well as Discord Rich Presence support."
              :tags="['Retro', '2D', 'Pixel Art', 'Tetris', 'Arcade']" :logoImg="snakeLogo"
              :screenshotImg="snakeScreenshot" :views="3" :downloads="1" :hearts="0" type="game" />
            <AppCard title="Snake2"
              description="Simple Snake game created in Unity, inspired by the classic visual style of Tetris. The game features a minimalist Tetris-style design, best score saving, pause and fullscreen support, as well as Discord Rich Presence support."
              :tags="['Retro', '2D', 'Pixel Art', 'Tetris', 'Arcade']" :logoImg="snakeLogo"
              :screenshotImg="snakeScreenshot" :views="3" :downloads="1" :hearts="0" type="game" />
          </div>
        </div>

        <div class="d-flex flex-column">
          <div class="d-flex flex-row align-center ga-5">
            <p class="text-h5 pl-2">Top software:</p>
            <v-btn append-icon="mdi-arrow-right" variant="outlined" max-height="28" to="/apps/software">
              <p class="text-caption">More</p>
            </v-btn>
          </div>
          <div class="d-flex flex-row">
            <AppCard title="VirtualPiano"
              description="Play a virtual piano using the keyboard in a console application written in C#. The program is lightweight, and sounds are reproduced via frequencies."
              :tags="['Lightweight', 'Music', 'C#']" :logoImg="virtualPianoLogo" :screenshotImg="virtualPianoScreenshot"
              :views="5" :downloads="2" :hearts="1" type="software" />
            <AppCard title="VirtualPiano1"
              description="Play a virtual piano using the keyboard in a console application written in C#. The program is lightweight, and sounds are reproduced via frequencies."
              :tags="['Lightweight', 'Music', 'C#']" :logoImg="virtualPianoLogo" :screenshotImg="virtualPianoScreenshot"
              :views="5" :downloads="2" :hearts="1" type="software" />
            <AppCard title="VirtualPiano2"
              description="Play a virtual piano using the keyboard in a console application written in C#. The program is lightweight, and sounds are reproduced via frequencies."
              :tags="['Lightweight', 'Music', 'C#']" :logoImg="virtualPianoLogo" :screenshotImg="virtualPianoScreenshot"
              :views="5" :downloads="2" :hearts="1" type="software" />
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>
