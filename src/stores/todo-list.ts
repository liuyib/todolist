import { action, computed, makeObservable, observable } from 'mobx'
import { TodoItemStore } from './todo-item'

export class TodoListStore {
  todos: TodoItemStore[] = []

  constructor(todos: TodoItemStore[]) {
    makeObservable(this, {
      todos: observable,
      initTodos: action.bound,
      addTodo: action.bound,
      removeTodo: action.bound,
      openTodos: computed,
      doneTodos: computed,
    })

    this.initTodos(todos)
  }

  initTodos(todos: TodoItemStore[]) {
    this.todos.concat(todos)
  }

  addTodo(text: string) {
    this.todos.unshift(new TodoItemStore(text))
  }

  removeTodo(todo: TodoItemStore) {
    // 调用 MobX 提供的 remove 函数
    ;(this.todos as any).remove(todo)
  }

  get openTodos(): TodoItemStore[] {
    return this.todos.filter((todo) => !todo.isDone)
  }

  get doneTodos(): TodoItemStore[] {
    return this.todos.filter((todo) => todo.isDone)
  }
}

export default TodoListStore
