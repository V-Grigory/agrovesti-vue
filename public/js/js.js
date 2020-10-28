
function showHiddenItems(idElement) {

  let elMan = document.getElementById('managerHiddenItems-' + idElement);
  elMan.innerHTML = elMan.innerHTML === 'больше' ? 'скрыть' : 'больше';

  let elArrow = document.getElementById('managerArrow-' + idElement);
  elArrow.className = elArrow.className === 'rotatedArrow' ? '' : 'rotatedArrow';

  let el = document.getElementById('hiddenItems-' + idElement);
  el.style.display = el.style.display === 'block' ? 'none' : 'block';

}

document.addEventListener("DOMContentLoaded", () => {

  new Vue({
    el: '#contentPageArticle',
    components: {
      authorization: {
        template: `
          <div v-if="needAuth">
            <div class="bottomClosedArticle"></div>
            <div class="authorization">
          
              <p class="textOffer">
                Для продолжения чтения введите ваш код подписчика
              </p>
              <p class="textOffer">
                (номер вашего мобильного телефона или четырехзначный код доступа)
              </p>
              <input
                v-model="accessCode"
                placeholder="Ваш код подписчика" class="textInput" type="text"
              />
              <p v-if="notificate.auth.failTextNotificate" class="failTextNotificate">
                {{notificate.auth.failTextNotificate}}
              </p>
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
                >{{notificate.reg.successTextNotificate}}
                </p>
                <p
                  v-if="notificate.reg.failTextNotificate"
                  class="failTextNotificate"
                >{{notificate.reg.failTextNotificate}}
                </p>
                <button @click="sendEmailForRegistration()">
                  ОТПРАВИТЬ
                </button>
              </div>
      
              <p class="textOffer">&nbsp;</p>
              <p class="textOffer" style="text-align: left;">
                Оформив подписку, вы и команда специалистов вашего предприятия, 
                получает возможность системно и долгосрочно знакомиться с 
                накопленным опытом по внедрению новинок, инноваций ведущих 
                сельхозпредприятий России, отслеживать технические премьеры 
                и перспективные разработки.
              </p>
              <!--<p class="textOfferDetail">-->
                <!--какие сегодня есть лучшие практики внедрения новинок и инноваций-->
              <!--</p>-->
              <!--<p class="textOfferDetail">-->
                <!--как интегрировать новые технические решения в действующее производство-->
              <!--</p>-->
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
        `,
        data() {
          return {
            urlAPI: 'old.agrovesti.ru',
            needAuth: false,
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
          }
        },
        mounted() {
          this.isNeedAuth()
        },
        methods: {
          isNeedAuth() {
            let closedArticle = document.getElementById('closedArticle');
            if(closedArticle) {
              console.log('closedArticle');
              if(sessionStorage.getItem('articlesAccessToken')) {
                // if(true) {
                console.log('getItem articlesAccessToken');
                closedArticle.className = 'openedArticle';
              } else {
                console.log('NOT getItem articlesAccessToken');
                this.needAuth = true;
              }
            }
          },
          initData () {
            this.notificate.reg.successTextNotificate = '';
            this.notificate.reg.failTextNotificate = '';
          },
          getAuthToken () {
            let params = { params: {accessCode: this.accessCode} };
            this.$http.get(`http://${this.urlAPI}/api/getAuthToken/`, params)
            .then(res => {
              //console.log(res);
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
          sendEmailForRegistration () {
            this.initData();
            if(!this.validateEmailForRegistration()) {
              return
            }
            let params = { params: {email: this.email} };
            let url = `http://${this.urlAPI}/api/clientRegistration/`;
            this.$http.get(url, params).then((res) => {
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
          }
        }

      }
    }
  });

});
