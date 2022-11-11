<template>
  <div>
    <layouts />

    <div class="container mt-5">  
      <!-- untuk menampilkan param id/slug -->
      <!-- <h1 align="center">{{ $route.params.slug }}</h1> -->
      <h2>{{ posts.title }}</h2>
      <p>
        {{ posts.body }}
      </p>
    </div>

  </div>
</template>

<script>
import Layouts from "../../components/Layouts.vue";
import axios from "~/plugins/axios";
export default {
  components: { Layouts },
  name: "BlogDetailPage",
  head(){
    return {
      title: "Blog Detail"
    }
  },
  data(){
    return {
      posts: {}
    }
  },
  async mounted(){
    const res = await axios.get(`posts/${this.$route.params.show}`);
      this.posts = res.data    
  }
};
</script>