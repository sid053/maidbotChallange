import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import HomePage from "./HomePage" ;
import Welcome from "./Welcome";
import * as API from "../api/Api";


class MainComponent extends Component {

    state = {
        message:''
    }

    handleSubmit = (userdata) => {
        if(userdata.passwordValidity && userdata.emailValidity) {
            API.doLogin(userdata)
                .then((res) => {
                    if (res.status === 201) {
                        this.props.history.push("/Welcome");
                    }
                    else {
                        this.setState({
                            message: "Wrong username and password..!!",
                        });
                    }
                }).catch((error) => {
                this.setState({
                    message: "Error While logging in!!",
                });
                this.props.history.push('"/');
            });
        }
        else if(!userdata.emailValidity){
            this.setState({message : "Email format is not valid"})
        }
        else if(!userdata.passwordValidity){
            this.setState({message : "Password too short"})
        }
        
    };

    render(){

        return(
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <HomePage handleSubmit = {this.handleSubmit} message={this.state.message}/>
                    </div>
                )}/>
                <Route exact path="/Welcome" render={() => (
                    <div>
                        <Welcome state = {this.state}/>
                    </div>
                )}/>
            </div>
        );

    }


}

export default withRouter(MainComponent);