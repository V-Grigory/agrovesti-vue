<template>
  <div id="app">

    <div class="header">

      <div style="background-color: #0f4f96;">
        <div class="topMenu menuWrapper contentWrappper">
          <div class="leftSide">
            <span class="title">Консалтинг  компаний:</span>
            <a
              href="/rubrics/konsalting-kompaniy-dlya-polya2307190556"
              class="menuItem"
            >решения для поля
            </a>
            <a
              href="/rubrics/konsalting-kompaniy-dlya-fermy2307190559"
              class="menuItem"
            >решения для фермы
            </a>
          </div>
          <div class="rightSide">
            <!--<a href="#" class="menuItem logIn">ВОЙТИ</a>-->
            <a
              @click.prevent="search.showBlock = !search.showBlock"
              class="menuItem search" href="#"
            >ПОИСК</a>
            <a
              href="/articles/stranitsa-oformleniya-podpiski"
              class="menuItem describe"
            >ПОДПИСАТЬСЯ</a>
          </div>
        </div>
      </div>

      <div v-if="search.showBlock" class="contentWrappper">
        <div class="searchBlockWrapper">
          <div class="searchBlock">
            <div class="searchBlockContent">

              <input type="text" placeholder="Текст" v-model="search.text" />
              <div @click="goSearch()"
                class="btnSearch">ПОИСК
              </div>
              <div @click="search.showBlock = !search.showBlock"
                class="btnCloseSearch">X
              </div>

              <div v-if="search.result.length > 0" class="searchResult">
                <p class="title">Результаты поиска:</p>

                <a
                  v-for="article in search.result"
                  :href="`/articles/${article.name_en}`"
                  class="links"
                >
                  {{ article.name_ru }}
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="mainMenu menuWrapper contentWrappper">
        <div class="leftSide">
          <a href="/" class="logo">
            <img src="../images/logo.png" alt="agrovesti">
          </a>
        </div>
        <div
          v-if="menu.rubriks && menu.rubriks.main_menu" class="rightSide"
        >
          <a
            v-for="(item, i) in menu.rubriks.main_menu"
            :key="i"
            :href="`/rubrics/${item.name_en}`"
            class="menuItem"
          >
            {{ item.name_ru }}
          </a>
        </div>
      </div>

      <div class="headerBorderBottom"></div>
    </div>


    <div class="contentWrappper">
      <router-view></router-view>
    </div>


    <div class="footer">
      <div class="contentWrappper">

        <div class="blocks">
          <div class="block block-1">
            <p class="title">Размещение рекламы</p>
            <div class="content">
              <div class="items"
                v-if="menu.articles && menu.articles.footer_menu"
              >
                <p
                  v-for="(item, i) in menu.articles.footer_menu.menu_1"
                  :key="i" class="item"
                >
                  <a :href="`/articles/${item.name_en}`">
                    {{ item.name_ru }}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="block block-2">
            <p class="title">Рубрики</p>
            <div class="content">
              <div class="items"
                v-if="menu.rubriks && menu.rubriks.footer_menu"
              >
                <p
                  v-for="(item, i) in menu.rubriks.footer_menu"
                  :key="i" class="item"
                >
                  <a :href="`/rubrics/${item.name_en}`">
                    {{ item.name_ru }}
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="block block-3">
            <p class="title">О нас</p>
            <div class="content">
              <div class="items"
                v-if="menu.articles && menu.articles.footer_menu"
              >
                <p
                  v-for="(item, i) in menu.articles.footer_menu.menu_2"
                  :key="i" class="item"
                >
                  <a :href="`/articles/${item.name_en}`">
                    {{ item.name_ru }}
                  </a>
                </p>
              </div>
              <div class="social">
                <a
                  href="https://www.instagram.com/agrarnaya_politika/"
                  title="https://www.instagram.com/agrarnaya_politika/"
                  class="instagram"
                  target="_blank"></a>
                <a
                  href="https://www.youtube.com/channel/UCYjCv8lY13TS94lfhX0VdsQ"
                  title="https://www.youtube.com/channel/UCYjCv8lY13TS94lfhX0VdsQ"
                  class="youtube"
                  target="_blank"></a>
                <a
                  href="https://vk.com/public172093914"
                  title="https://vk.com/public172093914"
                  class="vk"
                  target="_blank"></a>
                <a
                  href="https://www.facebook.com/groups/596192440784158/"
                  title="https://www.facebook.com/groups/596192440784158/"
                  class="facebook"
                  target="_blank"></a>
                <a
                  href="https://twitter.com/agrovesti"
                  title="https://twitter.com/agrovesti"
                  class="twitter"
                  target="_blank"></a>
                <a
                  href="https://ok.ru/profile/577033813172"
                  title="https://ok.ru/profile/577033813172"
                  class="odnoklassniki"
                  target="_blank"></a>
                <!--<a href="#" class="google"></a>-->
              </div>
            </div>
          </div>
        </div>

        <div class="registrationInfo">
          <p>Журнал "Аграрная политика" зарегистрирован в
            Федеральной службе по надзору в сфере связи,
            информационных технологий и массовых коммуникаций.</p>
          <p>Свидетельство: ПИ № ФС 77-71663 от 23.11.2017 г.</p>
        </div>

        <!-- Yandex.Metrika informer -->
        <a
          href="https://metrika.yandex.ru/stat/?id=47604658&amp;from=informer"
          style="text-decoration: none; color: #fff; font-size: 12px; margin-top: 7px; display: inline-block;"
          target="_blank"
          rel="nofollow"
        >
          <img
            src="https://informer.yandex.ru/informer/47604658/3_1_FFFFFFFF_EFEFEFFF_0_uniques"
            style="width:88px; height:31px; border:0; margin-right: 5px;"
            alt="Яндекс.Метрика"
            title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)"
            class="ym-advanced-informer"
            data-cid="47604658"
            data-lang="ru"
          />
        </a>
        <!-- /Yandex.Metrika informer -->

      </div>
    </div>

  </div>
