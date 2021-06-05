<template>
  <div>
    <v-app-bar app color="green darken-3" dark>
      <div class="d-flex align-center">
        <h2>Mundo Verde</h2>
      </div>

      <v-spacer></v-spacer>
      <v-btn title="Ir al home" to="/" small text fab>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        v-if="!autenticado"
        title="Iniciar sesión"
        to="/login"
        small
        text
        fab
      >
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn
        v-if="autenticado"
        title="Lista de deseos"
        to="/lista-deseos"
        small
        text
        fab
      >
        <v-icon>mdi-star-plus</v-icon>
      </v-btn>
      <v-btn
        text
        title="Cerrar sesión"
        v-if="autenticado"
        @click="logout"
        small
        fab
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn
        title="Ver carrito"
        @click="mostrarCarrito = !mostrarCarrito"
        small
        text
        fab
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <Carrito :isShow="mostrarCarrito" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Carrito from "../views/Carrito";

export default {
  name: "Navbar",
  components: {
    Carrito,
  },
  data() {
    return {
      mostrarCarrito: false,
    };
  },
  methods: {
    ...mapActions(["cerrarSesion"]),
    async logout() {
      const res = await this.cerrarSesion;
      if (res) this.$router.push("/login");
    },
  },
  computed: mapState({
    autenticado: (state) => state.estaAutentificado,
  }),
};
</script>