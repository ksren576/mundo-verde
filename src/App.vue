<template>
  <v-app>
    <v-app-bar app color="green" dark>
      <div class="d-flex align-center">
        <h2>Mundo Verde</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn text v-if="autenticado" @click="logout">
        <span class="mr-2">Cerrar sesión</span>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <v-footer dark padless>
      <v-card flat tile class="green white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="white--text" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="white--text pt-1"> </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text pt-1">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["cerrarSesion"]),
    async logout() {
      const res = await this.cerrarSesion;
      if (res) this.$router.push("/login");
    },
  },
  computed: mapState({
    autentificado: (state) => state.estaAutentificado,
  }),
  data: () => ({
    icons: "",
  }),
};
</script>
