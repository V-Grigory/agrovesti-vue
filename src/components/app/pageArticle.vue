<template>
  <div class="pageArticle">

<!--    {{ article.tilda_content }}-->
    <div v-html="article.tilda_content">

    </div>

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
      axios.get('http://localhost:8000/api/articles/kontakty').then(res => {
        console.log(res)
        this.article = res.data
      })
      .catch(error => {
        console.log(error)
      });
    }
  };
</script>

<style lang="scss">

</style>
