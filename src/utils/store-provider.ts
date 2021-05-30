import { createContext } from 'react'
import { TodoListStore } from '../stores/todo-list'

export const StoreContext = createContext<TodoListStore>({} as TodoListStore)
export const StoreProvider = StoreContext.Provider