</template>

<script>
  import { urlAPI } from '../api/agroApi'
	import axios from 'axios';

	export default {
		name: `app`,
		data() {
			return {
				menu: {},
        search: {
				  showBlock: false,
          text: '',
          result: []
        }
			};
		},
		mounted() {
		  // !! нужно забирать только один раз, при первом заходе
			axios.get(`http://${urlAPI}/api/menu`).then(res => {
				// console.log(res)
				this.menu = res.data
			})
      .catch(error => {
        console.log(error)
      });
      this.yandexMetrika()
		},
    methods: {
      goSearch () {
        if(!this.search.text) {
          return
        }
        let url = `http://${urlAPI}/api/search/`;
        let params = {
          params: { text: this.search.text }
        };
        axios.get(url, params).then((res) => {
          this.search.result = res.data;
          // console.log(this.search.result)
        })
        .catch(error => {
          console.log(error)
        })
      },
      yandexMetrika () {
        (function (d, w, c) {
          (w[c] = w[c] || []).push(function() {
            try {
              w.yaCounter47604658 = new Ya.Metrika({
                id:47604658,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
              });
            } catch(e) { }
          });

          var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://mc.yandex.ru/metrika/watch.js";

          if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
          } else { f(); }
        })(document, window, "yandex_metrika_callbacks");
      }
    }
	};
</script>

