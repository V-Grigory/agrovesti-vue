<template>
	<div class="pagination">

		<span @click="getPage(currentPage - 1)">
			< ПРЕДЫДУЩАЯ
		</span>

		<span v-for="item in pagesCount"
			:class="['pageNumber', {'currentPageNumber':item === currentPage}]"
			@click="getPage(item)"
		>
			{{item}}
		</span>

		<span @click="getPage(currentPage + 1)">
			СЛЕДУЮЩАЯ >
		</span>

	</div>
</template>

<script>
  export default {
    name: "pagination",
    props: {
      pagesCount: { type: Number }
    },
	  data() {
      return {
        currentPage: 1
      }
	  },
	  methods: {
		  getPage(pageNumber) {
		    if(pageNumber > 0 && pageNumber <= this.pagesCount) {
          this.$emit('getPage', pageNumber)
          this.currentPage = pageNumber
		    }
		  }
	  }
  }
</script>

<style lang="scss" scoped>
	.pagination {
		margin: 30px 0;
		padding: 20px 0;
		border-top: 1px solid #c0c0c0;
		border-bottom: 1px solid #c0c0c0;
		font-size: 13px;
		color: #0f4f96;
		text-align: center;
		span {
			cursor: pointer;
			&:hover { color: grey }
		}
		.pageNumber {
			margin: 0 1px;
			padding: 4px 8px;
			display: inline-block;
			border-radius: 11px;
			&:hover {
				color: #ffffff;
				background-color: #0f4f96;
			}
		}
		.currentPageNumber {
			color: #ffffff;
			background-color: #0f4f96;
		}
	}
</style>
