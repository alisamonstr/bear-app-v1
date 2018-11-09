import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import itemsReducer from './catalog-items.reducer'
import userReducer from './user.reducer'

const userPersistConfig = {
  key: 'user',
  storage,
  blacklist: ['error'],
}

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  router: routerReducer,
  catalogItems: itemsReducer,
})

export default rootReducer
