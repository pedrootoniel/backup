import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from '../pages/Landingpage'
import SignUp from '../pages/SignUp'
import SignIn from '../pages/SignIn'

function PublicRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}

export default PublicRoutes;