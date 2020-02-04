<template>
  <div class="pageArticle" ref="art">

    <breadCrumbs
      v-if="article.rubriks"
      :breadCrumbsData="{
	      name_ru: article.rubriks[0].name_ru,
	      name_en: article.rubriks[0].name_en,
	      parent: article.rubriks[0].parent}"
    />

    <div class="datePublication">
      Дата публикации: {{ getNormDate(article.created_at) }}
    </div>

    <div
      v-html="article.tilda_content ? article.tilda_content : article.article"
      :class="[{'closedArticle': (article.need_pay == 1
        && !articlesAccessToken())}]"
    >
    </div>
    <div v-if="article.need_pay == 1 && !articlesAccessToken()"
      class="bottomClosedArticle"
    ></div>

    <div v-if="article.need_pay == 1 && !articlesAccessToken()"
      class="authorization"
    >

      <!--<img src="../../images/headAuth.png" alt="" class="headAuth">-->
      <p class="textOffer">
        Ваша поддержка в качестве подписчика позволяет публиковать
        объективные результаты опыта внедрения новинок и инноваций
      </p>

      <p class="textOffer">&nbsp;</p>
      <p class="textOffer">Для продолжения чтения введите ваш код подписчика</p>
      <p class="textOffer">
        (номер вашего мобильного телефона или четырехзначный код доступа)
      </p>
      <input
        v-model="accessCode"
        placeholder="Ваш код подписчика" class="textInput" type="text"
      />
      <p v-if="notificate.auth.failTextNotificate" class="failTextNotificate">
        {{notificate.auth.failTextNotificate}}</p>
      <button @click="getAuthToken()">ВОЙТИ</button>

      <p
        @click="openRegisterBlock = !openRegisterBlock"
        class="question"
      >Еще не подписчик?</p>

      <div v-show="openRegisterBlock">
        <p class="textOffer">&nbsp;</p>
        <p class="textOffer">
          Введите ваш E-mail, на который мы отправим одноразовый
          код доступа на сайт
        </p>
        <input
          v-model="email"
          placeholder="Ваш E-mail" class="textInput" type="text"
        />
        <p
          v-if="notificate.reg.successTextNotificate
            && !notificate.reg.failTextNotificate"
          class="successTextNotificate"
        >{{notificate.reg.successTextNotificate}}</p>
        <p
          v-if="notificate.reg.failTextNotificate"
          class="failTextNotificate"
        >{{notificate.reg.failTextNotificate}}</p>
        <button @click="sendEmailForRegistration()">ОТПРАВИТЬ</button>

      </div>


      <p class="textOffer">&nbsp;</p>
      <p class="textOffer" style="text-align: left;">
        Благодаря поддержке руководителей, специалистов АПК в качестве
        подписчиков редакция имеет возможность публиковать материалы,
        отвечающие на важные вопросы:
      </p>
      <p class="textOfferDetail">
        какие сегодня есть лучшие практики внедрения новинок и инноваций
      </p>
      <p class="textOfferDetail">
        как интегрировать новые технические решения в действующее производство
      </p>
      <p class="textOffer">&nbsp;</p>

      <p class="textOffer" style="text-align: left;">
        Для оформления подписки позвоните или напишите нам:
      </p>
      <p class="textOffer" style="text-align: left;">
        <a :href="'tel:89094639900'" class="textOfferContact">
          8-909-463-99-00 (Елена)
        </a>
        <a href="mailto: agropodpiska@mail.ru" class="textOfferContact">
          agropodpiska@mail.ru
        </a>
      </p>
      <p class="textOffer" style="text-align: left;">
        <a :href="'tel:89054752525'" class="textOfferContact">
          8-905-475-25-25 (Мария)
        </a>
        <a href="mailto: agro211019@mail.ru" class="textOfferContact">
          agro211019@mail.ru
        </a>
      </p>

    </div>

  </div>
</template>

