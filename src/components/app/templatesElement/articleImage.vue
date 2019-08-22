<template>
  <div class="articleImage">

    <img :src="'http://old.agrovesti.ru/images/'+articleImageData" alt="">

  </div>
</template>

<script>
  export default {
    name: "article-image",
    props: {
      articleImageData: String
    }
  }
</script>

<style lang="scss" scoped>

  .articleImage {
    img {
      width: 100%;
    }
  }

</style>
