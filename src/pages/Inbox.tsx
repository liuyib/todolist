import React from 'react'
import { useStore } from '../utils/use-hooks'
import { Input } from '../components/Input'
import { TodoList } from '../components/TodoList'
import Collapse from '../components/Collapse'
import './Inbox.scss'

export const Inbox: React.FC = () => {
  const todolist = useStore()

  return (
    <main className="inbox">
      <div className="inbox-header">
        <Input
          placeholder="添加任务至“收集箱”，回车即可保存"
          enter={(value: string) => todolist.addTodo({ text: value })}
        />
      </div>

      <TodoList />

      <Collapse
        title="已完成"
        content={
          <div>
            <div>test 111</div>
            <div>test 111</div>
            <div>test 111</div>
            <div>test 111</div>
            <div>test 111</div>
          </div>
        }
      />
    </main>
  )
}

export default Inbox
