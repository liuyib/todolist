import React from 'react'
import ReactDOM from 'react-dom'
import { configure } from 'mobx'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/index.scss'
import TodoList from './stores/todo-list'
import { StoreProvider } from './utils/store-provider'

configure({
  enforceActions: 'always',
  computedRequiresReaction: true,
  reactionRequiresObservable: true,
  observableRequiresReaction: true,
})

const todolist = new TodoList(
  JSON.parse(localStorage.getItem('xy-todolist:todos') || ''),
)

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider value={todolist}>
      <App />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
