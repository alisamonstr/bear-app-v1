import React, { Component } from 'react';
import './styles/App.css';
import { Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { MainContainer,  CatalogueContainer, HowToBuyContainer } from './containers'

class App extends Component {
  render() {
    return (
        <ConnectedRouter history={this.props.history}>
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route exact path="/catalogue/:url" component={CatalogueContainer} />
                <Route exact path="/how-to-buy" component={HowToBuyContainer} />
            </Switch>
        </ConnectedRouter>
    );
  }
}

export default App;
