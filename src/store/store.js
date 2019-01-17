import vue from 'vue'

import Vuex from 'vuex'
import config from '@/config'
const { homeName } = config
import {
  getBreadCrumbList,
  setTagNavListInLocalstorage,
  getMenuByRouter,
  getTagNavListFromLocalstorage,
  getHomeRoute,
  getNextRoute,
  routeHasExist,
  routeEqual,
  getRouteTitleHandled,
  localSave,
  localRead
} from '@/libs/utils'

vue.use(Vuex)

export default new Vuex.Store({
  mudules: {

  },
  state: {
    tagNavList: [],
    isChooseType: null,
    token: null,
    user: null,
    pCenterActiveName: sessionStorage.getItem('PCENTER_ACTIVE_NAME')
  },
  mutations: {
    setTagNavList(state, list) {
      let tagList = []
      if (list) {
        tagList = [...list]
      } else {
        tagList = getTagNavListFromLocalstorage() || []
      }
      // 筛选不缓存的组件
      state.tagNavList = tagList.filter(item => !item.meta.notCache)
      setTagNavListInLocalstorage([...tagList])
    },
    addTag(state, { route, type = 'unshift' }) {
      let router = getRouteTitleHandled(route)
      //
      if (!routeHasExist(state.tagNavList, router)) {
        if (type === 'push') state.tagNavList.push(router)
        else {
          if (router.name === homeName) state.tagNavList.unshift(router)
          else state.tagNavList.splice(1, 0, router)
        }
        setTagNavListInLocalstorage([...state.tagNavList])
      }
    },
    setChooseType(state, msg) {
      state.isChooseType = msg
    },
    setToken(state, msg) {
      state.token = JSON.parse(msg).access_token
      localStorage.setItem('LOGIN_TOKEN', msg)
    },
    userInfo(state, msg) {
      state.user = msg
      localStorage.setItem('USER_INFO', msg)
    },
    setPCenterActiveName(state, name) {
      state.pCenterActiveName = name;
      sessionStorage.setItem('PCENTER_ACTIVE_NAME', name);
    }
  },
  getters: {

  }
})
