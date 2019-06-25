<template>
  <div class="pageArticle">

    <div
      v-if="article.tilda_content"
      v-html="article.tilda_content"
    ></div>
    <div
      v-else
      v-html="article.article"
    ></div>

  </div>
</template>

<script>
  import axios from 'axios';
  // import rubricsTemplate from './rubricsTemplate.vue';

  export default {
    name: `pageArticle`,
    components: {
      // rubricsTemplate
    },
    data() {
      return {
        article: {}
      };
    },
    mounted() {
      // console.log(this.$route.params.id)
      // return
      axios.get(
        `http://localhost:8000/api/articles/${this.$route.params.id}`
      ).then(res => {
        // console.log('OK')
        // console.log(res)
        this.article = res.data
      })
      .catch(error => {
        // console.log('error')
        console.log(error)
      });
    }
  };
</script>

<style lang="scss">

</style>
