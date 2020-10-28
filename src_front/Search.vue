<template>
	<div id="appSearch">

		<div class="title">РЕЗУЛЬТАТЫ ПОИСКА</div>

		<div class="searchQuery">
			<input
				v-model="searchQuery"
				@keyup.enter="search(1)"
				placeholder="Введите фразу для поиска"
				type="text"
			/>
			<button @click="search(1)">Найти</button>
		</div>

		<div v-if="completedSearchQuery" class="noteSearchResults">
			{{ noteSearchResults }}
		</div>

		<div class="searchResults">

			<div v-for="(article, index) in searchResults" class="wrapItemSearchResult">
				<a :href="`/articles/${article.name_en}`" class="itemSearchResult">
					<img
						:src="`http://old.agrovesti.ru/images/${article.image}`"
						:alt="article.name_ru"
					>
					<div
						v-html="selectedSearchQuery(article.name_ru)"
						class="title"
					></div>
					<div
						v-if="getNormDate(article.created_at)"
						class="dateCreated"
					>
						{{ getNormDate(article.created_at) }}
					</div>
					<div
						v-html="selectedSearchQuery(article.description)"
						class="description"
					></div>
				</a>
			</div>

		</div>

		<div v-if="pagesCount > 1" class="pagination">

			<span
				v-if="currentPage - 1 > 0"
				@click="search(currentPage - 1)"
			>
				< ПРЕДЫДУЩАЯ
			</span>

			<span
				v-for="item in pagesCount"
				:class="['pageNumber', {'currentPageNumber':item === currentPage}]"
				@click="search(item)"
			>
				{{item}}
			</span>

			<span
				v-if="currentPage + 1 <= pagesCount"
				@click="search(currentPage + 1)"
			>
				СЛЕДУЮЩАЯ >
			</span>

		</div>

	</div>
</template>

<script>
  import { urlAPI } from '../api/agroApi'
  import axios from 'axios'
  import utils from '../utils'

  export default {
    name: 'searchApp',
    data() {
      return {
        searchQuery: '',
        completedSearchQuery: '',
        searchResults: [],
        totalCountSearchResults: 0,
        articlesOnPage: 8,
        pagesCount: 0,
        currentPage: 1
      }
    },
	  mounted() {
      this.search(1)
	  },
	  computed: {
      noteSearchResults () {
        // 1-9 результат из 4352 по запросу «COVID»
        let total = this.totalCountSearchResults;
	      let start = (this.currentPage * this.articlesOnPage)
			      - this.articlesOnPage + 1;
        let end = this.currentPage * this.articlesOnPage;
        if(start > total) start = total;
        if(end > total) end = total;
        return `${start}-${end} результат из ${total} по запросу
        «${this.completedSearchQuery}»`;
      }
	  },
	  methods: {
      search(pageNumber) {

        const startSearch = () => {
          axios.get(`http://${urlAPI}/api/search/`, {
            params: { text: this.searchQuery, p: this.currentPage }
          })
          .then(res => {
            this.totalCountSearchResults = res.data.totalCountSearchResults;
            this.searchResults = res.data.searchResults;
            this.pagesCount = Math.ceil(
              this.totalCountSearchResults / this.articlesOnPage
            );
            this.completedSearchQuery = this.searchQuery;
          })
          .catch(error => {
            console.log(error)
          });
          window.scrollTo(0,0)
        };

        const putQueryInRoute = () => {
          this.$router.push({
            path: this.$route.path,
            query: { sQuery: this.searchQuery, p: this.currentPage }
          })
        };

        const searchFromInputSearchQuery = () => {
          if(this.searchQuery === this.completedSearchQuery) {
            if(pageNumber === this.currentPage) return;
            this.currentPage = pageNumber;
          } else {
            this.currentPage = 1;
          }
          startSearch();
          putQueryInRoute();
        };

        const searchFromRoute = () => {
          if( Object.keys(this.$route.query).length ) {
            this.searchQuery = this.$route.query.sQuery;
            this.currentPage = +this.$route.query.p;
            startSearch();
          }
        };

        if(this.searchQuery) {
          searchFromInputSearchQuery()
        } else {
          searchFromRoute()
        }
      },
      getNormDate(date) {
        return utils.getNormDate(date)
      },
      selectedSearchQuery(searchResult) {
        if(!searchResult) return;
			  return searchResult.replace(
		      new RegExp(this.completedSearchQuery, "gi"),
          '<span style="background-color: #ffe07f;">$&</span>'
			  )
		  }
	  }
  }
</script>

<style lang="scss" scoped>
	#appSearch {
		margin-top: 50px;

		.title {
			color: #0f4f96;
			font-weight: bold;
			font-size: 18px;
		}

		.searchQuery {
			margin: 15px 0;
			display: flex;
			input {
				width: 100%;
				padding: 7px 12px;
				/*color: grey;*/
				font-size: 16px;
			}
			button {
				background-color: #0f9fff;
				color: #fff;
				border: none;
				padding: 0 25px;
				font-size: 16px;
				cursor: pointer;
			}
		}

		.noteSearchResults {
			padding: 0 0 15px 0;
			border-bottom: 1px solid #c0c0c0;
			margin: 0 0 30px 0;
		}

		.searchResults {
			margin: 0 0 40px 0;
			font-size: 0;
			.wrapItemSearchResult {
				width: 25%;
				display: inline-block;
				vertical-align: top;
				.itemSearchResult {
					color: #000000;
					margin: 0 4px 40px 4px;
					padding: 5px;
					display: block;
					/*box-shadow: 0 0 10px rgba(0,0,0,0.3);*/
					&:hover {
						box-shadow: 0 0 10px rgba(0,0,0,0.3);
					}
					img {
						width: 100%;
					}
					.title {
						color: #000000;
						text-transform: uppercase;
						margin: 15px 0;
						font-size: 16px;
						line-height: 1.2;
						font-weight: bold;
					}
					.dateCreated {
						font-size: 12px;
						&::before {
							font-family: FontAwesome;
							content: "\f017";
							margin: 0 5px 0 0;
						}
					}
					.description {
						line-height: 1.3;
						margin: 7px 0 0 0;
						font-size: 16px;
					}
				}
			}
			@media (max-width: 1024px) {
				.wrapItemSearchResult { width: 50%; }
			}
			@media (max-width: 620px) {
				.wrapItemSearchResult { width: 100%; }
			}
		}

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

	}
</style>
