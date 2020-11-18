import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPage from "./MainPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={MainPage}/>
            </Switch>
        </Router>
    );
}

export default App;
