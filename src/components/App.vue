<template>
  <div id="app">

    <div class="header">

      <div style="background-color: #0f4f96;">
        <div class="topMenu menuWrapper contentWrappper">
          <div class="leftSide">
            <span class="title">Консалтинг  компаний:</span>
            <a href="#" class="menuItem">Животноводство</a>
            <a href="#" class="menuItem">Растениеводство</a>
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
        <div class="rightSide">
          <a href="#" class="menuItem">ОПЫТ</a>
          <a href="#" class="menuItem">КЕЙСЫ</a>
          <a href="#" class="menuItem">НОВИНКИ</a>
          <a href="#" class="menuItem">АГРОНАБЛЮДЕНИЕ</a>
          <a href="#" class="menuItem">ТРЕНДЫ</a>
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
              <p class="item">
                Медиа-кит: 2019 (аудитория, участие в выставках, цены)
              </p>
              <p class="item">
                <a href="#">Контакты отдела рекламы</a>
              </p>
            </div>
          </div>

          <div class="block block-2">
            <p class="title">Рубрики</p>
            <div class="content">
              <p class="item">
                <a href="#">Опыт</a>
              </p>
              <p class="item">
                <a href="#">Кейсы</a>
              </p>
              <p class="item">
                <a href="#">Новинки</a>
              </p>
              <p class="item">
                <a href="#">Агронаблюдение</a>
              </p>
              <p class="item">
                <a href="#">Тренды</a>
              </p>
            </div>
          </div>

          <div class="block block-3">
            <p class="title">О нас</p>
            <div class="content">
              <p class="item">
                <a href="#">Оформление, продление подписки</a>
              </p>
              <p class="item">
                <a href="#">Предложить тему для публикации</a>
              </p>
              <p class="item">
                <a href="#">Команда редакции</a>
              </p>
              <p class="item">
                <a href="#">Принципы и ценности</a>
              </p>
              <div class="social">
                <a href="#" class="vk"></a>
                <a href="#" class="facebook"></a>
                <a href="#" class="twitter"></a>
                <a href="#" class="odnoklassniki"></a>
                <a href="#" class="google"></a>
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

<style lang="scss">
  @import '../../node_modules/normalize.css';
  @import '../../node_modules/reset-css/sass/reset';

  body { font-family: sans-serif; }
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
          font-size: 18px;
          margin: 25px 13px 0 13px;
          font-weight: bold;
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
          .social {
            margin-top: 20px;
            a {
              display: inline-block;
              height: 42px;
              width: 42px;
              margin: 0px 10px 5px 0px;
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
            .google {
              background: url("../images/iconSocialGoogle.png") no-repeat center;
            }
          }
        }
      }
      .block-1 { width: 50% }
      .block-2 { width: 25% }
      .block-3 { width: 25% }
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
