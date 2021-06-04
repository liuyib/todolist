import { action, makeObservable, observable } from 'mobx'
import { uid } from 'uid/secure'
import GLOBAL_CONFIG from '../configs/global'

export interface ITodoItemStoreProps {
  text: string
  id?: number | string
  isDone?: boolean
}

export class TodoItemStore {
  text: string
  id?: number | string
  isDone?: boolean

  constructor({ id, text, isDone }: ITodoItemStoreProps) {
    makeObservable(this, {
      text: observable,
      isDone: observable,
      updateText: action,
      toggleIsDone: action,
    })

    this.id = id || uid(GLOBAL_CONFIG.uid.length)
    this.text = text
    this.isDone = isDone || false
  }

  updateText(text: string) {
    this.text = text
  }

  toggleIsDone() {
    this.isDone = !this.isDone
  }
}

export default TodoItemStore
