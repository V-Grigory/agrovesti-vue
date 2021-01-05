const AgroApi = require('../api/AgroApi');

class MainMenu {

  constructor() {
    this.api = new AgroApi();
    this.mainMenu = [];
    this.mockMainMenu = [
      { name_ru: 'Отчеты', name_en: 'test1' },
      { name_ru: 'Панель исследований', name_en: 'test2' },
      { name_ru: 'Журнал', name_en: 'test2' },
      { name_ru: 'Статьи партнеров', name_en: 'test2' },
      { name_ru: 'Подписка', name_en: 'test2' },
      { name_ru: 'Контакты', name_en: 'test2' },
      { name_ru: 'Поиск', name_en: 'test2' }
    ];
  }

  async getMenu() {
    try {
      // this.mainMenu = await this.api.getMainMenu();
      // return this.mainMenu
      return this.mockMainMenu
    } catch (e) {
      return this.mockMainMenu
    }
  }

}

module.exports = MainMenu;
