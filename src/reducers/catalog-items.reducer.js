import { LOCATION_CHANGE } from 'react-router-redux'
import { RECEIVE_CATALOG_DATA, EDIT_CATALOG_ITEM, DELETE_CATALOG_ITEM, ADD_CATALOG_ITEM } from '../actions'


export const properties = [
  { from: 'Показать все' },
  { from: 0, to: 15 },
  { from: 16, to: 25 },
  { from: 26, to: 35 },
  { from: 36, to: 50 },
  { from: 51, to: 80 },
]

const itemsDefaultState = { items: [], filteredItems: [] }

export default function (state = itemsDefaultState, action) {
  switch (action.type) {
    case RECEIVE_CATALOG_DATA: {
      return { ...state,
        items: [...state.items, ...action.payload],
        filteredItems: [...state.items, ...action.payload] }
    }
    case LOCATION_CHANGE: {
      const from = Number(action.payload.search.split('=')[1])
      if (from >= 0) {
        const property = properties.find(x => x.from === from)
        const filteredItems = state.items.filter(item => property.from <= item.size && item.size <= property.to)
        return { ...state, filteredItems }
      }
      return { ...state, filteredItems: state.items }
    }
    case EDIT_CATALOG_ITEM: {
      const newItems = state.items.map(item => item.id === action.payload.id ? action.payload : item)
      return { ...state, items: newItems }
    }
    case DELETE_CATALOG_ITEM: {
      return { items: action.payload }
    }
    case ADD_CATALOG_ITEM: {
      return { ...state, items: action.payload.id }
    }
    default:
      return state
  }
}
