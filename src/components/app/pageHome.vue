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
  const urlAPI = process.env.NODE_ENV === 'production'
    ? 'old.agrovesti.ru' : 'localhost:8000';
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
      axios.get(`http://${urlAPI}/api`).then(res => {
        // console.log(res)
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
