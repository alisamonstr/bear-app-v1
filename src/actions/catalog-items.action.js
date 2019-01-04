import { link } from '../config'

export const RECEIVE_CATALOG_DATA = 'RECEIVE_CATALOG_DATA'
export const EDIT_CATALOG_ITEM = 'EDIT_CATALOG_ITEM'
export const DELETE_CATALOG_ITEM = 'DELETE_CATALOG_ITEM'
export const ADD_CATALOG_ITEM = 'ADD_CATALOG_ITEM'


export const fetchCatalogItems = () => (dispatch, getState) => {
  const { catalogItems } = getState()
  if (catalogItems.items.length === 0) {
    fetch(`${link}/bears`).then(res => res.json()).then(json =>
      dispatch({ type: RECEIVE_CATALOG_DATA, payload: json }))
  }
}

export const editItem = values => (dispatch, getState) => {
  const { token } = getState().user
  return fetch(`${link}/bears`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  })
    .then(res => res.json()).then(json => dispatch({ type: EDIT_CATALOG_ITEM, payload: json }))
}

export const deleteItem = values => (dispatch, getState) => {
  const { token } = getState().user
  return fetch(`${link}/bears`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  })
    .then(res => res.json()).then(json => dispatch({ type: DELETE_CATALOG_ITEM, payload: json }))
}

export const addItem = values => (dispatch, getState) => {
  const { token } = getState().user
  return fetch(`${link}/bears`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(values),
  })
    .then(res => res.json()).then(json => dispatch({ type: ADD_CATALOG_ITEM, payload: json }))
}
