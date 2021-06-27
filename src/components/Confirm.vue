<template>
  <v-row justify="center">
    <v-dialog :value="show" persistent max-width="350">
      <v-card>
        <v-card-title class="text-h5">
          {{ title }}
        </v-card-title>
        <v-card-text>{{ text }}</v-card-text>
        <v-card-actions>
          <v-btn color="green darken-1" text @click="onCancel">
            Cancelar
          </v-btn>
          <v-spacer />
          <v-btn color="green darken-1" text @click="onAccept"> Aceptar </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: {
    show: Boolean,
    title: String,
    text: String,
    onAccept: Function,
    onCancel: Function,
  },
};
</script>