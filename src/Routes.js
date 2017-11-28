import Chapter6 from './components/ch6';
import Demo from './components/demo';
import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'

const Routes = () => {
    return (
        <BrowserRouter>
            <div className="BrowserRoute">
                <div className="routes">
                    <Link to="ch5">Chapter 5</Link>
                    <Link to="ch6">Chapter 6</Link>
                    <Link to="ch7">Chapter 7</Link>
                </div>
                <Switch>
                    <Route path="/ch5" component={Demo}/>
                    <Route path="/ch6" component={Chapter6}/>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Routes;