<template>
  <div>
    <layouts />

    <div class="container">
      <div class="row mt-3">
        <div class="col-md-8" align="center">
          <h1>Blogs</h1>
        </div>
        <div class="col-md-4" align="right">
          <nuxt-link to="/blogs/create/" class="btn btn-primary mt-3">Create Blog</nuxt-link>
        </div>
      </div>

      <div class="row mt-2">
        <div v-for="post in posts.slice(0, 10)" :key="post.id" class="col-md-6 mt-3">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">{{ post.title }}</h5>
              <p class="card-text">{{ post.body }}</p>
              <nuxt-link
                :to="{ name: 'blogs-show', params: { show: post.id } }"
                class="btn btn-primary"
                >Read More</nuxt-link
              >
              <nuxt-link :to="{ name: 'blogs-edit-id', params: { id: post.id } }" class="btn btn-success ml-2">Edit</nuxt-link>	
              <nuxt-link :to="{ name: 'blogs-delete-id', params: { id: post.id } }" class="btn btn-danger ml-2">Delete</nuxt-link>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import Layouts from "../../components/Layouts.vue";
import axios from "~/plugins/axios";

export default {
  components: { Layouts },
  name: "BlogPage",
  asyncData() {
    return axios.get("posts").then((res) => ({
      posts: res.data,
    }));
  },
};
</script>