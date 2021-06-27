<template>
  <v-container class="mt-5">
    <v-row justify="space-between" no-gutters>
      <div class="text-h4">Lista de deseos</div>
      <div v-if="!estaVacia">
        <v-btn color="red" @click="alertVaciar" text> Eliminar lista </v-btn>
      </div>
    </v-row>
    <v-divider />
    <v-row class="mt-5" justify="center">
      <product-card
        v-for="p in productos"
        :key="p.id"
        :producto="p"
        esListaDeDeseo
      />
    </v-row>
    <div class="text-subtitle mt-5 text-center" v-if="estaVacia">
      No tienes productos en la lista de deseos.
    </div>
    <confirm
      title="Vaciar lista de deseos"
      text="¿Está seguro de eliminar su lista de deseos?"
      :onAccept="handleAccept"
      :onCancel="closeAlert"
      :show="mostrarConfirmEliminar"
    />
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Confirm from "../components/Confirm.vue";
import ProductCard from "../components/ProductCard";

export default {
  name: "ListaDeseos",
  components: {
    ProductCard,
    Confirm,
  },
  data() {
    return {
      mostrarConfirmEliminar: false,
    };
  },
  methods: {
    ...mapActions(["vaciarLista"]),
    alertVaciar() {
      this.mostrarConfirmEliminar = true;
    },
    handleAccept() {
      this.vaciarLista();
      this.closeAlert();
    },
    closeAlert() {
      this.mostrarConfirmEliminar = false;
    },
  },
  computed: mapState({
    productos: (state) => state.deseos,
    estaVacia: (state) => state.deseos.length === 0,
  }),
};
</script>

