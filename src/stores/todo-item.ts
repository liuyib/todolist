import { action, makeObservable, observable } from 'mobx'

export interface ITodoItemStoreProps {
  id?: number
  text: string
  isDone?: boolean
}

export class TodoItemStore {
  id: number
  text: string
  isDone: boolean

  constructor({ id, text, isDone }: ITodoItemStoreProps) {
    makeObservable(this, {
      text: observable,
      isDone: observable,
      updateText: action,
      toggleIsDone: action,
    })

    // FIXME: Date.now() 换成 uuid
    this.id = id || Date.now()
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
