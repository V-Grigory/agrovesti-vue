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
    let mockMainMenu = [
      { name_ru: 'Отчеты', name_en: 'test1' },
      { name_ru: 'Панель исследований', name_en: 'test2' },
      { name_ru: 'Журнал', name_en: 'test2' },
      { name_ru: 'Статьи партнеров', name_en: 'test2' },
      { name_ru: 'Подписка', name_en: 'test2' },
      { name_ru: 'Контакты', name_en: 'test2' },
      { name_ru: 'Поиск', name_en: 'test2' }
    ];
    return mockMainMenu;
  }

}

module.exports = MainMenu;
