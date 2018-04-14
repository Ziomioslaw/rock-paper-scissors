import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'
import { turnBegin } from './actions'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

store.dispatch(turnBegin())
