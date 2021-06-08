import { useEffect } from 'react'
import { isEmptyObj } from '../../utils'
import { useRect } from '../../utils/use-hooks'
import './index.scss'

export interface IPopoverProps {
  // 根元素自定义样式类
  customClass?: string
  title?: string | React.ReactNode
  content?: string | React.ReactNode
  rect?: any
  // 是否可见
  visible?: boolean
  // 修改组件是否可见
  setIsMoreVisible?: Function
}

// TODO: 这个组件应该能够根据“显示点”的位置和自身的大小，动态决定箭头的方向
export const Popover = ({
  customClass,
  title,
  content,
  rect,
  visible,
  setIsMoreVisible,
}: IPopoverProps) => {
  const [thisRect, thisRef] = useRect()
  const visibility = visible ? 'visible' : 'hidden'

  let left = 0
  let top = 0

  if (!isEmptyObj(rect) && !isEmptyObj(thisRect)) {
    left = rect.left + (rect.width - thisRect.width) / 2
    top = rect.top + rect.height * 2
  }

  useEffect(
    () => {
      const detectBlur = (e: MouseEvent) => {
        if (!setIsMoreVisible) return

        const { x, y } = e
        const isNotBlur =
          x > left &&
          x < left + thisRect.width &&
          y > top &&
          y < top + thisRect.height

        setIsMoreVisible(isNotBlur)
      }

      document.addEventListener('click', detectBlur)

      return () => {
        document.removeEventListener('click', detectBlur)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [left, top, thisRect],
  )

  return (
    <div
      ref={thisRef}
      style={{ left, top, visibility }}
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
