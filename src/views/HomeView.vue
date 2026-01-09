<script lang="ts">
// components
import AppCardsList from '@/components/AppCardsList.vue';
import AppBigCardsCarousel from '@/components/AppBigCardsCarousel.vue';

export default {
  name: 'HomeView',
  components: {
    AppCardsList,
    AppBigCardsCarousel
  }
}
</script>

<template>
  <v-app>
    <v-main>
      <div class="d-flex flex-column ga-3 mt-5 mb-10 px-5">
        <span class="text-h5">Recommended app:</span>
        <AppBigCardsCarousel :appsLimit="6" />
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
          <AppCardsList appsType="game" />
        </div>

        <div class="d-flex flex-column ga-3">
          <div class="d-flex flex-row align-center ga-5">
            <span class="text-h5 pl-2">Top software:</span>
            <v-btn append-icon="mdi-arrow-right" variant="outlined" color="red-lighten-2" max-height="28"
              to="/apps/software">
              <p class="text-caption">More</p>
            </v-btn>
          </div>
          <AppCardsList appsType="software" />
        </div>
      </div>
    </v-main>
  </v-app>
</template>
