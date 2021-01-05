const MainMenu = require('./MainMenu');
const MainPage = require('./MainPage');

class MakePageData {

  constructor(pageName) {
    this.pageData = {
      pageName: pageName,
      title: 'Центр аграрного опыта и инноваций: практика внедрения новинок в производство'
    }
  }

  getPageData() {

    const mainMenu = new MainMenu();
    const getMenu = mainMenu.getMenu().then(mainMenu => this.pageData.mainMenu = mainMenu);

    const mainPage = new MainPage();
    const getPage = mainPage.getPage().then(mainPage => this.pageData.mainPage = mainPage);

    return new Promise(resolve => {
      Promise.all([getMenu, getPage]).then(() => resolve(this.pageData))
    })

  }

}

module.exports = MakePageData;
