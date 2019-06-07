<template>
  <div class="rubricsTemplate">

    <rubricHead
      :rubricHeadData="{
        name: rubricData.name,
        icon: rubricData.icon,
        headItems: rubricData.headItems
      }" />

    <div v-if="rubricData.templateNumber === 1" class="templateNumber-1">

      <div class="leftSide-49">
        <div class="articleImageWrapper">
          <articleImage
            :articleImageData="rubricData.articles[0].image"
          />
        </div>
      </div>
      <div class="rightSide-49">
        <div class="articleContentWrapper margin-bottom-25">
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
      <div style="clear: both;"></div>

      <div
        v-for="(article, index) in rubricData.articles"
        v-if="index !== 0"
        :key="index"
      >
        <div :class="[index % 2 ? 'leftSide-49' : 'rightSide-49']">
          <div class="articleImageWrapper">
            <articleImage
              :articleImageData="article.image"
            />
          </div>
          <div class="articleContentWrapper margin-top-25 margin-bottom-25">
            <articleContent
              :articleContentData="{
                  title: article.title,
                  description: article.description
                }"
            />
          </div>
          <div class="articleIntroduceWrapper">
            <articleIntroduce
              :articleIntroduceData="article.introduce"
            />
          </div>
        </div>
        <div
          v-if="!(index%2) || index === rubricData.articles.length - 1"
          style="clear: both;"></div>
      </div>

<!--      <div style="clear: both;"></div>-->
    </div>

    <div v-if="rubricData.templateNumber === 2" class="templateNumber-2">

      <div class="leftSide-65">
        <div class="articleImageWrapper">
          <articleImage
            :articleImageData="rubricData.articles[0].image"
          />
        </div>
        <div class="articleContentWrapper margin-top-25 margin-bottom-25">
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

      <div class="rightSide-33">
        <div
          class="articleContentWrapper border-top margin-bottom-25"
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

    .templateNumber-1 {
      .leftSide {
        /*float: left;*/
        /*width: 49%;*/
      }
      .rightSide {
        /*float: right;*/
        /*width: 49%;*/
      }
    }

    .templateNumber-2 {
      /*display: flex;*/
      .leftSide {
        /*float: left;*/
        /*width: 65%;*/
        /*margin: 0 0 25px 0;*/
        .articleImageWrapper {}
        .articleContentWrapper {
          /*margin: 25px 0;*/
        }
        .articleIntroduceWrapper {}
      }
      .rightSide {
        /*float: right;*/
        /*width: 33%;*/
        .articleContentWrapper {
          /*margin: 0 0 25px 0;*/
          /*padding: 15px 0 0 0;*/
          /*border-top: 1px solid #c0c0c0;*/
        }
      }
    }

    /*@media (max-width: 620px) {*/
    /*  .templateNumber-2 .leftSide,*/
    /*  .templateNumber-2 .rightSide {*/
    /*    float: none;*/
    /*    width: 100%;*/
    /*  }*/
    /*}*/
  }

</style>
