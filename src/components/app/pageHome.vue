<template>
  <div class="pageHome">

    <rubricsTemplate
      v-for="(rubric, index) in rubricsMock"
      :key="index"
      :rubricData="rubric"
    />

  </div>
</template>

<script>
  import rubricsTemplate from './rubricsTemplate.vue';
  // const rubricsTemplate = () => import('../template/template.vue');

  export default {
    name: `pageHome`,
    components: {
      rubricsTemplate
    },
    data() {
      return {
        rubrics: [
          {
            templateNumber: 2,
            name: 'Опыт',
            icon: '../../../images/iconTemplateHead-1.png',
            headItems: ['Растениеводство', 'Животноводство', 'Тульская область'],
            articles: [
              {
                image: 'public/static/articleImg1.png',
                title: '1-ООО «КХ Партнер». Испытание экспериментальной техники и выращивание кондитерского подсолнечника',
                description: 'ООО «КХ Партнер» - крупное хозяйство из Алтайского края, имеет в своем распоряжении 27500 га пашни. Его бюджетообразующей культурой является кондитерский подсолнечник, который дает около 50% от реализации продукции, занимая при этом 16–20% пашни. У предприятия сложились давние дружеские отношения с компанией AMAZONE, поэтому на его полях испытываются предсерийные, экспериментальные или демонстрационные экземпляры немецкой техники',
                introduce: [
                  'Преимущества и сложности применения технологии Strip-Till. — Как с помощью дифференцированного опрыскивания сэкономить на гербицидах сплошного действия.',
                  'Как получить недорогое сложное удобрение с комплексом микроэлементов, используя дешевый сульфат аммония и добавки.',
                  'Как увеличить размер семечки подсолнечника и за счет этого поднять его рыночную стоимость.'
                ]
              },
              {
                title: '2-ООО «КХ Партнер». Испытание экспериментальной техники и выращивание кондитерского подсолнечника',
                description: 'ООО «КХ Партнер» - крупное хозяйство из Алтайского края, имеет в своем распоряжении 27500 га пашни.',
              },
              {
                title: 'ПОЛЕВОЙ ПРАКТИКУМ: испытания трактора КИРОВЕЦ К-424',
                description: 'В прошлом году в ООО «Степь» (Краснодарский край) для наработки моточасов поступил совершенно новый, еще не вышедший в серийное производство трактор Петербургского тракторного завода под рабочим названием К 4. Предприятию была поставлена задача: за два месяца',
              },
              {
                title: 'ООО «Альянс»: передовые мировые технологии в производстве овощей',
                description: 'ИВАНОВСКАЯ ОБЛАСТЬ. ООО «Альянс» является крупнейшим производителем овощей и картофеля в Ивановской области. На 800 га земли выращиваются картофель, капуста',
              },
            ]
          }
        ]
      };
    },
    computed: {
      rubricsMock() {
        let res = []
        var numImg
        for(var i = 1; i <= 3; i++) {

          var articles = []
          for(var j = 1; j <= 4; j++) {
            if(i == 1 && j == 1) numImg = 2; else numImg = 1;
            if(i == 3) numImg = 2;
            // var numImg = j === 2 ? j : 1
            articles.push({
              image: `public/static/articleImg${numImg}.png`,
              title: this.generateWords(7, 15),
              description: this.generateWords(30, 60),
              introduce: [
                this.generateWords(5, 30),
                this.generateWords(5, 30),
                this.generateWords(5, 30),
              ]
            })
          }
          res.push({
            templateNumber: i,
            name: 'Опыт',
            icon: `../../../images/iconTemplateHead-1.png`,
            headItems: ['Растениеводство', 'Животноводство',
              'Тульская область'],
            articles: articles
          })
        }
        return res
      }
    },
    mounted() {
      console.log(this.rubricsMock)
      // this.generateWords(24, 100)
    },
    methods: {
      generateWords (min, max) {
        let done = false
        let countTry = 0
        while(!done) {
          countTry++
          if(countTry === 200) done = true
          var totalOutWords = Math.floor(Math.random() * 100 + 1)
          if(totalOutWords >= min && totalOutWords <= max) done = true
        }

        let words = [
          'Как ',
          'получить ',
          'недорогое ',
          'сложное ',
          'удобрение ',
          'с ',
          'комплексом ',
          'микроэлементов ',
          'используя ',
          'дешевый ',
          'ЭТОГО БЫТЬ НЕ ДОЛЖНО '
        ]
        let res = ''
        for(var i = 0; i <= totalOutWords; i++) {
          var wordIndex = Math.floor(Math.random() * 10)
          res += words[wordIndex]
        }
        //console.log('Words - ' + res)
        return res
      }
    }
    // asyncData ({ store }) {
    //   return store.dispatch('INIT_PAGE', {whatTypeCardsNeed: 'initJkKv'})
    // }
  };
</script>

<style lang="scss">

</style>
