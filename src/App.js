import React, { Component } from 'react';
import logo from './styles/logo.svg';
import './styles/App.css';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import { Route, Switch, Redirect } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import { MainContainer,  CatalogContainer, HowToBuyContainer } from './containers'

class App extends Component {
  render() {
    return (
        <ConnectedRouter history={this.props.history}>
            <Switch>
                <Route exact path="/" component={MainContainer} />
                <Route exact path="/catalog/:url" component={CatalogContainer} />
                <Route exact path="/how-to-buy" component={HowToBuyContainer} />
            </Switch>
        </ConnectedRouter>
    );
  }
}

export default App;
