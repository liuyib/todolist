import { useEffect } from 'react'
import { useRect } from '../../utils/use-hooks'
import './index.scss'

export interface IPopoverProps {
  // 根元素自定义样式类
  customClass?: string
  title?: string | React.ReactNode
  content?: string | React.ReactNode
  // 箭头所指点的 left 坐标
  left: number
  // 箭头所指点的 top 坐标
  top: number
  // 是否可见
  visible?: boolean
}

// TODO: 这个组件应该能够根据“显示点”的位置和自身的大小，动态决定箭头的方向
export const Popover = ({
  customClass,
  title,
  content,
  left,
  top,
  visible = false,
}: IPopoverProps) => {
  const [rect, ref] = useRect()
  // FIXME: 应该将 Popover 固定在按钮下面，而不是跟随鼠标
  const thisLeft = left - rect.width / 2 || 0
  // +10 使得向下偏移一段距离，显示效果更好
  const thisTop = top + 10 || 0
  const visibility = visible ? 'visible' : 'hidden'

  useEffect(() => {
    const detectBlur = (e: MouseEvent) => {
      const { x, y } = e

      if (x > rect.left && x < rect.right && y > rect.top && y < rect.bottom) {
        // TODO
        console.log('no 消失')
      } else {
        console.log('yes 消失')
      }
    }

    document.addEventListener('click', detectBlur)

    return () => {
      document.removeEventListener('click', detectBlur)
    }
  }, [rect])

  return (
    <div
      ref={ref}
      style={{ left: thisLeft, top: thisTop, visibility }}
      className={customClass}
    >
      <div className="cmp-popover">
        <div className="cmp-popover-arrow"></div>
        <div className="cmp-popover-inner">
          {title && <div className="cmp-popover-title">{title}</div>}
          <div className="cmp-popover-content">{content}</div>
        </div>
      </div>
    </div>
  )
}

export default Popover
