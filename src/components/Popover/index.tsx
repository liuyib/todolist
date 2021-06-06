import './index.scss'

export interface IPopoverProps {
  // 根元素自定义样式类
  customClass?: string
  title?: string | React.ReactNode
  content?: string | React.ReactNode
}

export const Popover = ({ customClass, title, content }: IPopoverProps) => {
  return (
    <div className={['cmp-popover', customClass].filter((v) => v).join(' ')}>
      <div className="cmp-popover-arrow"></div>
      <div className="cmp-popover-inner">
        <div className="cmp-popover-title">{title}</div>
        <div className="cmp-popover-content">{content}</div>
      </div>
    </div>
  )
}

export default Popover
