import { observer } from 'mobx-react'
import { isObjKey } from '../../utils'
import { useStore } from '../../utils/use-hooks'
import { TodoItem } from '../TodoItem'
import { Collapse } from '../Collapse'
import { TodoItemStore } from '../../stores/todo-item'
import './index.scss'

/**
 * @param todosType - TodoListStore 中的 todos 数据
 */
const TodoView = observer(({ todosType }: { todosType: string }) => {
  const todolist = useStore()
  let todos: TodoItemStore[] = []

  // 用于通过 TS 检查，否则 `todolist[todosType]` 将报错
  if (isObjKey(todosType, todolist)) {
    todos = todolist[todosType]
  }

  return (
    <>
      {todos && todos.length ? (
        todos.map((todo) => (
          <TodoItem key={`${todo.id}-${todo.text}`} todo={todo} />
        ))
      ) : (
        <div className="cmp-todolist-empty">无数据</div>
      )}
    </>
  )
})

export const TodoList = () => {
  return (
    <div className="cmp-todolist">
      <Collapse
        title="未完成"
        content={<TodoView todosType="openTodos" />}
      ></Collapse>

      <Collapse
        title="已完成"
        content={<TodoView todosType="doneTodos" />}
      ></Collapse>
    </div>
  )
}

export default TodoList
