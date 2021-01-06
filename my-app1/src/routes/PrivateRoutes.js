import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'

function PrivateRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default PrivateRoutes