import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import rootReducer from './reducers'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './styles/index.css'


const history = createHistory()
const reduxRouterMiddleware = routerMiddleware(history)

const store = createStore(rootReducer, applyMiddleware(thunk, reduxRouterMiddleware, logger))
const persistor = persistStore(store)

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App history={history} />
    </PersistGate>
  </Provider>
  , document.getElementById('root'),
)

registerServiceWorker()
