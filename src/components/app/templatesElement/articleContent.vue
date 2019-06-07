<template>
  <div class="articleContent">

		<h2 class="title">{{ articleContentData.title }}</h2>

		<div class="description">{{ articleContentData.description }}</div>

	</div>
</template>

<script>
  export default {
    name: "articleContent",
    props: {
      articleContentData: Object
    }
  }
</script>

<style lang="scss" scoped>

	.articleContent {
		.title {
			font-size: 16px;
			text-transform: uppercase;
			font-weight: bold;
			line-height: 1.2;
		}
		.description {
			margin: 15px 0 0 0;
			color: #424949;
			font-size: 14px;
			line-height: 1.4;
		}
	}

</style>
