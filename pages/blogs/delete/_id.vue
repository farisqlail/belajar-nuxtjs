
<template>
    
</template>
<script>
import axios from "~/plugins/axios";

export default {
    data(){
        return {
            posts: {}
        }
    },
    async mounted(){
        await axios.delete(`posts/${this.$route.params.id}`)
        .then((res) => {
            console.log(res);
            this.$router.push('/blogs')
        }).catch((err) => {
            console.log(err)
        })
    }
};
</script>