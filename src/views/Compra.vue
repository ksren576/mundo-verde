<template>
  <v-container class="my-12">
    <v-row align="center">
      <v-col cols="12">
        <div class="text-h4">¡Tu compra se ha realizado con éxito!</div>
      </v-col>
      <v-col cols="12">
        <div class="text-h6">N° de pedido: {{ numeroPedido }}</div>
      </v-col>
      <v-col cols="12">
        <div class="text-normal">
          Este es el detalle de la compra realizada, ahora prepararemos los
          productos para enviarlos lo más pronto posible. Recuerda que puedes
          realizar el seguimiento de tu pedido con el código de seguimiento que
          enviaremos a tu correo una vez que se hayan enviado los productos.
        </div>
      </v-col>
    </v-row>

    <v-divider class="my-5" />

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
      </v-list-item>
      <v-list-item>
        <v-list-item-content> Total </v-list-item-content>
        <v-list-item-action>{{ total | toCurrency }}</v-list-item-action>
      </v-list-item>
    </v-list>

    <v-divider class="my-5" />

    <v-row align="center" class="mt-5">
      <v-spacer />
      <v-btn color="secondary" outlined @click="irAlInicio"
        >Volver a la página de inicio</v-btn
      >
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { getRndInteger } from "../helpers";

export default {
  name: "Compra",
  methods: {
    irAlInicio() {
      this.$router.push("/");
    },
  },
  computed: {
    ...mapState({
      items: (state) => state.compra,
    }),
    numeroPedido() {
      return getRndInteger(100000, 999999);
    },
    total() {
      return this.items.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
};
</script>