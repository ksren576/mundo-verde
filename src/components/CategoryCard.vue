<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card
        class="mx-auto"
        max-width="400"
        @click="click"
        :elevation="hover ? 12 : 3"
      >
        <v-img class="white--text align-end" height="200px" :src="image">
          <v-card-title class="title">{{ title }}</v-card-title>
        </v-img>
      </v-card>
    </template>
  </v-hover>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    title: String,
    image: String,
    id: String,
  },
  methods: {
    click() {
      this.$router.push(`/categoria/${this.id}`);
    },
  },
};
</script>

<style scoped>
.title {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>