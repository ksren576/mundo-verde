<template>
  <v-navigation-drawer
    right
    v-model="show"
    app
    temporary
    :width="width"
    color="grey lighten-5"
  >
    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cart</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>Carrito de compras</v-list-item-title>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon @click="show = !show" title="Salir del carrito">
          <v-icon color="blue-grey darken-1">mdi-close</v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>

    <v-divider />

    <v-list dense>
      <v-list-item v-for="item in items" :key="item.title">
        <v-list-item-content>
          <span>{{ item.quantity }} x {{ item.name }}</span>
          <v-list-item-subtitle
            >Precio unitario:
            {{ item.price | toCurrency }}</v-list-item-subtitle
          >
        </v-list-item-content>

        <v-list-item-action class="ma-0">
          {{ (item.quantity * item.price) | toCurrency }}
        </v-list-item-action>
        <v-list-item-action>
          <v-btn icon @click="eliminarProductoDelCarrito(item.id)">
            <v-icon color="red">mdi-trash-can</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-list-item v-if="estaVacio">
      <v-list-item-content class="justify-center">
        No hay productos en el carrito
      </v-list-item-content>
    </v-list-item>

    <v-divider v-if="!estaVacio" />
    <v-list-item v-if="!estaVacio">
      <v-list-item-content> Total </v-list-item-content>
      <v-list-item-action>{{ total | toCurrency }}</v-list-item-action>
    </v-list-item>
    <v-divider v-if="!estaVacio" />
    <v-row class="ma-2" v-if="!estaVacio">
      <v-col cols="12" lg="6">
        <v-btn color="green darken-3" elevation="0" block small rounded dark
          >Ir a pagar</v-btn
        >
      </v-col>
      <v-col cols="12" lg="6"
        ><v-btn color="red" block small rounded outlined @click="vaciarCarrito"
          >Vaciar carrito</v-btn
        ></v-col
      >
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Carrito",
  props: {
    isShow: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    ...mapActions(["vaciarCarrito", "eliminarProductoDelCarrito"]),
  },
  computed: {
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return "100%";
        case "sm":
          return "50%";
        case "md":
          return "40%";
        case "lg":
          return "30%";
        case "xl":
          return "25%";
      }
    },
    total() {
      return this.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
    ...mapState({
      items: (state) => state.carrito,
      estaVacio: (state) => state.carrito.length === 0,
    }),
  },
  watch: {
    isShow() {
      this.show = !this.show;
    },
  },
};
</script>
