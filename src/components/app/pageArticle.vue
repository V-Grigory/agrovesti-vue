<template>
  <div class="pageArticle" ref="art">

    <breadCrumbs
      v-if="article.rubriks"
      :breadCrumbsData="{
	      name_ru: article.rubriks[0].name_ru,
	      name_en: article.rubriks[0].name_en,
	      parent: article.rubriks[0].parent}"
    />

    <!--
    <div
      v-if="article.tilda_content"
      v-html="article.tilda_content"
    ></div>
    <div
      v-else
      v-html="article.article"
    ></div>
    -->

    <div v-if="article.need_pay == 1 && !articlesAccessToken()">

      <h1>{{article.name_ru}}</h1>

      <div class="description">{{article.description}}</div>

      <articleIntroduce
        v-if="article.introduce.length > 0"
        :articleIntroduceData="JSON.parse(article.introduce)"
      />

      <div class="authorization">

        <img src="../../images/headAuth.png" alt="" class="headAuth">

        <p class="textOffer">&nbsp;</p>
        <p class="textOffer">Для продолжения чтения введите ваш код подписчика</p>
        <p class="textOffer">
          (номер вашего мобильного телефона или четырехзначный код доступа)
        </p>
        <input
          v-model="accessCode"
          placeholder="Ваш код подписчика" class="textInput" type="text"
        />
	      <p v-if="errAuthText" class="errAuthText">{{errAuthText}}</p>
        <button @click="getAuthToken()">ВОЙТИ</button>

        <p
          @click="openRegisterBlock = !openRegisterBlock"
          class="question"
        >Еще не подписчик?</p>

        <div v-show="openRegisterBlock">
          <p class="textOffer">
            Введите ваш E-mail, на который мы отправим одноразовый
            код доступа на сайт
          </p>
          <input
            v-model="email"
            placeholder="Ваш E-mail" class="textInput" type="text"
          />
          <button @click="sendEmailForRegistration()">ОТПРАВИТЬ</button>

        </div>

      </div>

    </div>
    <div
      v-else
      v-html="article.tilda_content ? article.tilda_content : article.article"
    ></div>

  </div>
</template>

<script>
  const urlAPI = process.env.NODE_ENV === 'production'
    ? 'agrovesti.ru' : 'localhost:8000';
  import axios from 'axios';
	const breadCrumbs = () => import('./breadCrumbs.vue');
  const articleIntroduce =
    () => import('./templatesElement/articleIntroduce.vue');

  export default {
    name: `pageArticle`,
    components: {
			breadCrumbs,
      articleIntroduce
    },
    data() {
      return {
        article: {},
        accessCode: '',
        openRegisterBlock: false,
        email: '',
	      errAuthText: ''
      };
    },
    mounted() {
      this.getArticle()
    },
    methods: {
      getArticle () {
        axios.get(
          `http://${urlAPI}/api/articles/${this.$route.params.id}`
        ).then(res => {
          this.article = res.data
          // console.log(this.article)
        })
        .catch(error => {
          console.log(error)
        });
      },
      getAuthToken () {
        let params = { params: {accessCode: this.accessCode} };
        axios.get(`http://${urlAPI}/api/getAuthToken/`, params).then(res => {
          sessionStorage.setItem("articlesAccessToken", res.data);
          location.reload()
        })
        .catch(error => {
          console.log(error)
	        this.errAuthText = 'Неверный код доступа или доступ заблокирован'
        });
      },
      articlesAccessToken () {
        return sessionStorage.getItem('articlesAccessToken')
      },
      sendEmailForRegistration () {

      }
    }
  };
</script>

<style lang="scss">
  .pageArticle {
    h1 {
      text-align: center;
      font-size: 23px;
      color: #515A5A;
      margin-bottom: 20px;
    }
    .description {
      font-family: sans-serif;
      font-size: 18px;
      color: #424949;
      margin-bottom: 35px;
      line-height: 1.4;
    }

    .authorization {
      max-width: 800px;
      margin: 50px auto;
      text-align: center;
      img.headAuth {
        width: 100%;
      }
      p.textOffer {
        font-family: sans-serif;
        font-size: 19px;
        color: #515A5A;
        margin: 10px 0;
      }
      input.textInput {
        font-family: sans-serif;
        color: #909497;
        padding: 10px;
        border: none;
        border-bottom: 2px solid #1B4F72;
        width: 350px;
        margin-top: 20px;
      }
	    .errAuthText {
		    font-size: 13px;
		    color: #CB4335;
		    margin-top: 9px;
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
