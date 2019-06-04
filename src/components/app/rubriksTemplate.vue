<template>
  <div class="rubrikTemplate">

    <headTemplate :headTemplateData="headTemplateData" />

    <div v-if="rubrikData.templateNumber === 2" class="contentTemplate">

      <div class="leftSide">
        <articleImage :articleImageData="rubrikData.articles[0].image" />
        <!--<articleContent />-->
        <!--<articleLearn />-->
      </div>

      <div class="rightSide">

      </div>

    </div>

  </div>
</template>

<script>
  const headTemplate = () => import('./templatesElement/headTemplate.vue');
  const articleImage = () => import('./templatesElement/articleImage.vue');

  export default {
    name: "rubriksTemplate",
    props: {
      rubrikData: { type: Object }
    },
    components: {
      headTemplate,
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
          name: this.rubrikData.name,
          icon: this.rubrikData.icon,
          headItems: this.rubrikData.headItems,
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

  .rubrikTemplate {
    margin-top: 50px;

    .contentTemplate {
      .leftSide {

      }
      .rightSide {

      }
    }
  }

</style>