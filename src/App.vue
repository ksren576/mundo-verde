<template>
  <v-app>
    <Navbar />

    <v-main>
      <router-view />
    </v-main>

    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions(["cargarDatos"]),
  },
  mounted() {
    this.cargarDatos();
  },
  components: {
    Footer,
    Navbar,
  },
};
</script>
