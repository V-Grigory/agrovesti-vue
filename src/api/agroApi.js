import axios from 'axios'

export const urlAPI = process.env.NODE_ENV === 'production'
    ? 'old.agrovesti.ru' : 'localhost:8000'
// export const urlAPI = 'old.agrovesti.ru'

export function getRubrics () {
  return new Promise((resolve, reject) => {
    axios.get(`http://${urlAPI}/api`).then(res => {
      resolve(res.data.data)
    })
    .catch(error => {
      reject(error)
    });
  })
}

export function getArticle (slugArticle) {
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
