<template>
  <v-container class="mt-3">
    <v-snackbar
      :timeout="3000"
      v-model="alert"
      absolute
      bottom
      color="red darken-2"
      center
      text
    >
      Nombre de usuario o contraseña incorrectos
    </v-snackbar>
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <v-card elevation="2" :loading="loading">
          <template slot="progress">
            <v-progress-linear
              color="amber"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>
          <v-card-title>Iniciar sesión</v-card-title>
          <v-divider />
          <v-card-text>
            <v-text-field v-model="email" label="E-mail" outlined dense />
            <v-text-field
              v-model="password"
              label="Contraseña"
              type="password"
              outlined
              dense
            />
          </v-card-text>
          <v-divider />
          <v-card-actions class="pa-4">
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-btn
                  color="green lighten-1"
                  rounded
                  elevation="0"
                  outlined
                  @click="cancelar"
                >
                  Cancelar
                </v-btn>
              </v-col>
              <v-col cols="auto">
                <v-btn
                  color="green darken-3"
                  dark
                  rounded
                  elevation="0"
                  @click="login"
                >
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
import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      email: "",
      password: "",
      alert: false,
    };
  },
  methods: {
    async login() {
      this.loading = true;
      const result = await this.iniciarSesion({
        email: this.email,
        password: this.password,
      });
      this.loading = false;
      if (result.status) {
        this.$router.push("/");
      } else {
        this.alert = true;
      }
    },
    cancelar() {
      this.$router.go(-1);
    },
    ...mapActions(["iniciarSesion"]),
  },
  computed: {
    ...mapState({
      estaAutenticado: (state) => state.estaAutenticado,
    }),
  },
  watch: {
    estaAutenticado() {
      if (this.estaAutenticado) this.$router.push("/");
    },
  },
};
</script>
