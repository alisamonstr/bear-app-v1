import React, { Component } from 'react';
import './styles/App.css';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { MainContainer,  CatalogContainer, HowToBuyContainer, ItemPageContainer } from './containers'

class App extends Component {
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
    );
  }
}

export default App;
