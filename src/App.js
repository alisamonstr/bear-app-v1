import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import './styles/App.css'
import { MainContainer, CatalogContainer, HowToBuyContainer, ItemPageContainer } from './containers'

class App extends Component {
  static propTypes = {
    history: PropTypes.object,
  }
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/catalog/:url" component={CatalogContainer} />
          <Route exact path="/how-to-buy" component={HowToBuyContainer} />
          <Route exact path="/catalog/:url/:itemUrl" component={ItemPageContainer} />
        </Switch>
      </ConnectedRouter>
    )
  }
}

export default App
