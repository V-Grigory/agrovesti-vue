<template>
  <div class="rubricsTemplate">

    <rubricHead
      :rubricHeadData="rubricData" />

    <!--templateNumber-10-->
    <div
      v-if="rubricData.articles.length > 0
      && rubricData.template_number == 10"
      class="templateNumber-1"
    >

      <!--first item-->
      <div class="leftSide-49">
        <articleImage
          v-if="rubricData.articles[0].image"
          :articleImageData="rubricData.articles[0].image"
        />
      </div>
      <div class="rightSide-49">
        <articleContent
          class="margin-bottom-25"
          :articleContentData="{
            name_ru: rubricData.articles[0].name_ru,
            name_en: rubricData.articles[0].name_en,
            description: rubricData.articles[0].description
          }"
        />
        <articleIntroduce
          v-if="rubricData.articles[0].introduce.length > 0"
          :articleIntroduceData="JSON.parse(rubricData.articles[0].introduce)"
        />
      </div>
      <div style="clear: both;"></div>

      <!--all other items-->
      <div
        v-for="(article, index) in rubricData.articles"
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
          v-if="!(index%2) || index === rubricData.articles.length - 1"
          style="clear: both;"></div>
      </div>
    </div>

    <!--templateNumber-11-->
    <div
      v-if="rubricData.articles.length > 0
      && rubricData.template_number == 11"
      class="templateNumber-11"
    >

      <div class="leftSide-65">
        <articleImage
          v-if="rubricData.articles[0].image"
          :articleImageData="rubricData.articles[0].image"
        />
        <articleContent
          class="margin-top-25 margin-bottom-25"
          :articleContentData="{
            name_ru: rubricData.articles[0].name_ru,
            name_en: rubricData.articles[0].name_en,
            description: rubricData.articles[0].description
          }"
        />
        <articleIntroduce
          v-if="rubricData.articles[0].introduce.length > 0"
          :articleIntroduceData="JSON.parse(rubricData.articles[0].introduce)"
        />
      </div>

      <div class="rightSide-33">
        <articleContent
          class="border-top margin-bottom-25"
          v-for="(article, index) in rubricData.articles"
          v-if="index !== 0"
          :key="index"
          :articleContentData="{
            name_ru: article.name_ru,
            name_en: article.name_en,
            description: article.description
          }"
        />
      </div>

      <div style="clear: both;"></div>
    </div>

    <!--templateNumber-12-->
    <div
      v-if="rubricData.articles.length > 0
      && rubricData.template_number == 12"
      class="templateNumber-12"
    >

      <div class="leftSide-49">
        <articleImage
          v-if="rubricData.articles[0].image"
          :articleImageData="rubricData.articles[0].image"
        />
      </div>
      <div class="rightSide-49">
        <articleContent
          class="margin-bottom-25"
          :articleContentData="{
            name_ru: rubricData.articles[0].name_ru,
            name_en: rubricData.articles[0].name_en,
            description: rubricData.articles[0].description
          }"
        />
        <articleIntroduce
          v-if="rubricData.articles[0].introduce.length > 0"
          :articleIntroduceData="JSON.parse(rubricData.articles[0].introduce)"
        />
      </div>
      <div style="clear: both;"></div>

      <div
        v-for="(article, index) in rubricData.articles"
        v-if="index !== 0"
        :key="index"
      >
        <div class="leftSide-49">
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
        <div class="rightSide-49">
          <articleImage
            v-if="article.image"
            :articleImageData="article.image"
          />
        </div>

        <div style="clear: both;"></div>
      </div>

    </div>

    <!--templateNumber-13-->
    <div
      v-if="rubricData.articles.length > 0
      && rubricData.template_number == 13"
      class="templateNumber-13"
    >
      <div
        v-for="(article, index) in rubricData.articles"
        :key="index"
      >
        <div :class="[index % 2 === 0 ? 'leftSide-49' : 'rightSide-49']">
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
          v-if="index % 2 > 0 || index === rubricData.articles.length - 1"
          style="clear: both;"
        ></div>
      </div>
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

  }

</style>
