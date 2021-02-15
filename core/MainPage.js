const AgroApi = require('../api/AgroApi');

class MainPage {

  constructor() {
    this.api = new AgroApi();
    this.pageData = '';
  }

  async getPage() {
    try {
      // this.pageData = await this.api.getMainPageData();
      this.pageData = this.getMockPageData();
    } catch (e) {
      this.pageData = this.getMockPageData();
    }
    return this.pageData;
  }

  getMockPageData() {
    return require('../mocks/mainPage');
  }

}

module.exports = MainPage;
