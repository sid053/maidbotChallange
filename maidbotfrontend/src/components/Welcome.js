import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as API from '../api/Api';
import {Panel} from 'react-bootstrap';
import Message from "./Message";

class Welcome extends Component {

    state={
        username:'',
        message:''
    }

    componentWillMount(){
        API.checkSession().then((res)=>{
            console.log("here");
            console.log(res);
            if(res.status===200){
                this.setState({
                    username:res.username,
                    message:res.message

                });
                this.props.history.push("/Welcome");
            }
            else{
                this.props.history.push("/")
            }

        }).catch((error)=>{
            this.props.history.push("/")
        })
    }

    doLogout(){
        API.doLogout().then((status)=>{
            if(status===201){
                this.props.history.push("/")
            }
        }).catch((error)=>{

        })
    }

    render(){
        return(
           <div>
                        <div>
                            <img src="https://maidbot.com/wp-content/themes/maidbot_theme/images/light-logo.png"/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <div className="col-md-12">
                            <Message message={this.state.username+"  "+ this.state.message }/>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="copyright" data-animation="fadeInUp">© Copyright 2017 Maidbot. All Rights Reserved</div>
                            </div>
                        </div>


           </div>
        )
    }
}

export default withRouter(Welcome);