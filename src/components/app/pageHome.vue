<template>
  <div class="pageHome">

    <rubricsTemplate
      v-for="(rubric, index) in rubrics"
      :key="index"
      :rubricData="rubric"
    />

  </div>
</template>

<script>
  import axios from 'axios';
  import rubricsTemplate from './rubricsTemplate.vue';
  // const rubricsTemplate = () => import('../template/template.vue');

  export default {
    name: `pageHome`,
    components: {
      rubricsTemplate
    },
    data() {
      return {
        rubrics: []
      };
    },
    mounted() {
      axios.get('http://localhost:8000/api').then(res => {
        console.log(res)
        this.rubrics = res.data.data
      })
      .catch(error => {
        console.log(error)
      });
    }
    // asyncData ({ store }) {
    //   return store.dispatch('INIT_PAGE', {whatTypeCardsNeed: 'initJkKv'})
    // }
  };
</script>

<style lang="scss">

</style>
