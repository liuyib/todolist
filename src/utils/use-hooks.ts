import { useContext } from 'react'
import { StoreContext } from './store-provider'
import TodoList from '../stores/todo-list'

export const useStore = (): TodoList => {
  const storeContext = useContext(StoreContext)

  if (!storeContext) {
    throw new Error('You are forgot to use StoreProvider.')
  }

  return storeContext
}
