<template>

  <div class="rubricHead">
    <h1 class="iconTemplateHead-1">{{ headTemplateData.name }}</h1>
    <div class="items">
      <a
        v-for="(item, index) in headTemplateData.headItems"
        :key="index"
        href="#"
        class="item"
        :class="{active: index === 1, withArrow: index === 2}"
      >
        <nobr>{{ item }}</nobr>
      </a>

      <!--<a href="#" class="item"><nobr>Растениеводство</nobr></a>-->
      <!--<a href="#" class="item active"><nobr>Животноводство</nobr></a>-->
      <!--<a href="#" class="item withArrow"><nobr>Тульская область</nobr></a>-->
    </div>
  </div>

</template>

<script>
  export default {
    name: "rubricHead",
    props: {
      headTemplateData: { type: Object }
    },
    data() {
      return {
        //showF: false,
        //showClientSideComponents: false,
      };
    },
    mounted() {
      //this.showClientSideComponents = true;
    },
  }
</script>

<style lang="scss" scoped>

  .rubricHead {
    text-transform: uppercase;
    border-bottom: 2px solid #0f4f96;
    padding-bottom: 10px;
    margin-bottom: 30px;
    h1 {
      color: #0f4f96;
      font-size: 30px;
      font-weight: bold;
      display: inline-block;
      margin-right: 50px;
      padding: 4px 0px 4px 50px;
    }
    h1.iconTemplateHead-1 {
      background: url("../../../images/iconTemplateHead-1.png")
      no-repeat left center;
    }
    .items {
      display: inline-block;
      .item {
        font-size: 15px;
        color: #000;
        font-weight: bold;
        padding-right: 16px;
        margin: 10px 15px 0px 0px;
        display: inline-block;
        background: url("../../../images/iconTemplateHeadItem.png")
        no-repeat right center;
        &:hover { color: #4d545c; }
      }
      .withArrow {
        background: url("../../../images/iconTemplateHeadArrowItem.png")
        no-repeat right center;
      }
      .active { color: #4d545c; }
    }
  }

</style>