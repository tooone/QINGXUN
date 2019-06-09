import axios from 'axios';
import { Message } from 'element-ui';
import { devIp } from './ipConfig'

function checkStatus (response) {
  const data = response.data
  const status = response.status
  console.log(response)
  return data
}

function CALL_API (url, method = 'GET', request) {
  let ip = devIp || null
  const path = ip + url

  let params = request

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  return axios({
    url: path,
    method,
    headers,
    timeout: 20000,
    data: params
  }).then(checkStatus).catch(error => {
    const errorRes = error.response

    if (errorRes) {
      const status = error.response.status

      switch (status) {
        case 404:
          Message.error({ showClose: true, message: `您的请求不存在！！！(${status})` })
          break
        case 502:
          Message.error({ showClose: true, message: `服务器异常了！！！(${status})` })
          break
        case 400:
          Message.error({ showClose: true, message: `参数错误了！！！(${status})` })
          break
        default:
          Message.error({ showClose: true, message: `网络异常了！！！(${status})` })
      }
    } else {
      Message.error({ showClose: true, message: error.message || '服务器异常了！！！' })
    }

    throw error
  })
}

export default CALL_API