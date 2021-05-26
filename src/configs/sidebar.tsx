import { ContainerOutlined, CalendarOutlined } from '@ant-design/icons'

export const sidebar = [
  {
    title: '收集箱',
    link: '/webapp/inbox',
    icon: <ContainerOutlined />,
  },
  {
    title: '今天',
    link: '/webapp/today',
    icon: <CalendarOutlined />,
  },
]

export default sidebar
