import { type InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, type Store } from 'vuex'
import type * as IStore from '@/types/store'
import example from './modules/example'

export interface IRootState {
  example?: IStore.IExample
}

export const key: InjectionKey<Store<IRootState>> = Symbol('RootState')

export const store = createStore<IRootState>({
  modules: {
    example
  }
})

export function useStore (): Store<IRootState> {
  return baseUseStore(key)
}
