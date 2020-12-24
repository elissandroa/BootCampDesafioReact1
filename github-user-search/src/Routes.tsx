import React from 'react';
import Home from 'Pages/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Search from 'Pages/Search';
import Before from 'Pages/Before';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/before">
               <Before />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
    </Switch>
    </BrowserRouter>
);



export default Routes;