import React from 'react'
import './index.scss'

export interface ICellProps {
  // 根元素的自定义样式类（值为 active 时，组件呈现为激活变色状态）
  customClass?: string
  // 跳转地址
  link?: string
  // 左边插槽
  before?: React.ReactNode
  // 中间插槽
  title?: React.ReactNode
  // 右边插槽
  after?: React.ReactNode
}

export const Cell = ({
  customClass = '',
  link = '#',
  before,
  title,
  after,
}: ICellProps) => {
  return (
    <a
      className={['cmp-cell', customClass].filter((v) => v).join(' ')}
      href={link}
    >
      <div className="cmp-cell-left">{before}</div>
      <div className="cmp-cell-title">{title}</div>
      <div className="cmp-cell-right">{after}</div>
    </a>
  )
}

export default Cell
