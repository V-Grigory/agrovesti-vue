const express = require('express');
const router = express.Router();
const agroApi = require('../api/agroApi');
const utils = require('../utils');

let pageData = {};
let dataPromises = [];
let tmpMockMainMenu = [
  {
    name_ru: 'Цифровизация',
    name_ru_full: 'Опыт внедрения цифровых решений в производстве',
    name_img: '1.png',
    name_en: 'test1'
  },
  {
    name_ru: 'Техника',
    name_ru_full: 'Опыт внедрения новой техники в растениеводстве',
    name_img: '2.png',
    name_en: 'test2'
  },
  {
    name_ru: 'Агрохимия',
    name_ru_full: 'Применение новых препаратов для защиты и питания растений',
    name_img: '3.png',
    name_en: 'test2'
  },
  {
    name_ru: 'Сорта',
    name_ru_full: 'Опыт возделывания новых сортов и гибридов',
    name_img: '4.png',
    name_en: 'test2'
  },
  {
    name_ru: 'Животноводство',
    name_ru_full: 'Передовой опыт и инновации в ветеринарии',
    name_img: '5.png',
    name_en: 'test2'
  },
  {
    name_ru: 'Корма',
    name_ru_full: 'Опыт внедрения нового оборудования в животноводстве',
    name_img: '6.png',
    name_en: 'test2'
  },
  {
    name_ru: 'Фарма',
    name_ru_full: 'Практический опыт и инновации в кормлении животных',
    name_img: '7.png',
    name_en: 'test2'
  },
  {
    name_ru: 'Агроконсалтинг',
    name_ru_full: 'Консультационные материалы агрокомпаний',
    name_img: '8.png',
    name_en: 'test2'
  },
  {
    name_ru: 'Тренды',
    name_ru_full: 'Тренды и персоны: интервью, мнения, аналитика',
    name_img: '9.png',
    name_en: 'test2'
  },
];

const menuData = new Promise((resolve, reject) => {
  agroApi.getMenuData().then(menuData => {
    pageData.menuData = menuData;
    pageData.menuData.rubriks.main_menu = tmpMockMainMenu;
    resolve()
  }).catch(() => {})
});
dataPromises.push(menuData);

router.get('/', (req, res, next) => {

  pageData.pageName = 'mainPage';
  pageData.title = 'Центр аграрного опыта и инноваций: практика ' +
      'внедрения новинок в производство';

  const mainPageData = new Promise((resolve, reject) => {
    // pageData.mainPageData = [];
    // resolve();
    agroApi.getMainPageData().then(mainPageData => {
      pageData.mainPageData = mainPageData;
      resolve()
    }).catch(() => {})
  });
  dataPromises.push(mainPageData);

  Promise.all(dataPromises).then(() => {
    res.render('layout', { pageData });
  });

});

router.get('/rubrics/:slugRubric/:page?', (req, res, next) => {

  pageData.pageName = 'rubricPage';
  pageData.title = 'Центр аграрного опыта и инноваций: практика ' +
      'внедрения новинок в производство';

  let slugRubric = req.params.slugRubric;
  let page = req.params.page > 0 ? req.params.page : 1;

  const rubricator = () => {
    let rubricator = pageData.menuData.rubricator;
    let rubricId = pageData.rubricPageData.id;
    let out = rubricator.filter(v => v.id === rubricId);
    // console.log(rubricId)
    // console.log(out)
    // console.log(out.length)
    if(out.length > 0) {
      return out[0]
    }
    rubricator.forEach(v => {
      v.children.forEach(i => {
        if (i.id === rubricId) {
          out = v
        }
      })
    });
    // console.log(out)
    return out
  };

  const pagination = () => {
    let articles = pageData.rubricPageData;
    let articlesOnPage = 7;

    if ( !articles.articles_count ) return null;
    let countPages = Math.ceil(articles.articles_count / articlesOnPage);
    if ( countPages <= 1 ) return null;

    let pagItems = [];
    // add first pag item
    if (page > 1) {
      pagItems.push(
        `<a class="edgePageNumber" href="/rubrics/${slugRubric}/${+page-1}">
          < ПРЕДЫДУЩАЯ
         </a>`
      );
    }
    for (let pagItem = 1; pagItem <= countPages; pagItem++) {
      let c = 'pageNumber';
      if (pagItem === +page) c += ' currentPageNumber';
      pagItems.push(
        `<a class="${c}" href="/rubrics/${slugRubric}/${pagItem}">${pagItem}</a>`
      );
    }
    // add last pag item
    if (page < countPages) {
      pagItems.push(
        `<a class="edgePageNumber" href="/rubrics/${slugRubric}/${+page+1}">
          СЛЕДУЮЩАЯ >
        </a>`
      );
    }

    return pagItems;
  };

  const rubricPageData = new Promise((resolve, reject) => {
    agroApi.getRubricPageData(slugRubric, page).then(rubricPageData => {
      pageData.rubricPageData = rubricPageData;
      resolve()
    }).catch(() => {})
  });
  dataPromises.push(rubricPageData);

  Promise.all(dataPromises).then(() => {
    pageData.rubricator = rubricator();
    pageData.pagination = pagination();
    res.render('layout', { pageData });
  });

});

router.get('/articles/:slugArticle', (req, res, next) => {

  pageData.pageName = 'articlePage';
  pageData.title = 'Центр аграрного опыта и инноваций: практика ' +
      'внедрения новинок в производство';

  const articlePageData = new Promise((resolve, reject) => {
    agroApi.getArticlePageData(req.params.slugArticle).
    then(articlePageData => {
      pageData.articlePageData = articlePageData;
      resolve()
    }).
    catch(() => {})
  });
  dataPromises.push(articlePageData);

  Promise.all(dataPromises).then(() => {
    pageData.articlePageData.getNormDate = utils.getNormDate;
    res.render('layout', { pageData });
  });

});

router.get('/search', (req, res, next) => {

  pageData.pageName = 'searchPage';
  pageData.title = 'Центр аграрного опыта и инноваций: практика ' +
      'внедрения новинок в производство';

  Promise.all(dataPromises).then(() => {
    res.render('layout', { pageData });
  });

});

module.exports = router;
