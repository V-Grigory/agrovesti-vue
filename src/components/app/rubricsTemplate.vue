<template>
  <div class="rubricTemplate">

    <rubricHead
      :rubricHeadData="headTemplateData" />

    <div v-if="rubricData.templateNumber === 2" class="contentTemplate">

      <div class="leftSide">
        <articleImage :articleImageData="rubricData.articles[0].image" />
        <!--<articleContent />-->
        <!--<articleLearn />-->
      </div>

      <div class="rightSide">

      </div>

    </div>

  </div>
</template>

<script>
  const rubricHead = () => import('./templatesElement/rubricHead.vue');
  const articleImage = () => import('./templatesElement/articleImage.vue');

  export default {
    name: "rubricsTemplate",
    props: {
      rubricData: { type: Object }
    },
    components: {
      rubricHead,
      articleImage
    },
    data() {
      return {
        //showF: false,
        //showClientSideComponents: false,
      };
    },
    computed: {
      headTemplateData() {
        return {
          name: this.rubricData.name,
          icon: this.rubricData.icon,
          headItems: this.rubricData.headItems,
        }
      },
      // articleImageData() {
      //
      // }
    },
    methods: {
      // articleImageData(v) {
      //   return v
      // }
    },
    mounted() {
      //this.showClientSideComponents = true;
    },
  }
</script>

<style lang="scss" scoped>

  .rubricTemplate {
    margin-top: 50px;

    .contentTemplate {
      .leftSide {

      }
      .rightSide {

      }
    }
  }

</style>