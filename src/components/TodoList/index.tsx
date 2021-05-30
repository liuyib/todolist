import { observer } from 'mobx-react'
import { useStore } from '../../utils/use-hooks'
import { TodoItem } from '../TodoItem'

export const TodoList = observer(() => {
  const todoList = useStore()

  return (
    <div className="cmp-todolist">
      <div>Open Todos: </div>
      {todoList.openTodos.map((todo) => (
        <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
      ))}

      <div>Done Todos: </div>
      {todoList.doneTodos.map((todo) => (
        <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
      ))}
    </div>
  )
})

export default TodoList
