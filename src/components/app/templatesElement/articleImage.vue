<template>
  <div class="articleImage">

    <img :src="'http://localhost:8000/images/'+articleImageData" alt="">

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
