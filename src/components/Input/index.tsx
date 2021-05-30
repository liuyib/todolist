import React, { useState } from 'react'
import { isKeyboard } from '../../utils'
import './index.scss'

export interface IInputProps {
  // 根元素自定义样式类
  customClass?: string
  // input 元素的占位提示符
  placeholder?: string
  // 左边插槽
  before?: React.ReactNode
  // 右边插槽
  after?: React.ReactNode
  // 按下回车触发的回调
  enter?: Function
}

export const Input = ({
  customClass = '',
  placeholder = 'please input some text',
  before,
  after,
  enter = () => {},
}: IInputProps) => {
  const rootClassName = ['cmp-input', customClass].filter((v) => v).join(' ')
  const [input, setInput] = useState('')

  return (
    <div className={rootClassName}>
      <div className="cmp-input-before">{before}</div>
      <input
        className="cmp-input-center"
        type="text"
        placeholder={placeholder}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyUp={(e) => {
          e.stopPropagation()

          if (isKeyboard(e, 'Enter')) {
            enter(input)
          }
        }}
      />
      <div className="cmp-input-after">{after}</div>
    </div>
  )
}

export default Input
