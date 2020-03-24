import React from "react";
import { Route, Redirect, Switch } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { asyncComponent } from 'react-async-component';

const Home = asyncComponent({
  resolve: () => import('pages/home')
});

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Redirect from="/" to="/home" exact></Redirect>
        <Route path="/home" component={Home} />
      </Switch>
    </HashRouter>
  )
}

export default Routes