import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './gui/App'
import store from './logic/store'
import { turnBegin } from './logic/actions'
import registerServiceWorker from './registerServiceWorker'


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

store.dispatch(turnBegin())
