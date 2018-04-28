import React, {Component} from 'react';
import { Route, withRouter } from 'react-router-dom';
import * as API from '../api/Api';
import SignIn from "./SignIn";
import PropTypes from "prop-types";
import Message from "./Message";


class HomePage extends Component {

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        message:PropTypes.string.isRequired
    };

    componentWillMount(){
        API.checkSession().then((res)=>{
            if(res.status===200){
                this.props.history.push("/Welcome");
            }
        }).catch((error)=>{
            this.props.history.push("/")
        })
    }


    render() {
        return (
            <div>
                <div className="row">
                    <SignIn handleSubmit={this.props.handleSubmit}/>
                </div>
                <div>{this.props.message!==''?<Message message={this.props.message}/>:<div></div>}</div>
            </div>
        );
    }

}

export default withRouter(HomePage);