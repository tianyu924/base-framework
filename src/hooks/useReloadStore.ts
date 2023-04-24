/**
 * 刷新页面时，保持vuex中得缓存数据状态不丢失
 */
import { useStore } from '@/store'
import { onBeforeMount } from 'vue'
import { deleteStorage, getStorage, setStorage } from '@/utils/storage'
export default (): void => {
  const store = useStore()
  const vuexStoreKey = 'vuex'
  onBeforeMount(() => {
    // 页面刷新时缓存store中的所有状态数据
    window.addEventListener('DOMContentLoaded', () => {
      const storeState = getStorage(vuexStoreKey)
      store.replaceState(Object.assign(store.state, storeState))
      deleteStorage(vuexStoreKey)
    })
    window.addEventListener('beforeunload', () => {
      setStorage(vuexStoreKey, store.state)
    })
  })
}
