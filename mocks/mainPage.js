const mockPageData = [
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
  },
  {
    tepmlate_name: 'template_2',
    title: 'Отчет. IV квартал: Опыт повышения рентабельности в АПК',
    content: {
      title: 'Об отчете',
      text: 'В отчет "Новый опыт повышения рентабельности и анализ ' +
          'практики внедрения инновационных производственных решений в АПК" ' +
          'включены эксклюзивные материалы в виде производственных кейсов, ' +
          'имеющих научно-практическую направленность и производственную достоверность.',
      url_read_more: 'http://ya.ru'
    },
    url_download_short_report: 'http://ya.ru',
    url_download_full_report: 'http://ya.ru',
    results_report: {
      title: 'Краткие выводы отчета отражают:',
      results: [
        'Достигнутый экономико-технологический эффект на предприятии ' +
        'по итогам внедрения новых решений, ведущих к повышению ' +
        'рентабельности аграрного производства.',
        'Ключевые технические свойства, инновационность разработок, ' +
        'онлайн-ссылки (или статьи в pdf) для изучения полных материалов.'
      ],
      url_read_all_reports: 'http://ya.ru'
    }
  },
  {
    tepmlate_name: 'template_3',
    title: 'Новые кейсы',
    description: '',
    tabs: [
      {
        id: 'opyt',
        title: 'Опыт',
        content: [
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Let your culture be your brand',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Nordic nature and Scandinavian lifestyle',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          }
        ]
      },
      {
        title: 'Премьеры',
        content: [
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Вторник, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
        ]
      },
      {
        title: 'Тренды',
        content: [
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Среда, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
        ]
      },
    ]
  },
  /*
  {
    tepmlate_name: 'template_3',
    title: 'Партнерские материалы',
    description: 'Ведущие компании-разработчики и поставщики технологических ' +
        'решений раскрывают в материалах важные аспекты и функциональность ' +
        'продуктов, информируют о своих новых разработках, дают важные ' +
        'рекомендации по их применению.',
    tabs: [
      {
        id: '',
        title: 'Цифровизация',
        content: [
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Let your culture be your brand',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Nordic nature and Scandinavian lifestyle',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          }
        ]
      },
      {
        title: 'Техника',
        content: [
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
        ]
      },
      {
        title: 'Агрохимия',
        content: [
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
        ]
      },
      {
        title: 'Сорта',
        content: [
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
        ]
      },
      {
        title: 'Животноводство',
        content: [
          {
            img: '1_1.jpg',
            tag: 'Travel',
            date: 'Понедельник, 25 июня',
            title: 'Why every designer should visit Rotterdam?',
            description: 'After initial crisis re-construction the center of Rotterdam has become ' +
                'the site of ambitious new architecture.',
            url: 'mail.ru'
          },
        ]
      },
    ]
  }
  */
];

module.exports = mockPageData;
