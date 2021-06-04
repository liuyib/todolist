import { observer } from 'mobx-react'
import { useStore } from '../../utils/use-hooks'
import { TodoItem } from '../TodoItem'
import { Collapse } from '../Collapse'

export const TodoList = observer(() => {
  const todoList = useStore()

  return (
    <div className="cmp-todolist">
      <Collapse
        title="未完成"
        content={todoList.openTodos.map((todo) => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      ></Collapse>

      <Collapse
        title="已完成"
        content={todoList.doneTodos.map((todo) => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))}
      ></Collapse>
    </div>
  )
})

export default TodoList
