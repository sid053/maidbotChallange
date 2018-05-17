import React, {Component} from 'react';
import {withRouter } from 'react-router-dom';
import * as API from '../api/Api';
import SignIn from "./SignIn";
import Message from "./Message";
import {connect} from "react-redux";


class HomePage extends Component {

    componentWillMount(){
        API.checkSession().then((res)=>{
            if(res.status===200){
                this.props.history.push("/Welcome");
            }
        })
    }


    render() {
        return (
            <div>
                <div className="row">
                    <SignIn handleSubmit={this.props.handleSubmit}/>
                </div>
                <div>{this.props.userdata.message!==''?<Message message={this.props.userdata.message}/>:<div></div>}</div>
            </div>
        );
    }

}
function mapStateToProps(userdata) {
    return {userdata};
}

export default withRouter(connect(mapStateToProps)(HomePage));