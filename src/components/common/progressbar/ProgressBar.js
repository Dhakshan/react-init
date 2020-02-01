import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PBActions from './ProgressBarAction';

class ProgressBar extends Component {
    constructor(props) {
        super(props)
        console.log(this.props);
    }
    render() {
        return (
            <React.Fragment>
                <div className={'progress-bar '+ this.props.pb.show}>{this.props.pb.text||"Loading"}</div>
            </React.Fragment>
        );
    }
}

ProgressBar.propTypes = {
    pb: PropTypes.object
};

function mapStateToProps(state) {
    return {
        pb: state.ProgressBarR
    };
}

function mapDispatchToProps(dispatch) {
    return {
        PBActions: bindActionCreators(PBActions, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProgressBar);