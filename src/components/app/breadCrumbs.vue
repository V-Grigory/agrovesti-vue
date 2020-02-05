<template>
  <div class="breadCrumbs">

    <router-link to="/">ГЛАВНАЯ</router-link>

    <span v-if="breadCrumbsData.parent" class="delimiter">/</span>
    <router-link
      v-if="breadCrumbsData.parent"
      :to="`/rubrics/${breadCrumbsData.parent.name_en}`"
    >
      {{breadCrumbsData.parent.name_ru.trim()}}
    </router-link>

    <span class="delimiter">/</span>
    <router-link
      v-if="breadCrumbsData.name_ru"
      :to="`/rubrics/${breadCrumbsData.name_en}`"
    >
      {{breadCrumbsData.name_ru.trim()}}
    </router-link>

  </div>
</template>

<script>
	export default {
		name: "bread-crumbs",
		props: {
			breadCrumbsData: { type: Object }
		},
	}
</script>

<style lang="scss" scoped>
  .breadCrumbs {
    /*margin: 40px 0;*/
    margin: 0 0 20px 0;
    font-size: 13px;
    color: #4d545c;
    font-weight: bold;
    a {
      font-size: 12px;
      color: #000;
      text-transform: uppercase;
      font-weight: normal;
      &:hover { color: #c0c0c0; }
    }
    .delimiter {
      margin: 0 4px;
    }
  }
</style>
