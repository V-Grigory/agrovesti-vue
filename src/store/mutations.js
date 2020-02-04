// import Vue from 'vue'

export default {

  SET_MENU: (state, data) => {
    state.menuData = data
  },

  SET_MAIN_PAGE: (state, data) => {
    state.mainPageData = data
  },

  SET_RUBRIC_PAGE: (state, data) => {
    state.rubricPageData = data
  },

  SET_ARTICLE_PAGE: (state, data) => {
    state.articlePageData = data
  },

  // SET_ACTIVE_TYPE: (state, { type }) => {
  //   state.activeType = type
  // },

  // SET_LIST: (state, { type, ids }) => {
  //   state.lists[type] = ids
  // },

  // SET_ITEMS: (state, { items }) => {
  //   items.forEach(item => {
  //     if (item) {
  //       Vue.set(state.items, item.id, item)
  //     }
  //   })
  // },

  // SET_USER: (state, { id, user }) => {
  //   Vue.set(state.users, id, user || false) /* false means user not found */
  // }
}
