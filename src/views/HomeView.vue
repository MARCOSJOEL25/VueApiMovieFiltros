<template>
  <div class="container">
    <div class="input">
      <input v-model="Input" type="text" v-on:keyup="getOneData(Input)" />
    </div>
    <div>{{ Input }}</div>
    <div class="home">
      <div class="card" v-for="(movie, index) in dataMovie" :key="index" >
        <div class="image">
          <img v-bind:src="IMAGE_PATH + movie.poster_path" alt="" />
        </div>
        <div class="title">{{ movie.title }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import services from "@/services/services";

export default {
  name: "HomeView",

  components: {},
  data() {
    return {
      dataMovie: "",
      IMAGE_PATH: "https://image.tmdb.org/t/p/original",
      Input: "",
    };
  },
  created() {
    services.getAllData().then((data) => {
      this.dataMovie = data.data.results;
    });
  },
  methods: {
    getOneData: function (name) {
      services.getOneMovie().then((data) => {
        this.dataMovie = data.data.results;
      })
    }
  },
};
</script>

<style scoped>
.home {
  padding: 50px 100px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
}

img {
  width: 200px;
  height: 200px;
}
</style>
