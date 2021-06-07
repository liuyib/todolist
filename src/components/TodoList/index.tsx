import { useState } from 'react'
import { observer } from 'mobx-react'
import { MoreOutlined } from '@ant-design/icons'
import { isObjKey } from '../../utils'
import { useStore } from '../../utils/use-hooks'
import { TodoItem } from '../TodoItem'
import { Collapse } from '../Collapse'
import { Popover } from '../Popover'
import { TodoItemStore } from '../../stores/todo-item'
import './index.scss'

export interface ITodoViewProps {
  todosType: string
  isMoreVisible: boolean
  setMoreVisible: Function
  setMorePos: Function
}

/**
 * @param todosType - TodoListStore 中的 todos 数据
 */
const TodoView = observer(
  ({
    todosType,
    isMoreVisible,
    setMoreVisible,
    setMorePos,
  }: ITodoViewProps) => {
    const todolist = useStore()
    let todos: TodoItemStore[] = []

    // 用于通过 TS 检查，否则 `todolist[todosType]` 将报错
    if (isObjKey(todosType, todolist)) {
      // 必须赋值才能触发状态更新（如果用 .concat, .push 等方法，则无法触发）
      todos = todolist[todosType]
    }

    return (
      <>
        {todos && todos.length ? (
          todos.map((todo) => (
            <div className="cmp-todolist-item" key={`${todo.id}-${todo.text}`}>
              <TodoItem customClass="cmp-todolist-todo" todo={todo} />
              <MoreOutlined
                className="cmp-todolist-more"
                onClick={(e) => {
                  setMorePos({ left: e.clientX, top: e.clientY })
                  setMoreVisible(!isMoreVisible)
                }}
              />
            </div>
          ))
        ) : (
          <div className="cmp-todolist-empty">无数据</div>
        )}
      </>
    )
  },
)

export const TodoList = () => {
  const [isMoreVisible, setIsMoreVisible] = useState(false)
  const [morePos, setMorePos] = useState({ left: 0, top: 0 })

  return (
    <div className="cmp-todolist">
      <Collapse
        title="未完成"
        content={
          <TodoView
            todosType="openTodos"
            isMoreVisible={isMoreVisible}
            setMoreVisible={setIsMoreVisible}
            setMorePos={setMorePos}
          />
        }
      ></Collapse>

      <Collapse
        title="已完成"
        content={
          <TodoView
            todosType="doneTodos"
            isMoreVisible={isMoreVisible}
            setMoreVisible={setIsMoreVisible}
            setMorePos={setMorePos}
          />
        }
      ></Collapse>

      <Popover
        visible={isMoreVisible}
        left={morePos.left}
        top={morePos.top}
        customClass="cmp-todolist-popover"
        content={
          <div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
            <div>123</div>
          </div>
        }
      />
    </div>
  )
}

export default TodoList
