import axios from 'axios'

export const urlAPI = process.env.NODE_ENV === 'production'
    ? 'old.agrovesti.ru' : 'localhost:8000'
// export const urlAPI = 'old.agrovesti.ru'

export function getMenuData () {
  return new Promise((resolve, reject) => {
    axios.get(`http://${urlAPI}/api/menu`).then(res => {
      resolve(res.data)
    })
    .catch(error => {
      reject(error)
    });
  })
}

export function getMainPageData () {
  return new Promise((resolve, reject) => {
    axios.get(`http://${urlAPI}/api`).then(res => {
      resolve(res.data.data)
    })
    .catch(error => {
      reject(error)
    });
  })
}

export function getRubricPageData (slugRubric, page) {
  return new Promise((resolve, reject) => {
    axios.get(`http://${urlAPI}/api/rubrics/${slugRubric}?p=${page}`)
      .then(res => {
        resolve(res.data)
      })
      .catch(error => {
        reject(error)
      });
  })
}

export function getArticlePageData (slugArticle) {
  return new Promise((resolve, reject) => {
    axios.get(`http://${urlAPI}/api/articles/${slugArticle}`)
    .then(res => {
      resolve(res.data)
    })
    .catch(error => {
      reject(error)
    });
  })
}
