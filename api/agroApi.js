// import axios from 'axios'
const axios = require('axios');

// const urlAPI = process.env.NODE_ENV === 'production'
//     ? 'old.agrovesti.ru' : 'localhost:8000';
const urlAPI = 'old.agrovesti.ru';

const getMenuData = () => {
  return new Promise((resolve, reject) => {
    axios.get(`http://${urlAPI}/api/menu`).then(res => {
      resolve(res.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

const getMainPageData = () => {
  return new Promise((resolve, reject) => {
    axios.get(`http://${urlAPI}/api`).then(res => {
      resolve(res.data.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

const getRubricPageData = (slugRubric, page) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://${urlAPI}/api/rubrics/${slugRubric}?p=${page}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getArticlePageData = (slugArticle) => {
  return new Promise((resolve, reject) => {
    axios.get(`http://${urlAPI}/api/articles/${slugArticle}`)
    .then(res => {
      resolve(res.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

module.exports = {
  urlAPI,
  getMenuData,
  getMainPageData,
  getRubricPageData,
  getArticlePageData
};
