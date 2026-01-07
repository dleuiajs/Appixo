<script lang="ts">
import AppCard from '@/components/AppCard.vue';

import SnakeLogo from '@/assets/images/SnakeLogo.png';
import VirtualPianoLogo from '@/assets/images/VirtualPianoLogo.png';

export default {
  name: 'HomeView',
  components: {
    AppCard,
  },
  data() {
    return {
      snakeImage: SnakeLogo,
      virtualPianoImage: VirtualPianoLogo
    }
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column ga-5 mb-10">
        <div class="d-flex flex-column pl-5">
          <div class="d-flex flex-row align-center ga-5">
            <p class="text-h5 pl-2">Top games:</p>
            <v-btn append-icon="mdi-arrow-right" variant="outlined" max-height="28" to="/apps/games">
              <p class="text-caption">More</p>
            </v-btn>
          </div>
          <div class="d-flex flex-row">
            <AppCard title="Snake" :image="snakeImage" :views="3" :downloads="1" :hearts="0" type="game" />
            <AppCard title="Snake" :image="snakeImage" :views="3" :downloads="1" :hearts="0" type="game" />
            <AppCard title="Snake" :image="snakeImage" :views="3" :downloads="1" :hearts="0" type="game" />
          </div>
        </div>

        <div class="d-flex flex-column pl-5">
          <div class="d-flex flex-row align-center ga-5">
            <p class="text-h5 pl-2">Top software:</p>
            <v-btn append-icon="mdi-arrow-right" variant="outlined" max-height="28" to="/apps/software">
              <p class="text-caption">More</p>
            </v-btn>
          </div>
          <div class="d-flex flex-row">
            <AppCard title="VirtualPiano" :image="virtualPianoImage" :views="5" :downloads="2" :hearts="1"
              type="software" />
            <AppCard title="VirtualPiano" :image="virtualPianoImage" :views="5" :downloads="2" :hearts="1"
              type="software" />
            <AppCard title="VirtualPiano" :image="virtualPianoImage" :views="5" :downloads="2" :hearts="1"
              type="software" />
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>
