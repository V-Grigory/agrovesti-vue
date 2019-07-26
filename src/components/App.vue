<template>
  <div id="app">

    <div class="header">

      <div style="background-color: #0f4f96;">
        <div class="topMenu menuWrapper contentWrappper">
          <div class="leftSide">
            <span class="title">Консалтинг  компаний:</span>
            <router-link
              :to="`/rubrics/resheniya-dlya-polya2506190244`"
              class="menuItem"
            >решения для поля
            </router-link>
            <router-link
              :to="`/rubrics/resheniya-dlya-fermy2506190245`"
              class="menuItem"
            >решения для фермы
            </router-link>
          </div>
          <div class="rightSide">
            <a href="#" class="menuItem logIn">ВОЙТИ</a>
            <a href="#" class="menuItem describe">ПОДПИСАТЬСЯ</a>
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
              <div class="items">
                <p class="item">
                  Медиа-кит: 2019 (аудитория, участие в выставках, цены)
                </p>
                <p class="item">
                  <a href="#">Контакты отдела рекламы</a>
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
                  v-for="(item, i) in menu.articles.footer_menu"
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

      </div>
    </div>

  </div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: `app`,
		data() {
			return {
				menu: {}
			};
		},
		mounted() {
			axios.get('http://localhost:8000/api/menu').then(res => {
				// console.log(res)
				this.menu = res.data
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
        .logIn {
          background: url("../images/iconLogIn.png") no-repeat left center;
          padding-left: 20px;
          margin: 5px 30px 5px 0px;
        }
        .describe {
          background: url("../images/iconDescribe.png") no-repeat left center;
          padding-left: 20px;
          margin: 5px 0px 5px 0px;
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
          /*margin: 25px 13px 0 13px;*/
          margin: 0 8px 0 8px;
          /*font-weight: bold;*/
          display: inline-block;
          &:hover { color: #c0c0c0; }
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
