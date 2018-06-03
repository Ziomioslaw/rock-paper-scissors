import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './gui/App'
import store from './logic/store'
import { turnBegin } from './logic/actions'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'

console.log(store)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()

store.dispatch(turnBegin())
