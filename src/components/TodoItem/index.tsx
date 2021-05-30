import { useState } from 'react'
import { BorderOutlined, CheckSquareFilled } from '@ant-design/icons'
import './index.scss'

export interface ITodoItem {
  // 根元素自定义样式类
  customClass?: string
  // input 元素的占位提示符
  placeholder?: string
  title?: string
}

export const TodoItem = ({
  customClass = '',
  placeholder = '无标题',
  title = '',
}: ITodoItem) => {
  const rootClassName = ['cmp-todoitem', customClass].filter((v) => v).join(' ')
  const [isChecked, setIsChecked] = useState(false)

  return (
    <div className={rootClassName}>
      <span
        className="cmp-todoitem-checkbtn"
        onClick={() => setIsChecked(!isChecked)}
      >
        {isChecked ? <CheckSquareFilled /> : <BorderOutlined />}
      </span>

      <input
        className="cmp-todoitem-input"
        type="text"
        placeholder={placeholder}
        value={title}
      />
    </div>
  )
}
export default TodoItem
