import { useContext, useEffect, useRef, useState } from 'react'
import { StoreContext } from './store-provider'
import { TodoListStore } from '../stores/todo-list'

export const useStore = (): TodoListStore => {
  const storeContext = useContext(StoreContext)

  if (!storeContext) {
    throw new Error('You are forgot to use StoreProvider.')
  }

  return storeContext
}

export const useRect = () => {
  const ref: any = useRef()
  const [rect, setRect] = useState({})

  const setRectSafe = () =>
    setRect(
      ref && ref.current ? (ref.current as any).getBoundingClientRect() : {},
    )

  useEffect(() => {
    setRectSafe()
    window.addEventListener('resize', setRectSafe)

    return () => window.removeEventListener('resize', setRectSafe)
  }, [])

  return [rect, ref]
}
