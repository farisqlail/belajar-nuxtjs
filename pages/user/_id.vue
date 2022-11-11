<template>
  <div>
    <layouts />
    <div class="container">
      <h1 align="center">User {{ $route.params.id }}</h1>
    </div>
  </div>
</template>

<script>
import Layouts from "../../components/Layouts.vue";
export default {
  components: { Layouts },
  name: "UserPage",
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
};
</script>