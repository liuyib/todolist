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
    // FIXME: 计算不准，位置经常出现偏移
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
