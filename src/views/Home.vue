<template>
  <v-container>
    <v-row align="center">
      <v-col cols="12">
        <v-carousel class="mt-5">
          <v-carousel-item
            v-for="(item, i) in carrusel"
            :key="i"
            :src="item.src"
          >
            <v-row class="fill-height" align="end" justify="start" no-gutters>
              <div class="text-h5 carousel-title">{{ item.title }}</div>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <div class="mt-10 mb-10">
      <div class="text-h4 text-center">Categorias</div>
      <v-divider class="mb-5 mt-2" />
      <v-row>
        <v-col v-for="item in categorias" :key="'card_categoria_' + item.id">
          <CategoryCard
            :title="item.name"
            :image="item.image"
            :id="item.id.toLowerCase()"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import CategoryCard from "../components/CategoryCard";
import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    CategoryCard,
  },
  computed: mapState({
    categorias(state) {
      return state.categorias;
    },
    carrusel(state) {
      return state.carrusel;
    },
  }),
};
</script>

<style scoped>
.carousel-title {
  margin-bottom: 50px;
  padding: 10px 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
}
</style>