<style lang="scss">
  @import '../../node_modules/normalize.css';
  @import '../../node_modules/reset-css/sass/reset';

  body { font-family: 'Montserrat', sans-serif; }
  a { text-decoration: none; }

  .contentWrappper {
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 10px;
  }
  .menuWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-transform: uppercase;
  }

  .header {
    .topMenu {
      min-height: 45px;
      color: #ffffff;
      font-size: 14px;
      .menuItem {
        color: #ffffff;
        margin: 0px 10px 10px 0;
        display: inline-block;
        &:hover { color: #c0c0c0; }
      }
      .leftSide {
        .title {
          color: #a4b3ce;
          margin: 10px 10px 10px 0;
          display: inline-block;
        }
      }
      .rightSide {
        /*.logIn {*/
          /*background: url("../images/iconLogIn.png") no-repeat left center;*/
          /*padding-left: 20px;*/
          /*margin: 5px 30px 5px 0;*/
        /*}*/
        .search {
          background: url("../images/iconLogIn.png") no-repeat left center;
          padding-left: 20px;
          margin: 5px 30px 5px 0;
        }
        .describe {
          background: url("../images/iconDescribe.png") no-repeat left center;
          padding-left: 20px;
          margin: 5px 0 5px 0;
        }
      }
    }

    .searchBlockWrapper {
      position: relative;
      .searchBlock {
        position: absolute;
        width: 100%;
        background-color: #ffffff;
        /* opacity: 0.9; */
        z-index: 1;
        .searchBlockContent {
          padding: 30px 20px;
          input {
            padding: 5px;
            margin-right: 10px;
            min-width: 200px;
            width: 80%;
            border: 1px solid #000;
          }
          .btnSearch {
            display: inline-block;
            background-color: #0f4f96;
            padding: 8px 15px;
            color: #fff;
            cursor: pointer;
            margin: 5px 0;
          }
          .btnCloseSearch {
            position: absolute;
            right: 0;
            top: 10px;
            cursor: pointer;
            font-size: 18px;
          }

          .searchResult {
            .title {
              margin: 30px 0 15px 0;
              color: #424949;
            }
            .links {
              display: inline-block;
              /* font-size: 14px; */
              color: #2E86C1;
              font-family: sans-serif;
              line-height: 1.6;
              &:hover { color: #0f4f96; }
            }
          }
        }
      }
    }

    .mainMenu {
      padding-top: 15px;
      padding-bottom: 15px;
      .leftSide {
        a.logo { display: inline-block; }
      }
      .rightSide {
        .menuItem {
          color: #4d545c;
          font-size: 20px;
          line-height: 1.3;
          /*margin: 25px 13px 0 13px;*/
          margin: 0 8px 0 8px;
          /*font-weight: bold;*/
          display: inline-block;
          &:hover { color: #2E86C1; }
        }
      }
    }

    @media (max-width: 1024px) {
      .mainMenu {
        display: block;
      }
    }

    .headerBorderBottom {
      height: 6px;
      background: url("../images/headerBorderBottom.png") repeat-x center;
    }
  }

  .footer {
    background-color: #3c3f44;
    padding: 0px 0px 45px 0px;
    .blocks {
      display: flex;
      .block {
        margin-top: 55px;
        .title {
          font-size: 14px;
          color: #ffffff;
          font-weight: bold;
          margin-bottom: 25px;
          text-transform: uppercase;
        }
        .content {
          padding-right: 10px;
          .items {
            .item {
              color: #c7c7c9;
              font-size: 14px;
              margin-bottom: 13px;
              a {
                color: #c7c7c9;
                text-decoration: underline;
                &:hover {
                  text-decoration: none;
                }
              }
            }
          }
          .social {
            margin-top: 20px;
            a {
              display: inline-block;
              height: 42px;
              width: 42px;
              margin: 0px 10px 5px 0px;
            }
            .instagram {
              background: url("../images/iconSocialInstagram.png") no-repeat center;
            }
            .youtube {
              background: url("../images/iconSocialYoutube.png") no-repeat center;
            }
            .vk {
              background: url("../images/iconSocialVk.png") no-repeat center;
            }
            .facebook {
              background: url("../images/iconSocialFacebook.png") no-repeat center;
            }
            .twitter {
              background: url("../images/iconSocialTwitter.png") no-repeat center;
            }
            .odnoklassniki {
              background: url("../images/iconSocialOdnoklassniki.png") no-repeat center;
            }
            /*.google {*/
              /*background: url("../images/iconSocialGoogle.png") no-repeat center;*/
            /*}*/
          }
        }
      }
      .block-1 { width: 40% }
      .block-2 { width: 30% }
      .block-3 { width: 30% }
    }
    .registrationInfo {
      border-top: 1px solid #6c6e71;
      color: #b3b4b5;
      padding-top: 6px;
      font-size: 12px;
      line-height: 1.4;
      margin-top: 25px;
    }

    @media (max-width: 650px) {
      .blocks {
        display: inline-block;
        .block-1, .block-2, .block-3 { width: 100%; }
      }
    }
  }

</style>
