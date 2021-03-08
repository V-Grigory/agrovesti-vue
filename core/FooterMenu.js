const AgroApi = require('../api/AgroApi');

class FooterMenu {

  constructor() {
    this.api = new AgroApi();
    this.footerMenu = [];
  }

  async getMenu() {
    try {
      // this.footerMenu = await this.api.getFooterMenu();
      this.footerMenu = this.getMockFooterMenu();
    } catch (e) {
      this.footerMenu = this.getMockFooterMenu();
    }
    return this.footerMenu;
  }

  getMockFooterMenu() {
    return require('../mocks/footerMenu');
  }

}

module.exports = FooterMenu;
