// http状态码提示文案配置
export const HTTP_CODE: Record<string, string> = {
  500: '服务器内部错误',
  502: '网关错误',
  504: '网关超时',
  400: '请求错误',
  404: '请求地址错误',
  424: '登录已失效',
  403: '无权限访问',
  405: '请求方法错误',
  408: '请求超时'
}

// 业务逻辑处理成功状态码配置
export const enum RESPONSE_CODE {
  SUCCESS = 200 // 业务处理成功状态码
}

// 业务错误代码统一处理配置，如token失效，跳转404页面等
export const UNITY_RESPONSE_HANDLE: Record<string, () => void> = {
  40003: () => {
    console.log('跳转登录')
  }
}
