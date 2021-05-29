import React from 'react'
import './Inbox.scss'
import Input from '../components/Input'

export const Inbox: React.FC = () => (
  <main className="inbox">
    <div className="inbox-header">
      <Input
        placeholder="添加任务至“收集箱”，回车即可保存"
        enter={(value: string) => {
          console.log(`value`, value)
        }}
      ></Input>
    </div>
  </main>
)

export default Inbox
