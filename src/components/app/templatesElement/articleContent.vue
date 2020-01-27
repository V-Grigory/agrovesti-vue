<template>
  <div class="articleContent">

	  <div v-if="articleContentData.tag" class="tag">
		  {{ articleContentData.tag }}
	  </div>

		<h2 class="title">
			<!--we do not use router-link here, because pictures will not be loaded-->
			<a
			  :href="`/articles/${articleContentData.name_en}`"
			>
				{{ articleContentData.name_ru }}
			</a>
		</h2>

		<div class="description">
			<span
				v-if="articleContentData.subtitle"
				class="subtitle"
			>
				{{ articleContentData.subtitle }}:
			</span>
			{{ articleContentData.description }}
		</div>

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
		.tag {
			display: inline-block;
			margin: 0 0 10px 0;
			background-color: #00abe9;
			color: #fff;
			padding: 3px 6px;
			text-transform: uppercase;
			font-size: 15px;
		}
		.title {
			font-size: 16px;
			text-transform: uppercase;
			font-weight: bold;
			line-height: 1.2;
			a {
				color: black;
				&:hover { color: #2E86C1; }
			}
		}
		.description {
			.subtitle {
				color: #2874a6;
				text-transform: uppercase;
				font-weight: bold;
			}
			margin: 15px 0 0 0;
			/*color: #424949;*/
			font-size: 16px;
			line-height: 1.4;
		}
	}

</style>
