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
        <articleImage
          :articleImageData="rubricData.articles[0].image"
        />
        <articleContent
          :articleContentData="{
            title: rubricData.articles[0].title,
            description: rubricData.articles[0].description
          }"
        />
        <articleIntroduce
          :articleIntroduceData="rubricData.articles[0].introduce"
        />
      </div>

      <div class="rightSide">

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
    .leftSide {

    }
    .rightSide {

    }
    .templateNumber-2 {

    }
  }

</style>
