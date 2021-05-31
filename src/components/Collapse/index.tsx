import React from 'react'
import { RightOutlined } from '@ant-design/icons'
import { useState } from 'react'
import './index.scss'

export interface ICollapseProps {
  // 根元素的自定义样式类
  customClass?: string
  // 折叠面板标题
  title: string
  // 左边插槽
  left?: React.ReactNode
  // 右边插槽
  right?: React.ReactNode
  // 内容插槽
  content?: React.ReactNode
}

export const Collapse = ({
  customClass,
  title,
  left,
  right,
  content,
}: ICollapseProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={['cmp-collapse', customClass].filter((v) => v).join(' ')}>
      <div className="cmp-collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <div className={`cmp-collapse-header-left${isOpen ? ' active' : ''}`}>
          {left ? left : <RightOutlined />}
        </div>
        <div className="cmp-collapse-header-title">{title}</div>
        <div className="cmp-collapse-header-right">{right}</div>
      </div>

      <div className={`cmp-collapse-content${isOpen ? ' active' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default Collapse
