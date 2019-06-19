<template>
  <div class="rubricHead">

    <h1 class="iconTemplateHead-1">{{ rubricHeadData.name_ru }}</h1>
    <div class="items">
      <div
        v-for="(item, index) in rubricHeadData.children"
        v-if="index <= 2"
        :key="index"
        class="item"
        :class="{itemWithDotInBack: index < 2}"
      >
        <nobr>
          <a href="#">{{ item.name_ru }}</a>
          <img
            v-if="index < 2"
            src="../../../images/iconTemplateHeadItem.png" />
          <img
            v-else
            class="arrow"
            @click="showHiddenItems"
            src="../../../images/iconTemplateHeadArrowItem.png" />
        </nobr>
      </div>
    </div>

    <div class="hiddenItems" id="hiddenItems">
      <div
        v-for="(item, index) in rubricHeadData.children"
        v-if="index > 2"
        :key="index"
        class="item"
        :class="{itemWithDotInBack: index > 2}"
      >
        <nobr>
          <a href="#">{{ item.name_ru }}</a>
          <img src="../../../images/iconTemplateHeadItem.png">
        </nobr>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "rubricHead",
    props: {
      rubricHeadData: { type: Object }
    },
    data() {
      return {};
    },
    methods: {
      showHiddenItems () {
        let el = document.getElementById('hiddenItems')
        el.style.display = el.style.display === 'block' ? 'none' : 'block'
      }
    }
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

    .items, .hiddenItems {
      display: inline-block;
      .item {
        font-size: 15px;
        font-weight: bold;
        margin: 10px 15px 0px 0px;
        display: inline-block;
        nobr {
          a {
            color: #000;
            &:hover { color: #4d545c; }
          }
          img {
            margin: 2px 0 2px 9px;
          }
          .arrow {
            cursor: pointer;
          }
        }
      }
    }
    .hiddenItems { display: none; }
  }

</style>
