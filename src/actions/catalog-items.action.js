export const RECEIVE_CATALOG_DATA = 'RECEIVE_CATALOG_DATA'

export const fetchCatalogItems = () => (dispatch, getState) => {
  const { catalogItems } = getState()
  if (catalogItems.items.length === 0) {
    fetch('https://wbe8ru7423.execute-api.eu-central-1.amazonaws.com/dev/bears').then(res => res.json()).then(json =>
      dispatch({ type: RECEIVE_CATALOG_DATA, payload: json }))
  }
}

