import React from "react";
import {HashRouter, Switch, Route} from "react-router-dom";

import './App.css';
import {Home, News} from "./pages";

function App() {
    return (
        <div className="App">
            <HashRouter>
                <Switch>
                    <Route path='/news' component={News}/>
                    <Route exact path='/' component={Home}/>
                </Switch>
            </HashRouter>
        </div>
    );
}

export default App;
