const MainMenu = require('./MainMenu');
const MainPage = require('./MainPage');
const FooterMenu = require('./FooterMenu');

class MakePageData {

  constructor(pageName) {
    this.pageData = {
      pageName: pageName,
      title: 'Центр аграрного опыта и инноваций: практика внедрения новинок в производство',
      mainMenu: '',
      data: '',
      footerMenu: ''
    }
  }

  getPageData() {

    const mainMenu = new MainMenu();
    const getMainMenu = mainMenu.getMenu().then(v => this.pageData.mainMenu = v);

    let page;
    if (this.pageData.pageName === 'mainPage') page = new MainPage();
    const getPage = page.getPage().then(pageData => this.pageData.data = pageData);

    const footerMenu = new FooterMenu();
    const getFooterMenu = footerMenu.getMenu().then(v => this.pageData.footerMenu = v);

    return new Promise(resolve => {
      let promises = [getMainMenu, getPage, getFooterMenu];
      Promise.all(promises).then(() => resolve(this.pageData))
    })

  }

}

module.exports = MakePageData;
