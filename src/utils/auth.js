import { TOKEN_TIME, TOKEN_TIME_VALUE } from './constant'

export const setTokenTime = () => {
  localStorage.setItem(TOKEN_TIME, Date.now())
}

export const getTokenTime = () => {
  return localStorage.getItem(TOKEN_TIME)
}

export const diffTokenTime = () => {
  const currentTime = Date.now()
  const tokenTime = getTokenTime()
  return currentTime - tokenTime > TOKEN_TIME_VALUE
}
