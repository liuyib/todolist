import {
  action,
  computed,
  makeObservable,
  observable,
  observe,
  toJS,
} from 'mobx'
import { TodoItemStore } from './todo-item'

export class TodoListStore {
  todos: TodoItemStore[] = []
  disposers: any[] = []

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
    this.watchTodos2Cache()
  }

  initTodos(todos: TodoItemStore[]) {
    todos.forEach((todo) => {
      this.addTodo(todo.text, todo.isDone)
    })
  }

  addTodo(text: string, isDone = false) {
    this.todos.unshift(new TodoItemStore(text, isDone))
  }

  removeTodo(todo: TodoItemStore) {
    // 调用 MobX 提供的 remove 函数
    ;(this.todos as any).remove(todo)
  }

  watchTodos2Cache() {
    observe(this.todos, (change) => {
      this.disposers.forEach((disposer) => disposer())
      this.disposers = []

      for (const todo of change.object) {
        const disposer = observe(todo, () => {
          this.cacheTodos()
        })
        this.disposers.push(disposer)
      }

      this.cacheTodos()
    })
  }

  cacheTodos() {
    localStorage.setItem('xy-todolist:todos', JSON.stringify(toJS(this.todos)))
  }

  get openTodos(): TodoItemStore[] {
    return this.todos.filter((todo) => !todo.isDone)
  }

  get doneTodos(): TodoItemStore[] {
    return this.todos.filter((todo) => todo.isDone)
  }
}

export default TodoListStore
