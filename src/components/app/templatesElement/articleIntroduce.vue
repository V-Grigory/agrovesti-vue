<template>
  <div class="articleIntroduce">

    <div class="title">ИЗ МАТЕРИАЛА ВЫ УЗНАЕТЕ:</div>

    <ul>
      <li
        v-for="(item, index) in articleIntroduceData"
        :key="index"
        :class="{lastItem: index === articleIntroduceData.length - 1}"
      >
        {{ item }}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "articleIntroduce",
    props: {
      articleIntroduceData: Array
    }
  }
</script>

<style lang="scss" scoped>

  .articleIntroduce {
    border: 1px solid #2874A6;
    padding: 25px 25px 15px 25px;
    position: relative;
    .title {
      color: #2874A6;
      position: absolute;
      padding: 0 10px;
      top: -8px;
      font-size: 14px;
      font-weight: bold;
      background-color: #ffffff;
    }
    ul {
      li {
        color: #424949;
        font-size: 12px;
        line-height: 1.3;
        margin: 0 0 10px 0;
        list-style: none;
        &::before {
          content: "\2022";
          color: #2874A6;;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          /*margin-left: -1em;*/
        }
      }
      .lastItem::after {
        content: "\2022 \2022 \2022";
        color: #2874A6;;
        font-weight: bold;
        display: inline-block;
        /*width: 1em;*/
      }
    }
  }

</style>