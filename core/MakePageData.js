const MainMenu = require('./MainMenu');
const MainPage = require('./MainPage');

class MakePageData {

  constructor(pageName) {
    this.pageData = {
      pageName: pageName,
      title: 'Центр аграрного опыта и инноваций: практика внедрения новинок в производство',
      mainMenu: '',
      data: ''
    }
  }

  getPageData() {

    const mainMenu = new MainMenu();
    const getMenu = mainMenu.getMenu().then(mainMenu => this.pageData.mainMenu = mainMenu);

    let page;
    if (this.pageData.pageName === 'mainPage') page = new MainPage();
    const getPage = page.getPage().then(pageData => this.pageData.data = pageData);

    return new Promise(resolve => {
      Promise.all([getMenu, getPage]).then(() => resolve(this.pageData))
    })

  }

}

module.exports = MakePageData;
