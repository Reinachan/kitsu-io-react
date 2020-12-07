import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import Community from './Pages/Community';
import Groups from './Pages/Groups';
import Library from './Pages/Library';
import User from './Pages/User';
import Anime from './Pages/Anime';

export default function Routes() {
    return (
        <Switch>
            <Route path="/community">
                <Community />
            </Route>
            <Route path="/library">
                <Library />
            </Route>
            <Route path="/groups">
                <Groups />
            </Route>
            <Route path="/user/:slug">
                <User />
            </Route>
            <Route path="/anime/:slug">
                <Anime />
            </Route>
            <Route exact path="/">
                <Redirect to="/library" />
            </Route>
        </Switch>
    );
}