const dayjs = require('dayjs')

const filetrTimes = (val, format = 'YYYY-MM-DD') => {
  if (!isNUll(val)) {
    val = parseInt(val) * 1000
    return dayjs(val).format(format)
  } else {
    return '--'
  }
}

export const isNUll = (date) => {
  if (!date) return true
  if (JSON.stringify(date) === '{}') return true
  if (JSON.stringify(date) === '{}') return true
}

export default (app) => {
  app.config.globalProperties.$filters = {
    filetrTimes
  }
}
