<template>
  <div class="pageArticle">

    <breadCrumbs
      v-if="article.rubriks"
      :breadCrumbsData="{
	      name_ru: article.rubriks[0].name_ru,
	      name_en: article.rubriks[0].name_en,
	      parent: article.rubriks[0].parent}"
    />

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
	const breadCrumbs = () => import('./breadCrumbs.vue');
  // import rubricsTemplate from './rubricsTemplate.vue';

  export default {
    name: `pageArticle`,
    components: {
			breadCrumbs
      // rubricsTemplate
    },
    data() {
      return {
        article: {}
      };
    },
    mounted() {
      axios.get(
        `http://localhost:8000/api/articles/${this.$route.params.id}`
      ).then(res => {
        this.article = res.data
				// console.log(this.article)
      })
      .catch(error => {
        console.log(error)
      });
    }
  };
</script>

<style lang="scss">

</style>
