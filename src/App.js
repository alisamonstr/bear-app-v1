import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'react-router-redux'
import './styles/App.css'
import { MainContainer, CatalogContainer, HowToBuyComponent, ItemPageContainer, LoginContainer, AdminContainer, EditItemContainer, AddItemContainer } from './containers'
import { HeaderLayout } from './components'

class App extends Component {
  static propTypes = {
    history: PropTypes.object,
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <HeaderLayout history={this.props.history}>
          <Switch>
            <Route exact path="/" component={MainContainer} />
            <Route exact path="/catalog/:url" component={CatalogContainer} />
            <Route exact path="/how-to-buy" component={HowToBuyComponent} />
            <Route exact path="/catalog/:url/:itemUrl" component={ItemPageContainer} />
            <Route exact path="/edit/:itemUrl" component={EditItemContainer} />
            <Route exact path="/login" component={LoginContainer} />
            <Route exact path="/admin" component={AdminContainer} />
            <Route exact path="/add" component={AddItemContainer} />
          </Switch>
        </HeaderLayout>
      </ConnectedRouter>
    )
  }
}

export default App
