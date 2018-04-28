import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Message extends Component {

    static propTypes = {
        message: PropTypes.string.isRequired
    };

    render() {
        return (
            <div className="row justify-content-md-center">
                <div className="col-md-4"></div>
                <div className="col-md-4">

                        <div className="alert alert-warning" role="alert">
                            {this.props.message}
                        </div>

                </div>
                <div className="col-md-4"></div>
            </div>
        );
    }
}

export default Message;