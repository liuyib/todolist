import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import mobxConfig from './configs/mobx'
import reportWebVitals from './reportWebVitals'
import Provider from './utils/provider'
import './styles/index.scss'

mobxConfig()

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
