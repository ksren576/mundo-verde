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
        text
        title="Cerrar sesión"
        v-if="autenticado"
        @click.stop="alertLogout"
        small
        fab
      >
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-badge
        color="red darken-4"
        overlap
        :content="tamanoLista"
        v-if="autenticado"
      >
        <v-btn title="Lista de deseos" to="/lista-deseos" small text fab>
          <v-icon>mdi-heart-multiple</v-icon>
        </v-btn>
      </v-badge>
      <v-badge color="red darken-4" overlap :content="tamanoCarrito">
        <v-btn
          title="Ver carrito"
          @click="mostrarCarrito = !mostrarCarrito"
          small
          text
          fab
        >
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>
    </v-app-bar>

    <Carrito :isShow="mostrarCarrito" />

    <confirm
      title="Cerrar sesión"
      text="¿Está seguro de cerrar la sesión?"
      :onAccept="handleSave"
      :onCancel="closeAlert"
      :show="mostrarAlerta"
    />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Carrito from "../components/Carrito";
import Confirm from "../components/Confirm";

export default {
  name: "Navbar",
  components: {
    Carrito,
    Confirm,
  },
  data() {
    return {
      mostrarCarrito: false,
      mostrarAlerta: false,
    };
  },
  methods: {
    ...mapActions(["cerrarSesion"]),
    async logout() {
      await this.cerrarSesion();
      if (this.$route.path !== "/") {
        this.$router.push("/");
      }
    },
    alertLogout() {
      this.mostrarAlerta = true;
    },
    handleSave() {
      this.closeAlert();
      this.logout();
    },
    closeAlert() {
      this.mostrarAlerta = false;
    },
  },
  computed: mapState({
    autenticado: (state) => state.estaAutenticado,
    tamanoCarrito: (state) =>
      String(state.carrito.reduce((acc, i) => (acc += i.quantity), 0)),
    tamanoLista: (state) => String(state.deseos.length),
  }),
};
</script>
