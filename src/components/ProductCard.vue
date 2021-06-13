<template>
  <v-card class="ma-5" max-width="400">
    <v-img class="white--text align-end" height="200px" :src="producto.image" />

    <v-card-title>{{ producto.name }}</v-card-title>
    <v-card-subtitle>{{ producto.price | toCurrency }}</v-card-subtitle>

    <v-card-actions>
      <v-btn
        title="Agregar al carrito"
        small
        text
        fab
        color="primary"
        @click="agregarProductoAlCarrito(producto)"
      >
        <v-icon>mdi-cart-plus</v-icon>
      </v-btn>
      <v-btn
        v-if="estaAutenticado && !esListaDeDeseo"
        title="Agregar a lista de deseos"
        small
        text
        fab
        color="red"
        @click="agregarLista(producto)"
      >
        <v-icon>mdi-heart-plus</v-icon>
      </v-btn>
      <v-btn
        v-if="estaAutenticado && esListaDeDeseo"
        title="Eliminar de lista de deseos"
        small
        text
        fab
        color="red"
        @click="eliminarLista(producto.id)"
      >
        <v-icon>mdi-trash-can</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "ProductCard",
  props: {
    producto: Object,
    esListaDeDeseo: Boolean,
  },
  methods: mapActions([
    "agregarProductoAlCarrito",
    "agregarLista",
    "eliminarLista",
  ]),
  computed: {
    ...mapState({
      estaAutenticado: (state) => state.estaAutenticado,
    }),
  },
};
</script>