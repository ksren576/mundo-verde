<template>
  <v-container class="mt-3">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="2">
          <v-card-title>Iniciar sesión</v-card-title>
          <v-divider />
          <v-card-text>
            <v-text-field label="E-mail" outlined dense />
            <v-text-field label="Contraseña" type="password" outlined dense />
          </v-card-text>
          <v-divider />
          <v-card-actions class="pa-4">
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-btn color="green lighten-1" rounded elevation="0" outlined>
                  Cancelar
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn color="green darken-3" dark rounded elevation="0">
                  Iniciar sesión
                </v-btn>
              </v-col>
            </v-row>
            <div class="d-flex justify-space-between">
              <div></div>
              <div></div>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>
