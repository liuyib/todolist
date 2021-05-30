import { useState } from 'react'
import { observer } from 'mobx-react'
import { BorderOutlined, CheckSquareFilled } from '@ant-design/icons'
import { TodoItemStore } from '../../stores/todo-item'
import { onKeyPress } from '../../utils'
import './index.scss'

export interface ITodoItemProps {
  // 根元素自定义样式类
  customClass?: string
  // input 元素的占位提示符
  placeholder?: string
  todo: TodoItemStore
}

export const TodoItem = observer(
  ({ customClass = '', placeholder = '无标题', todo }: ITodoItemProps) => {
    const [newText, setNewText] = useState('')
    const [isEdit, setIsEdit] = useState(false)

    const saveText = () => {
      todo.updateText(newText)
      setIsEdit(false)
    }

    return (
      <div className={['cmp-todoitem', customClass].filter((v) => v).join(' ')}>
        <span
          className="cmp-todoitem-checkbtn"
          onClick={() => todo.toggleIsDone()}
        >
          {todo.isDone ? <CheckSquareFilled /> : <BorderOutlined />}
        </span>

        {isEdit ? (
          <input
            className="cmp-todoitem-input"
            type="text"
            placeholder={placeholder}
            autoFocus={isEdit}
            onChange={(e) => setNewText(e.target.value)}
            onKeyDown={onKeyPress('Enter', saveText)}
            onBlur={saveText}
          />
        ) : (
          <div className="cmp-todoitem-input" onClick={() => setIsEdit(true)}>
            {todo.text}
          </div>
        )}
      </div>
    )
  },
)

export default TodoItem
