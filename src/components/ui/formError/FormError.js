import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormError extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <React.Fragment>
                <div className="form-error">{this.props.errorMessage}</div>
            </React.Fragment>
        );
    }
}

FormError.propTypes = {
    errorMessage : PropTypes.string
};

export default FormError;