import React from 'react'
import { RightOutlined } from '@ant-design/icons'
import { useState } from 'react'
import './index.scss'

interface ICollapseProps {
  title: string
  left?: React.ReactNode
  right?: React.ReactNode
  content?: React.ReactNode
}

export const Collapse = ({ title, left, right, content }: ICollapseProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="cmp-collapse">
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
