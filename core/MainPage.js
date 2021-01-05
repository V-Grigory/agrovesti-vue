const AgroApi = require('../api/AgroApi');

class MainPage {

  constructor() {
    this.api = new AgroApi();
    this.mainPage = '';
    this.mockMainPage = 'test data';
  }

  async getPage() {
    try {
      // this.mainPage = await this.api.getMainPageData();
      // return this.mainPage
      return this.mockMainPage
    } catch (e) {
      return this.mockMainPage
    }
  }

}

module.exports = MainPage;
