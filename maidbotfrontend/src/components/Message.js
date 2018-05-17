import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Message extends Component {

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4"></div>
                <div className="col-md-4">

                        <div className="alert alert-warning" role="alert">
                            {this.props.userdata.message}
                            {console.log("Inside the message" + this.props.userdata.message)}
                        </div>

                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }
}

function mapStateToProps(userdata) {
    return {userdata};
}


export default withRouter(connect(mapStateToProps)(Message));

