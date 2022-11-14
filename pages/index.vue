<template>
  <div>
    <layouts />
    <div class="container">
      <h1 align="center">Home</h1>
      <div class="row mt-2">
        <div class="col-md-6" v-for="post in posts.slice(0, 4)" :key="post.id">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.body }}</p>
              <nuxt-link
                :to="{ name: 'blogs-show', params: { show: post.id } }"
                class="btn btn-primary"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Layouts from "../components/Layouts.vue";
import axios from "~/plugins/axios";

export default {
  components: { Layouts },
  name: "IndexPage",
  // asyncData, kita bisa mengambil data dari API
  asyncData() {
    return axios.get("posts").then((res) => ({
      posts: res.data,
    }));
  },
  head() {
    return {
      title: "Home",
    };
  },
};
</script>
