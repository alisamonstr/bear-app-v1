import { RECEIVE_CATALOG_DATA } from '../actions'

 const itemsDefaultState = []

 export default function (state = itemsDefaultState, action) {
     switch (action.type) {
       case RECEIVE_CATALOG_DATA: {
         console.log(action.payload)
         return [...state, ...action.payload]
       }
         default:
             return state
     }
 }