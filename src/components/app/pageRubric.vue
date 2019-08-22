<template>
  <div class="pageRubric">

    <breadCrumbs
      :breadCrumbsData="{
	      name_ru: rubric.name_ru,
	      name_en: rubric.name_en,
	      parent: rubric.parent}"
    />

    <div v-if="rubric.articles && rubric.articles.length > 0">

      <!--first item-->
      <div class="leftSide-49">
        <articleImage
          v-if="rubric.articles[0].image"
          :articleImageData="rubric.articles[0].image"
        />
      </div>
      <div class="rightSide-49">
        <articleContent
          class="margin-bottom-25"
          :articleContentData="{
            name_ru: rubric.articles[0].name_ru,
            name_en: rubric.articles[0].name_en,
            description: rubric.articles[0].description
          }"
        />
        <articleIntroduce
          v-if="rubric.articles[0].introduce.length > 0"
          :articleIntroduceData="JSON.parse(rubric.articles[0].introduce)"
        />
      </div>
      <div style="clear: both;"></div>

      <!--all other items-->
      <div
        v-for="(article, index) in rubric.articles"
        v-if="index !== 0"
        :key="index"
      >
        <div :class="[index % 2 ? 'leftSide-49' : 'rightSide-49']">
          <articleImage
            v-if="article.image"
            :articleImageData="article.image"
          />
          <articleContent
            class="margin-top-25 margin-bottom-25"
            :articleContentData="{
              name_ru: article.name_ru,
              name_en: article.name_en,
              description: article.description
            }"
          />
          <articleIntroduce
            v-if="article.introduce.length > 0"
            :articleIntroduceData="JSON.parse(article.introduce)"
          />
        </div>
        <div
          v-if="!(index%2) || index === rubric.articles.length - 1"
          style="clear: both;"
        ></div>
      </div>
    </div>

	  <pagination
		  v-if="rubric.articles_count
		  && Math.ceil(rubric.articles_count / articlesOnPage) > 1"
		  :pagesCount="Math.ceil(rubric.articles_count / articlesOnPage)"
		  @getPage="getPage"
	  />

  </div>
</template>

<script>
  const urlAPI = process.env.NODE_ENV === 'production'
    ? 'old.agrovesti.ru' : 'localhost:8000';
	import axios from 'axios';
	const breadCrumbs = () => import('./breadCrumbs.vue');
	const articleImage = () => import('./templatesElement/articleImage.vue');
	const articleContent = () => import('./templatesElement/articleContent.vue');
	const articleIntroduce =
		() => import('./templatesElement/articleIntroduce.vue');
  const pagination = () => import('./pagination.vue');

	export default {
		name: `pageRubric`,
		components: {
			breadCrumbs,
			articleImage,
			articleContent,
			articleIntroduce,
      pagination
    },
		data() {
			return {
				rubric: {},
				articlesOnPage: 7
			};
		},
		mounted() {
			this.getPage(1)
		},
		methods: {
      getPage (pageNumber) {
        // console.log('pageNumber: ' + pageNumber)
	      let url = `http://${urlAPI}/api/rubrics`
        axios.get(
          `${url}/${this.$route.params.id}?p=${pageNumber}`
        ).then(res => {
          // console.log(res)
          this.rubric = res.data
        }).catch(error => {
          console.log(error)
        });
      }
		}
	};
</script>

<style lang="scss" scoped>

  .leftSide-49 { float: left; width: 49%; margin: 0 0 25px 0; }
  .rightSide-49 { float: right; width: 49%; margin: 0 0 25px 0; }
  .leftSide-65 { float: left; width: 65%; margin: 0 0 25px 0; }
  .rightSide-33 { float: right; width: 33%; margin: 0 0 25px 0; }

  @media (max-width: 620px) {
    .leftSide-49, .rightSide-49, .leftSide-65, .rightSide-33 {
      float: none; width: 100%;
    }
  }

  .margin-top-25 { margin-top: 25px; }
  .margin-bottom-25 { margin-bottom: 25px; }
  .border-top { padding: 15px 0 0 0; border-top: 1px solid #c0c0c0; }

</style>
