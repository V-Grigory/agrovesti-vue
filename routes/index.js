const express = require('express');
const router = express.Router();
const agroApi = require('../api/agroApi');
const utils = require('../utils');

router.get('/', (req, res, next) => {

  let pageData = {
    pageName: 'mainPage'
  };

  pageData.title = 'Центр аграрного опыта и инноваций: практика ' +
      'внедрения новинок в производство';

  let promises = [];

  const menuData = new Promise((resolve, reject) => {
    agroApi.getMenuData().then(menuData => {
      pageData.menuData = menuData;
      resolve()
    }).catch(() => {})
  });
  promises.push(menuData);

  const mainPageData = new Promise((resolve, reject) => {
    agroApi.getMainPageData().then(mainPageData => {
      pageData.mainPageData = mainPageData;
      resolve()
    }).catch(() => {})
  });
  promises.push(mainPageData);

  Promise.all(promises).then(() => {
    res.render('layout', { pageData });
  });

});

router.get('/rubrics/:slugRubric/:page?', (req, res, next) => {

  let pageData = {
    pageName: 'rubricPage'
  };

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

  let promises = [];

  const menuData = new Promise((resolve, reject) => {
    agroApi.getMenuData().then(menuData => {
      pageData.menuData = menuData;
      resolve()
    }).catch(() => {})
  });
  promises.push(menuData);

  const rubricPageData = new Promise((resolve, reject) => {
    agroApi.getRubricPageData(slugRubric, page).then(rubricPageData => {
      pageData.rubricPageData = rubricPageData;
      resolve()
    }).catch(() => {})
  });
  promises.push(rubricPageData);

  Promise.all(promises).then(() => {
    pageData.rubricator = rubricator();
    pageData.pagination = pagination();
    res.render('layout', { pageData });
  });

});

router.get('/articles/:slugArticle', (req, res, next) => {

  let pageData = { pageName: 'articlePage' };

  pageData.title = 'Центр аграрного опыта и инноваций: практика ' +
      'внедрения новинок в производство';

  let promises = [];

  const menuData = new Promise((resolve, reject) => {
    agroApi.getMenuData().then(menuData => {
      pageData.menuData = menuData;
      resolve()
    }).catch(() => {})
  });
  promises.push(menuData);

  const articlePageData = new Promise((resolve, reject) => {
    agroApi.getArticlePageData(req.params.slugArticle).
    then(articlePageData => {
      pageData.articlePageData = articlePageData;
      resolve()
    }).
    catch(() => {})
  });
  promises.push(articlePageData);

  Promise.all(promises).then(() => {
    pageData.articlePageData.getNormDate = utils.getNormDate;
    res.render('layout', { pageData });
  });
});

router.get('/search', (req, res, next) => {

  let pageData = { pageName: 'searchPage' };

  pageData.title = 'Центр аграрного опыта и инноваций: практика ' +
      'внедрения новинок в производство';

  let promises = [];

  const menuData = new Promise((resolve, reject) => {
    agroApi.getMenuData().then(menuData => {
      pageData.menuData = menuData;
      resolve()
    }).catch(() => {})
  });
  promises.push(menuData);

  Promise.all(promises).then(() => {
    res.render('layout', { pageData });
  });

});

module.exports = router;
