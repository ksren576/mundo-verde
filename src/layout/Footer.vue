<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-title class="green lighten-4">
        <span class="caption"
          >{{ new Date().getFullYear() }} — <strong>Mundo verde</strong></span
        >

        <v-spacer />

        <v-btn v-for="icon in icons" :key="icon" class="mx-4" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: ["mdi-github", "mdi-instagram"],
  }),
};
</script>