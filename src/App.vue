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

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
};
</script>
