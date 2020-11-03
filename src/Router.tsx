import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

const Router: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