<script>
  import { urlAPI } from '../../api/agroApi'
  import axios from 'axios';
	const breadCrumbs = () => import('./breadCrumbs.vue');

  export default {
    name: `pageArticle`,
    components: {
			breadCrumbs
    },
    data() {
      return {
        article: {},
        accessCode: '',
        openRegisterBlock: false,
        email: '',
        notificate: {
          auth: {
            failTextNotificate: '',
            successTextNotificate: ''
          },
          reg: {
            failTextNotificate: '',
            successTextNotificate: ''
          }
        }
      };
    },
    mounted() {
      this.article = this.$store.state.articlePageData
    },
    methods: {
      initData () {
        this.notificate.reg.successTextNotificate = '';
        this.notificate.reg.failTextNotificate = '';
      },
      getAuthToken () {
        let params = { params: {accessCode: this.accessCode} };
        axios.get(`http://${urlAPI}/api/getAuthToken/`, params).then(res => {
          sessionStorage.setItem("articlesAccessToken", res.data);
          location.reload()
        })
        .catch(error => {
          console.log(error);
	        this.notificate.auth.failTextNotificate =
            'Неверный код доступа или доступ заблокированн, ' +
            'для восстановления свяжитесь с отделом подписки: ' +
            '8(905)-475-2525, agro_podpiska@mail.ru'
        });
      },
      articlesAccessToken () {
        return sessionStorage.getItem('articlesAccessToken')
      },
      sendEmailForRegistration () {
        this.initData();
        if(!this.validateEmailForRegistration()) {
          return
        }
        let params = { params: {email: this.email} };
        let url = `http://${urlAPI}/api/clientRegistration/`;
        axios.get(url, params).then((res) => {
          // console.log(res)
          if(res.data === 'already_registered') {
            this.notificate.reg.successTextNotificate =
              'На данный e-mail уже был предоставлен одноразовый код ' +
              'доступа, для постоянного доступа обратитесь в отдел ' +
              'подписки: тел.: 8(905)-475-2525, e-mail: agro_podpiska@mail.ru'
          }
          if(res.data === 'success_registered') {
            this.notificate.reg.successTextNotificate =
              'Вы успешно зарегистрированы! ' +
              'Код доступа отправлен на указанный вами Email.';
          }
        })
        .catch(error => {
          console.log(error);
          this.notificate.reg.failTextNotificate =
            'Пожалуйста, нажмите кнопку Отправить еще раз'
        });
      },
      validateEmailForRegistration () {
        if(!this.email) {
          this.notificate.reg.failTextNotificate = 'Укажите Email'
        }
        if(this.email && this.email.indexOf('@') === -1) {
          this.notificate.reg.failTextNotificate
            = 'Вы указали некорректный Email'
        }
        return this.email && this.email.indexOf('@') > -1
      },
      getNormDate (date) {
        // let d = new Date('2018-07-06 07:29:34')
        let d = new Date(date)
        let year = d.getFullYear()
        let month = d.getMonth() + 1
        let day  = d.getDate()
        let textMonth = {
          1: 'января',
          2: 'февраля',
          3: 'марта',
          4: 'апреля',
          5: 'мая',
          6: 'июня',
          7: 'июля',
          8: 'августа',
          9: 'сентября',
          10: 'октября',
          11: 'ноября',
          12: 'декабря',
        }
        return `${day} ${textMonth[month]} ${year}`
      }
    },
    asyncData ({ store, route: { params: { id }}}) {
      return store.dispatch('GET_ARTICLE_PAGE', id)
    }
  };
</script>

<style lang="scss">
  .pageArticle {
    margin-top: 50px;

    .datePublication {
      font-size: 12px;
      color: #4d545c;
      margin: 0 0 25px 0;
    }

    .closedArticle {
      height: 2000px;
      overflow: hidden;
    }
    .bottomClosedArticle {
      height: 100px;
      margin-top: -100px;
      position: relative;
      background: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1));
    }

    .authorization {
      max-width: 800px;
      margin: 100px auto;
      text-align: center;
      img.headAuth {
        width: 100%;
      }
      p.textOffer {
        font-family: sans-serif;
        font-size: 19px;
        color: #515A5A;
        margin: 5px 0;
        line-height: 1.3;
        .textOfferContact {
          color: #0f4f96;
          font-size: 16px;
          margin: 0 0 0 15px;
        }
      }
      p.textOfferDetail {
        line-height: 1.3;
        margin: 10px 0 10px 25px;
        text-align: left;
        &::before {
          content: "\2022";
          color: #2874A6;;
          font-weight: bold;
          display: inline-block;
          width: 1em;
          /*margin-left: -1em;*/
        }
      }
      input.textInput {
        font-family: sans-serif;
        padding: 10px;
        border: none;
        border-bottom: 2px solid #1B4F72;
        width: 350px;
        margin-top: 20px;
      }
	    .failTextNotificate {
		    font-size: 13px;
		    color: #CB4335;
		    margin-top: 9px;
        line-height: 1.5;
	    }
      .successTextNotificate {
        font-size: 13px;
        color: #239B56;
        margin-top: 9px;
        line-height: 1.5;
      }
      button {
        display: block;
        margin: 30px auto;
        width: 200px;
        padding: 13px 0;
        color: #fff;
        background: #00ace5;
        border: none;
        border-radius: 22px;
        cursor: pointer;
      }
      .question {
        color: #0f4f96;
        border-bottom: 2px dashed #0f4f96;
        padding-bottom: 3px;
        display: inline-block;
        cursor: pointer;
        font-size: 18px;
        &:hover {border-bottom: 2px dashed #ffffff;}
      }
    }
  }
</style>
