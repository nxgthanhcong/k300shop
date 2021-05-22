import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './components/Home/home';
import Detail from './components/Detail/detail';
import Collection from './components/Collection/collection';


const App = function (props) {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/detail" exact component={Detail} />
            <Route path="/collection" exact component={Collection} />
        </Switch>
    );
}

export default App;
