/**
 * 本地缓存工具
 */

const cacheKey = 'store' // 缓存前缀

/**
 * @description 设置本地缓存
 * @date 2023/4/24
*/
export const setStorage = (key: string, value: any): void => {
  if (typeof value === 'object') {
    sessionStorage.setItem(`${cacheKey}-${key}`, JSON.stringify(value))
  } else {
    sessionStorage.setItem(`${cacheKey}-${key}`, value)
  }
}

/**
 * @description  获取本地缓存
 * @date 2023/4/24
*/
export const getStorage = (key: string): null | any => {
  const value = sessionStorage.getItem(`${cacheKey}-${key}`) ?? 'null'
  return JSON.parse(value)
}

/**
 * @description 删除本地缓存
 * @date 2023/4/24
*/
export const deleteStorage = (key: string): void => {
  sessionStorage.removeItem(`${cacheKey}-${key}`)
}
