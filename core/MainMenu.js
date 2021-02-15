const AgroApi = require('../api/AgroApi');

class MainMenu {

  constructor() {
    this.api = new AgroApi();
    this.mainMenu = [];
  }

  async getMenu() {
    try {
      // this.mainMenu = await this.api.getMainMenu();
      this.mainMenu = this.getMockMainMenu();
    } catch (e) {
      this.mainMenu = this.getMockMainMenu();
    }
    return this.mainMenu;
  }

  getMockMainMenu() {
    return require('../mocks/mainMenu');
  }

}

module.exports = MainMenu;
