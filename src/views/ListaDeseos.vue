<template>
  <v-container class="mt-5">
    <v-row justify="space-between" no-gutters>
      <div class="text-h4">Lista de deseos</div>
      <div v-if="!estaVacia">
        <v-btn color="red" @click="vaciarLista" text> Eliminar lista </v-btn>
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
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ProductCard from "../components/ProductCard";

export default {
  name: "ListaDeseos",
  components: {
    ProductCard,
  },
  methods: {
    ...mapActions(["vaciarLista"]),
  },
  computed: mapState({
    productos: (state) => state.deseos,
    estaVacia: (state) => state.deseos.length === 0,
  }),
};
</script>

