import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LoginConnectedComponent } from '../HOC/Authentication/Login';
import { RegisterConnectedComponent } from '../HOC/Authentication/Register';
import NotFound from './Shared/NotFound';
import Home from './Home';

// For more info see
// https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf

const Main = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/login" component={LoginConnectedComponent} />
        <Route path="/user/register" component={RegisterConnectedComponent} />
        <Route path="*" component={NotFound} />
    </Switch>
);

export default Main;
