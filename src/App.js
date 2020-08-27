import React from 'react';
import Eng from './eng';
import { Switch, Route, Redirect } from 'react-router-dom';
import New from './components/newWords/new';
import Learn from './components/learn/learn';
import Rtest from './components/tests/rtest';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Eng} />
                <Route path="/new" component={New} />
                <Route path="/learn" component={Learn} />
                <Route path="/rtest" component={Rtest} />
                <Route path="/notFound" component={null} />
                <Redirect to="/notFound" />
            </Switch>
        </div>
    );
}

export default App;
