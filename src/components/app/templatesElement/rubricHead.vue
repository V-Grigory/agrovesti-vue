<template>
  <div class="rubricHead">

    <h1 class="iconTemplateHead-1">
      <router-link
        :to="`/rubrics/${rubricHeadData.name_en}`"
      >
        {{ rubricHeadData.name_ru }}
      </router-link>
    </h1>
    <div class="items">
      <div
        v-for="(item, index) in rubricHeadData.children"
        v-if="index <= 2"
        :key="index"
        class="item"
        :class="{itemWithDotInBack: index < 2}"
      >
        <nobr>
          <!--<a href="#">{{ item.name_ru }}</a>-->
          <router-link
            :to="`/rubrics/${item.name_en}`"
          >
            {{ item.name_ru }}
          </router-link>
          <img
            v-if="index < 2"
            src="../../../images/iconTemplateHeadItem.png" />
          <p
            v-else-if="rubricHeadData.children.length > 3"
            @click="showHiddenItems(rubricHeadData.id)"
            class="arrowTitle">
            <span :id="'managerHiddenItems-' + rubricHeadData.id">подробнее</span>
            <img
              :id="'managerArrow-' + rubricHeadData.id"
              src="../../../images/iconTemplateHeadArrowItem.png" />
          </p>
        </nobr>
      </div>
    </div>

    <div class="hiddenItems" :id="'hiddenItems-' + rubricHeadData.id">
      <div
        v-for="(item, index) in rubricHeadData.children"
        v-if="index > 2"
        :key="index"
        class="item"
        :class="{itemWithDotInBack: index > 2}"
      >
        <nobr>
          <router-link
            :to="`/rubrics/${item.name_en}`"
          >
            {{ item.name_ru }}
          </router-link>
          <span
            v-if="index < rubricHeadData.children.length - 1"
            class="delimiter">|</span>
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
      showHiddenItems (element) {
        let elMan = document.getElementById('managerHiddenItems-' + element)
        elMan.innerHTML = elMan.innerHTML === 'подробнее'
          ? 'скрыть' : 'подробнее'

        let elArrow = document.getElementById('managerArrow-' + element)
        elArrow.className = elArrow.className === 'rotatedArrow'
          ? '' : 'rotatedArrow'

        let el = document.getElementById('hiddenItems-' + element)
        el.style.display = el.style.display === 'block' ? 'none' : 'block'
      }
    }
  }
</script>

<style lang="scss" scoped>

  .rubricHead {
    text-transform: uppercase;
    border-bottom: 1px solid #c0c0c0;
    padding-bottom: 10px;
    margin-bottom: 30px;

    h1 {
      font-size: 26px;
      font-weight: bold;
      display: inline-block;
      margin-right: 50px;
      a {
        color: #0f4f96;
      }
    }

    .items, .hiddenItems {
      display: inline-block;
      .item {
        font-size: 15px;
        margin: 10px 10px 0px 0px;
        display: inline-block;
        nobr {
          a {
            color: #000;
            &:hover { color: #2E86C1; }
          }
          img {
            margin: 2px 0 2px 5px;
          }
          .arrowTitle {
            text-transform: none;
            font-size: 13px;
            color: #0f4f96;
            display: inline-block;
            font-weight: bold;
            margin-left: 5px;
            cursor: pointer;
            img {
              margin: 0 0 0 5px;
            }
            .arrow {}
            .rotatedArrow { transform: rotate(180deg); }
          }
        }
      }
    }
    .hiddenItems {
      display: none;
      text-transform: none;
      .item {
        /*font-size: 14px;*/
      }
      .delimiter {
        margin-left: 5px;
      }
    }
  }

</style>
