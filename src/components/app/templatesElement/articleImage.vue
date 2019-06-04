<template>
  <div class="articleImage">

    <img :src="articleImageData" alt="">
    
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

  }

</style>