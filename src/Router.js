import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import './App.scss';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/A_2014/" exact component={Page1} />
                <Route path="/A_2014/page2" component={Page2} />
                <Route path="/A_2014/page3" component={Page3} />
                <Route path="/A_2014/page4" component={Page4} />
                <Route component={() => <Redirect to="/A_2014/" />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
