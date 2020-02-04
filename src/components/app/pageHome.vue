<template>
  <div class="pageHome">

    <rubricsTemplate
      v-for="(rubric, index) in $store.state.mainPageData"
      :key="index"
      :rubricData="rubric"
    />

  </div>
</template>

<script>
  import rubricsTemplate from './rubricsTemplate.vue';

  export default {
    name: `pageHome`,
    components: {
      rubricsTemplate
    },
    data() {
      return {};
    },
    mounted() {},
    asyncData ({ store }) {
      return store.dispatch('GET_MAIN_PAGE')
    }
  };
</script>

<style lang="scss">

</style>
