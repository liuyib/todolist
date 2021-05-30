import { action, makeObservable, observable } from 'mobx'

export class TodoItemStore {
  id: number = Date.now()
  text: string = ''
  isDone: boolean = false

  constructor(text: string, isDone = false) {
    makeObservable(this, {
      text: observable,
      isDone: observable,
      updateText: action,
      toggleIsDone: action,
    })

    this.text = text
    this.isDone = isDone
  }

  updateText(text: string) {
    this.text = text
  }

  toggleIsDone() {
    this.isDone = !this.isDone
  }
}

export default TodoItemStore
