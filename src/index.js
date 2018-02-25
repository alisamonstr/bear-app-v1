import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from "./reducers"
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const history = createHistory()
const reduxRouterMiddleware = routerMiddleware(history)

const store = createStore(rootReducer, applyMiddleware(thunk, reduxRouterMiddleware))

render(
    <Provider store={store}>
        <App history={history} />
    </Provider>
    , document.getElementById('root'),
)

registerServiceWorker()