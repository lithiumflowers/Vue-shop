import { login as loginApi } from '@/api/login'
import router from '@/router'

export default {
  namespaced: true,
  sate: () => ({
    token: localStorage.getItem('token') || 'null'
  }),
  mutations: {
    setToken(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    }
  },
  actions: {
    login({ commit }, userinfo) {
      return new Promise((resolve, reject) => {
        loginApi(userinfo)
          .then((res) => {
            console.log(res)
            commit('setToken', res.token)
            router.replace('/')
            resolve()
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
}
