<template>
	<div id="appSlider">

    <img
        v-show="currentSlider === 'slider_1'"
        src="images/slider/slider_1.png" class="imageItem"
    />
    <img
        v-show="currentSlider === 'slider_2'"
        src="images/slider/slider_2.png" class="imageItem"
    />
    <img
        v-show="currentSlider === 'slider_3'"
        src="images/slider/slider_3.png" class="imageItem"
    />

    <div @click="changeSlider('forward')" class="arrow rightArrow">
      <img src="images/arrowRight.png" />
    </div>
    <div @click="changeSlider('back')" class="arrow leftArrow">
      <img src="images/arrowLeft.png" />
    </div>

    <div class="contentSlider">
      <div class="contentWrapper">
        <div
            v-html="contentSlider[currentSlider].title"
            class="title"
        ></div>
        <div
            v-html="contentSlider[currentSlider].description"
            class="description"
        ></div>
        <div class="button"></div>
      </div>
    </div>

	</div>
</template>

<script>
  export default {
    name: 'appSlider',
    data() {
      return {
        currentSlider: 'slider_1',
        currSlider: 'slider_1',
        contentSlider: {
          slider_1: {
            title: 'БАЗА<br />КЕЙСОВ',
            description: 'Платформа<br />инновационного опыта'
          },
          slider_2: {
            title: 'НОВЕЙШИЕ<br />РЕШЕНИЯ',
            description: 'Обмен передовым<br />аграрным опытом'
          },
          slider_3: {
            title: 'РОСТ<br />КОМПЕТЕНЦИЙ',
            description: 'Объединение<br />опыта на всей территории России'
          }
        }
      }
    },
	  mounted() {},
    computed: {},
	  methods: {
      changeSlider(direction = 'forward') {
        let nextNameSlider = this.currSlider.slice(0, -1)
        let nextNumberSlider = +this.currSlider.slice(-1) + 1
        if(direction === 'back') {
          nextNumberSlider = +this.currSlider.slice(-1) - 1
        }
        let nextSlider = nextNameSlider + nextNumberSlider

        this.currSlider = nextSlider

        if(nextSlider === 'slider_0' || nextSlider === 'slider_4') {
          if(nextSlider === 'slider_0') this.currSlider = 'slider_3'
          if(nextSlider === 'slider_4') this.currSlider = 'slider_1'
        }
        this.currentSlider = this.currSlider
        // console.log(this.currSlider)
      }
    }
  }
</script>

<style lang="scss" scoped>
	#appSlider {
    position: relative;
    //background: url("/images/slider_1.png") no-repeat center;
    height: 650px;
    background-size: cover;
    background-position: bottom right;
    //z-index: -1;

    .imageItem {
      //position: absolute;
      width: 100%;
      height: 100%;
      //z-index: -1;
    }

    .arrow {
      position: absolute;
      top: 50%;
      margin: -50px 0 0 0;
      cursor: pointer;
      z-index: 1;
    }
    .rightArrow { right: 0; }
    .lefArrow { left: 0; }

    .contentSlider {
      position: absolute;
      top: 200px;
      width: 100%;
      color: #ffffff;
      font-weight: bold;
      line-height: 1.2;

      .title {
        font-size: 60px;
        margin: 0 0 0 70px;
      }
      .description {
        font-size: 32px;
        margin: 35px 0 0 70px;
        padding: 0 0 0 20px;
        border-left: 4px solid #ffffff;
      }
    }
  }
</style>
