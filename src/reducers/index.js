import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import itemsReducer from './catalog-items.reducer'

const rootReducer = combineReducers({
    router: routerReducer,
    catalogItems: itemsReducer,
})

export default rootReducer
