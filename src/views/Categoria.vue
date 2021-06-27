<template>
  <v-container>
    <v-card class="mx-auto my-12" v-if="categoria">
      <v-img height="350" :src="categoria.image" />

      <v-card-title>{{ categoria.name }}</v-card-title>

      <v-card-text>
        <v-row align="center" no-gutters>
          <div class="text-h6 mr-3">Exposición:</div>
          <v-rating :value="categoria.exposure" dense readonly class="mr-3">
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? 'amber' : 'grey'"
                @click="props.click"
              >
                {{
                  props.isFilled
                    ? "mdi-white-balance-sunny"
                    : "mdi-weather-sunny"
                }}
              </v-icon>
            </template>
          </v-rating>
          <div class="text-h6 mr-3">Riego:</div>
          <v-rating :value="categoria.irrigation" dense readonly>
            <template v-slot:item="props">
              <v-icon
                :color="props.isFilled ? 'blue' : 'grey'"
                @click="props.click"
              >
                {{ props.isFilled ? "mdi-water" : "mdi-water-outline" }}
              </v-icon>
            </template>
          </v-rating>
        </v-row>

        <v-divider class="my-4" />

        <div>{{ categoria.description }}</div>
      </v-card-text>

      <v-divider class="mx-4" />

      <v-card-title>Cuidados</v-card-title>

      <v-card-text class="text-center">
        <v-chip
          class="ma-2"
          color="green lighten-4"
          v-for="item in categoria.cares"
          :key="item"
          >{{ item }}</v-chip
        >
      </v-card-text>

      <v-divider class="mx-4" v-if="categoria.notes.length > 0" />

      <v-list-item two-line v-for="item in categoria.notes" :key="item.title">
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          <v-list-item-subtitle class="ws-unset">{{
            item.description
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="mx-4" />

      <v-card-title>Productos</v-card-title>

      <v-card-text>
        <v-row justify="center">
          <product-card v-for="p in productos" :key="p.id" :producto="p" />
        </v-row>
      </v-card-text> </v-card
  ></v-container>
</template>

<script>
import { mapState } from "vuex";
import ProductCard from "../components/ProductCard";

export default {
  name: "Categoria",
  components: {
    ProductCard,
  },
  mounted() {
    this.id = this.$route.params.id;
  },
  data: () => ({
    id: "",
    rating: 4,
  }),
  computed: mapState({
    categoria(state) {
      if (this.id)
        return state.categorias.find(
          (item) => item.id === this.id.toUpperCase()
        );
      return null;
    },
    productos(state) {
      return state.productos.filter(
        (item) => item.categoryId === this.id.toUpperCase() && item.stock > 0
      );
    },
  }),
};
</script>

<style scoped>
.ws-unset {
  white-space: unset;
}
</style>