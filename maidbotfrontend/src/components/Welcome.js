import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import * as API from '../api/Api';
import Message from "./Message";
import {connect} from "react-redux";
import {message} from "../action/index";

class Welcome extends Component {

    componentWillMount(){

        API.checkSession().then((res)=>{
            if(res.status===200){
               this.props.message(res);
                this.props.history.push("/Welcome");
            }
            else{
                this.props.history.push("/")
            }
        })
    }
    doLogout=()=>{
        API.doLogout().then((res)=>{
            console.log(res)
            if(res.status===201){
                this.props.message({message:"You have successfully logged out"})
                this.props.history.push("/");
            }
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
                            <Message/>
                        </div>
                        <div>
                            <button className="btn btn-danger" onClick={this.doLogout}>Logout</button>
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

function mapStateToProps(userdata) {
    return {userdata};
}

function matchDispatchToProps(dispatch) {
    return{
    message :(data) => dispatch(message(data))
}
}

export default withRouter(connect(mapStateToProps,matchDispatchToProps)(Welcome));

