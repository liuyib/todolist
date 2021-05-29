import React from 'react'
import './Inbox.scss'
import Input from '../components/Input'
import TodoItem from '../components/TodoItem'

export const Inbox: React.FC = () => (
  <main className="inbox">
    <div className="inbox-header">
      <Input
        placeholder="添加任务至“收集箱”，回车即可保存"
        enter={(value: string) => {
          console.log(`value`, value)
        }}
      ></Input>

      <TodoItem></TodoItem>
    </div>
  </main>
)

export default Inbox
