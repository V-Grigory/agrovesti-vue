const axios = require('axios');

class AgroApi {

  constructor() {
    // this.urlAPI = process.env.NODE_ENV === 'production' ? 'old.agrovesti.ru' : 'localhost:8000';
    this.urlAPI = 'old.agrovesti.ru';
  }

  getMainMenu() {
    return new Promise((resolve, reject) => {
      axios.get(`http://${this.urlAPI}/api/menu`).then(res => {
        resolve(res.data);
        // setTimeout(() => resolve(res.data), 3000)
      })
      .catch(error => {
        reject(error);
      })
    })
  }

  getMainPageData() {
    return new Promise((resolve, reject) => {
      axios.get(`http://${this.urlAPI}/api`).then(res => {
        resolve(res.data.data);
        // setTimeout(() => resolve(res.data.data), 1000)
      })
      .catch(error => {
        reject(error);
      })
    })
  }

  getRubricPageData(slugRubric, page) {
    return new Promise((resolve, reject) => {
      axios.get(`http://${this.urlAPI}/api/rubrics/${slugRubric}?p=${page}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      })
    })
  }

  getArticlePageData(slugArticle) {
    return new Promise((resolve, reject) => {
      axios.get(`http://${this.urlAPI}/api/articles/${slugArticle}`)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(error);
      })
    })
  }

}

module.exports = AgroApi;
