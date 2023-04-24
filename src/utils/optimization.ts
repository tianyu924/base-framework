/**
 * 性能优化工具
 */

/**
 * @description  节流函数
 * @date 2023/4/24
*/
export const throttle = (fn: () => void, delay: number = 1000): () => void => {
  let prevTime = 0
  return () => {
    const currentTime = Date.now()
    if (currentTime - prevTime >= delay) {
      prevTime = currentTime
      fn()
    }
  }
}

/**
 * @description 防抖函数
 * @date 2023/4/24
*/
export const debounce = (fn: () => void, delay: number = 1000): () => void => {
  let timer: null | number = null
  return () => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = window.setTimeout(() => {
      fn()
    }, delay)
  }
}
