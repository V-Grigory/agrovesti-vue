<template>
  <div class="articleContent">

		<h2 class="title">
			<a href="#">{{ articleContentData.name_ru }}</a>
		</h2>

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
			a {
				color: black;
				&:hover { color: #4d545c; }
			}
		}
		.description {
			margin: 15px 0 0 0;
			color: #424949;
			font-size: 14px;
			line-height: 1.4;
		}
	}

</style>
