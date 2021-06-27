<template>
  <v-container class="my-12">
    <v-row align="center">
      <v-col cols="12">
        <div class="text-h4">Error {{ code }}</div>
      </v-col>
      <v-col cols="12">
        <div class="text-normal">{{ text }}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Error",
  props: {
    code: String,
  },
  computed: {
    text() {
      switch (this.code) {
        case "404":
          return "¡Ups! La página solicitada no existe.";
        case "403":
          return "No podemos darte acceso a esta página :(";
        case "500":
          return "¡Rayos! Ha ocurrido un problema en nuestros servidores, por favor, inténtalo más tarde.";
      }
    },
  },
};
</script>