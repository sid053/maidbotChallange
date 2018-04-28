import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormControl,FormGroup} from 'react-bootstrap'
import Particles from 'react-particles-js';
class SignIn extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

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
        return null;
    }

    validatePassword(){
        const length = this.state.password.length;
        if(length>8) {
            this.state.passwordValidity = true;
          return 'success';
        }
        else if(length>0 || length > 5){
            return 'warning';
        }
        return null;
    }

        render(){
        return(
            <div>
                <div className="container">
                    <div id="login-box">
                        <div className="logo">
                            <img src="https://maidbot.com/wp-content/themes/maidbot_theme/images/loader-logo.png" />
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
                                onClick={() =>this.props.handleSubmit(this.state)} >Login</button>

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

export default SignIn;