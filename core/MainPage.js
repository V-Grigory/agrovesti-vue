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
    let mockPageData = [
      {
        tepmlate_name: 'template_1',
        title: 'Панель исследований',
        description: 'Центр аграрного опыта и инноваций ведет изучение передового ' +
            'технологического опыта на всей территории России по следующим направлениям:',
        links: [
          {
            ankor: 'Опыт выстраивания комплексных технологических процессов',
            url: 'url1'
          },
          {
            ankor: 'Результаты внедрения новых цифровых решений в растениеводстве',
            url: 'url2'
          },
          {
            ankor: 'Применение новых препаратов для защиты и питания растений',
            url: 'url3'
          },
          {
            ankor: 'Опыт возделывания новых сортов и гибридов',
            url: 'url4'
          },
          {
            ankor: 'Опыт внедрения новой техники в растениеводстве',
            url: 'url5'
          },
          {
            ankor: 'Технические премьеры в растениеводстве и животноводстве',
            url: 'url6'
          },
          {
            ankor: 'Инновационный опыт в овощеводстве',
            url: 'url7'
          },
          {
            ankor: 'Инновационный опыт в животноводстве',
            url: 'url8'
          },
          {
            ankor: 'Тенденции в разработке инноваций',
            url: 'url9'
          },
          {
            ankor: 'Консультационные материалы компаний-поставщиков технических решений',
            url: 'url10'
          }
        ]
      }
    ];
    return mockPageData;
  }

}

module.exports = MainPage;
