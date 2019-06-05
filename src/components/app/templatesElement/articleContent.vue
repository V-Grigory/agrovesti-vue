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
		padding: 25px 0;
		.title {
			font-size: 16px;
			text-transform: uppercase;
			font-weight: bold;
		}
		.description {
			color: #424949;
			font-size: 14px;
			line-height: 1.4;
			margin: 15px 0 0 0;
		}
	}

</style>
