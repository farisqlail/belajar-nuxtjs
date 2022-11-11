<template>
  <div>
    <layouts />
    <div class="container">
      <h1>Edit new blog</h1>

      <form @submit.prevent="editBlog">
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
          @click.prevent="editBlog"
        >
          Edit
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
  name: "EditBlogPage",
  head() {
    return {
      title: "Edit Blog",
    };
  },
  data() {
    return {
      title: "",
      body: "",
    };
  },
  //memanggil datanya dari server
  async mounted() {
    const res = await axios.get(`posts/${this.$route.params.id}`);
      this.title = res.data.title;
      this.body = res.data.body;
  },
  //mengirim data ke server
  methods: {
    async editBlog() {
      await axios.put(`posts/${this.$route.params.id}`, {
        title: this.title,
        body: this.body,
      }).then((res) => {
        console.log(res);
        this.$router.push("/blogs");
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>