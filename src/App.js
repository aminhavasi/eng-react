import React from 'react';
import Eng from './eng';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Eng} />
                <Route path="/new" component={null} />
                <Route path="/learn" component={null} />
                <Route path="/notFound" component={null} />
                <Redirect to="/notFound" />
            </Switch>
        </div>
    );
}

export default App;
