import React, {Component} from 'react';
import Login from './components/Login'
import Admin from './components/Admin'
import Logout from './components/Logout'
import {Route, Switch, BrowserRouter} from "react-router-dom";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/logout" component={Logout}/>
                </Switch>
            </BrowserRouter>

        );
    }
}
const B = () => {
  return null;
}

export default App;