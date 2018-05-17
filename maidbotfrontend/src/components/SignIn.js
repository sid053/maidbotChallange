import React, {Component} from 'react';
import {FormControl,FormGroup} from 'react-bootstrap'
import Particles from 'react-particles-js';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {message}from '../action/index'
import * as API from "../api/Api";

class SignIn extends Component {

    state = {
        username: '',
        password: '',
        passwordValidity:false,
        emailValidity:false
    };

    validateEmail(){
        if(this.state.username.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            this.state.emailValidity = true;
            return 'success';
        }
        else{
            this.state.emailValidity = false;
            return null;
        }

    }

    validatePassword(){
        const length = this.state.password.length;
        if(length>8) {
            this.state.passwordValidity = true;
          return 'success';
        }
        else if(length>0 || length > 5){
            this.state.passwordValidity=false;
            return 'warning';
        }
        return null;
    }

    handleSubmit = (userdata) => {
        if(userdata.passwordValidity && userdata.emailValidity) {
            API.doLogin(userdata)
                .then((res) => {
                    if (res.status === 201) {
                        console.log("After the login was succesfull")
                        this.props.message(res)
                        this.props.history.push("/Welcome");
                    }
                    else {
                       this.props.message({message:"Wrong Username and Password"})
                    }
                })
        }
        if(!userdata.passwordValidity){
            this.props.message({message :"Password too short"})
        }
        if(!userdata.emailValidity){
            this.props.message({message :"Email format is not valid"})
        }



    };

        render(){
        return(
            <div>
                <div className="container">
                    <div id="login-box">
                        <div className="logo">
                            <img src="https://maidbot.com/wp-content/themes/maidbot_theme/images/loader-logo.png" alt="Logo"/>
                            <h1 className="logo-caption"><span className="tweak">L</span>ogin</h1>
                        </div>
                        <div className="controls">
                            <form>
                                <FormGroup
                                    controlId="EmailID"
                                    validationState={this.validateEmail()}
                                >
                        <FormControl type="text" name="username" placeholder="Username" className="form-control" autoComplete="false"
                               value={this.state.username}
                               onChange={(event) => {
                                   this.setState({
                                       username: event.target.value
                                   });
                               }}/>
                                <FormControl.Feedback/>
                                </FormGroup>

                                <FormGroup
                                    controlId="password"
                                    validationState={this.validatePassword()}
                                >
                        <FormControl type="password" name="password" placeholder="Password" className="form-control"
                               value={this.state.password}
                               onChange={(event) => {
                                   this.setState({
                                       password: event.target.value
                                   });
                               }}/>
                                    <FormControl.Feedback/>
                                </FormGroup>
                        <button type="button" className="btn btn-default btn-block btn-custom"
                                onClick={() =>this.handleSubmit(this.state)} >Login</button>

                            </form>
                        </div>
                    </div>
                </div>
                <Particles params={{
                    particles: {
                        line_linked: {
                            shadow: {
                                enable: true,
                                color: "#3CA9D1",
                                blur: 5
                            }
                        }
                    }
                }}
                           style={{
                               width: '100%',
                           }}/>
            </div>
        );
    }
}

function mapStateToProps(userdata) {
    return {userdata};
}

function mapDispatchToProps(dispatch) {
    return{
        message:(data) => dispatch(message(data))
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));