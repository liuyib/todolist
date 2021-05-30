import { useContext } from 'react'
import { StoreContext } from './store-provider'
import { TodoListStore } from '../stores/todo-list'

export const useStore = (): TodoListStore => {
  const storeContext = useContext(StoreContext)

  if (!storeContext) {
    throw new Error('You are forgot to use StoreProvider.')
  }

  return storeContext
}
