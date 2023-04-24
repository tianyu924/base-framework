declare interface IResponse<T = any> {
  status: number
  msg: string
  data: T extends any ? T : T & any
}

declare interface IRequestConfig {
  url: string
  data?: any
  headers?: any
  method?: 'GET' | 'POST' | 'DELETE' | 'PUT'
}
