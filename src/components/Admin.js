import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

class Admin extends Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem("token")

        let loggedIn = true
        if(token == null){
            loggedIn = false
        }

        this.state = {
            loggedIn
        }
    }
    render() {
        if(this.state.loggedIn === false){
            return <Redirect to="/"/>
        }
        return (
            <div>
                <h1> This is an admin page. Only Auth people can see this.</h1>
                <Link to="/logout">Logout</Link>
            </div>
        );
    }
}

export default Admin;