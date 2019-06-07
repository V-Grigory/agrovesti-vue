<template>
  <div class="rubricsTemplate">

    <rubricHead
      :rubricHeadData="{
        name: rubricData.name,
        icon: rubricData.icon,
        headItems: rubricData.headItems
      }" />

    <div v-if="rubricData.templateNumber === 2" class="templateNumber-2">

      <div class="leftSide">
        <div class="articleImageWrapper">
          <articleImage
            :articleImageData="rubricData.articles[0].image"
          />
        </div>
        <div class="articleContentWrapper">
          <articleContent
            :articleContentData="{
              title: rubricData.articles[0].title,
              description: rubricData.articles[0].description
            }"
          />
        </div>
        <div class="articleIntroduceWrapper">
          <articleIntroduce
            :articleIntroduceData="rubricData.articles[0].introduce"
          />
        </div>
      </div>

      <div class="rightSide">
        <div
          class="articleContentWrapper"
          v-for="(article, index) in rubricData.articles"
          v-if="index !== 0"
          :key="index"
        >
          <articleContent
            :articleContentData="{
              title: article.title,
              description: article.description
            }"
          />
        </div>
      </div>

      <div style="clear: both;"></div>
    </div>

  </div>
</template>

<script>
  const rubricHead = () => import('./templatesElement/rubricHead.vue');
  const articleImage = () => import('./templatesElement/articleImage.vue');
  const articleContent = () => import('./templatesElement/articleContent.vue');
  const articleIntroduce =
    () => import('./templatesElement/articleIntroduce.vue');

  export default {
    name: "rubricsTemplate",
    props: {
      rubricData: { type: Object }
    },
    components: {
      rubricHead,
      articleImage,
      articleContent,
      articleIntroduce
    },
    data() {
      return {
      };
    },
    computed: {},
    methods: {},
    mounted() {},
  }
</script>

<style lang="scss" scoped>

  .rubricsTemplate {
    margin-top: 50px;

    .templateNumber-2 {
      /*display: flex;*/
      .leftSide {
        float: left;
        width: 65%;
        padding: 0 0 25px 0;
        .articleImageWrapper {}
        .articleContentWrapper {
          margin: 25px 0;
        }
        .articleIntroduceWrapper {}
      }
      .rightSide {
        float: right;
        width: 33%;
        .articleContentWrapper {
          margin: 0 0 25px 0;
          padding: 15px 0 0 0;
          border-top: 1px solid #c0c0c0;
        }
      }
    }

    @media (max-width: 620px) {
      .templateNumber-2 .leftSide,
      .templateNumber-2 .rightSide {
        float: none;
        width: 100%;
      }
    }
  }

</style>
