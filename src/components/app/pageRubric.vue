<template>
  <div class="pageRubric">

	  <rubricHead
      v-if="$store.state.menuData
          && $store.state.menuData.hasOwnProperty('rubricator')"
		  :rubricHeadData="rubricator" />

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
            tag: rubric.articles[0].tag,
            name_ru: rubric.articles[0].name_ru,
            name_en: rubric.articles[0].name_en,
            subtitle: rubric.articles[0].subtitle,
            description: rubric.articles[0].description
          }"
        />
        <articleIntroduce
          v-if="rubric.articles[0].introduce.length > 0"
          :articleIntroduceData="{
            title_introduce: rubric.articles[0].title_introduce,
            introduce: JSON.parse(rubric.articles[0].introduce)
          }"
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
              tag: article.tag,
              name_ru: article.name_ru,
              name_en: article.name_en,
              subtitle: article.subtitle,
              description: article.description
            }"
          />
          <articleIntroduce
            v-if="article.introduce.length > 0"
            :articleIntroduceData="{
              title_introduce: article.title_introduce,
              introduce: JSON.parse(article.introduce)
            }"
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
  const rubricHead = () => import('./templatesElement/rubricHead.vue');
	const breadCrumbs = () => import('./breadCrumbs.vue');
	const articleImage = () => import('./templatesElement/articleImage.vue');
	const articleContent = () => import('./templatesElement/articleContent.vue');
	const articleIntroduce =
		() => import('./templatesElement/articleIntroduce.vue');
  const pagination = () => import('./pagination.vue');

	export default {
		name: `pageRubric`,
		components: {
      rubricHead,
			breadCrumbs,
			articleImage,
			articleContent,
			articleIntroduce,
      pagination
    },
		data() {
			return {
				articlesOnPage: 7
			};
		},
    computed: {
      rubricator () {
        let rubricator = this.$store.state.menuData.rubricator;
        let rubricId = this.$store.state.rubricPageData.id;
        let out = rubricator.filter(v => v.id === rubricId);
        // console.log(rubricId)
        // console.log(out)
        // console.log(out.length)
        if(out.length > 0) {
          return out[0]
        }
        rubricator.forEach(v => {
          v.children.forEach(i => {
            if (i.id === rubricId) {
              out = v
            }
          })
        });
        // console.log(out)
        window.scrollTo(0,0)
        return out
      },
      rubric () {
        return this.$store.state.rubricPageData
      }
    },
		mounted() {},
    // watch: {
    //   '$route' (to, from) {
    //     console.log(to) // console.log(from)
    //   }
    // },
		methods: {
		  // пагинацию переделать чере роут !!
      getPage (pageNumber) {
        this.$store.dispatch('GET_RUBRIC_PAGE', {
          id: this.$route.params.id, page: pageNumber
        })
        window.scrollTo(0,0)
      },
		},
    asyncData ({ store, route: { params: { id }}}) {
      return store.dispatch('GET_RUBRIC_PAGE', { id: id, page: 1 })
    }
	};
</script>

<style lang="scss" scoped>

  .pageRubric {
    margin-top: 50px;

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
    /*.border-top { padding: 15px 0 0 0; border-top: 1px solid #c0c0c0; }*/

  }

</style>
