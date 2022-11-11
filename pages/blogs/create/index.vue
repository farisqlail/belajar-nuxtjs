<template>
  <div>
    <layouts />
    <div class="container">
      <h1>Create new blog</h1>

      <form @submit.prevent="createBlog">
        <div class="form-group">
          <label for="title">Title</label>
          <input type="text" class="form-control" id="title" v-model="title" />
        </div>

        <div class="form-group">
          <label for="body">Body</label>
          <textarea
            class="form-control"
            id="body"
            rows="3"
            v-model="body"
          ></textarea>
        </div>

        <button
          type="submit"
          class="btn btn-primary mt-3"
          @click.prevent="createBlog"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import layouts from "~/components/Layouts.vue";
import axios from "~/plugins/axios";

export default {
  components: { layouts },
  name: "CreateBlogPage",
  head() {
    return {
      title: "Create Blog",
    };
  },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    async createBlog(){
        const res = await axios.post("posts", {
            title: this.title,
            body: this.body,
        });
        this.$router.push("/blogs");
    }
  },
};
</script>