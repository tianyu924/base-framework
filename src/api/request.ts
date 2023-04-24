import axios from 'axios'
import Qs from 'Qs'
import { HTTP_CODE, RESPONSE_CODE, UNITY_RESPONSE_HANDLE } from './config'
import { ElMessage } from 'element-plus'

let isTipLoading = false // 是否提示中,防止出现多个提示框

const service = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_PROXY_PREFIX}`,
  timeout: 30000,
  method: 'GET'
})

service.interceptors.request.use(function (config) {
  if (config.method === 'GET') {
    config.paramsSerializer = (params) => {
      return Qs.stringify(params, { arrayFormat: 'comma' })
    }
  }
  return config
}, function (error) {
  throw error
})

// Add a response interceptor
service.interceptors.response.use(function (response) {
  // http请求成功，业务状态统一处理
  const responseData = response.data
  if (responseData.status === RESPONSE_CODE.SUCCESS) {
    return responseData
  } else {
    errorHandle(responseData.status, responseData.msg)
  }
}, function (error) {
  // http错误状态统一处理
  const msg: string = HTTP_CODE[error.response.status] || error.message
  errorHandle(error.response.status, msg)
})

const errorHandle = (status: string | number, msg: string): void => {
  if (!isTipLoading) {
    isTipLoading = true
    ElMessage.error({
      message: msg,
      onClose: () => {
        isTipLoading = false
      }
    })
  }
  if (UNITY_RESPONSE_HANDLE[status]) {
    UNITY_RESPONSE_HANDLE[status]()
  }
  throw { status, msg }
}

export default async <T = any>(config: IRequestConfig): Promise<IResponse<T>> => {
  return await service(config)
}
