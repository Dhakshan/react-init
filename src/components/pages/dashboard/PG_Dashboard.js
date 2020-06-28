import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// import '../../vendor/custom/pages/home.scss';

import * as PBActions from '../../common/progressbar/ProgressBarAction';
import ProgressBar from '../../common/progressbar/ProgressBar';
import Navbar from '../../common/navbar/Navbar';
import * as NavbarActions from '../../common/navbar/NavbarAction';

class PG_Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbar: {
                "type": "admin"
            }
        };
    }
    componentDidMount() {
        this.props.NavbarActions.update({ type: "admin", "current_page": "" });
    }
    render() {
        return (
            <div className="app-page">
                <Navbar ></Navbar>
                <ProgressBar></ProgressBar>
                <div className="container">
                    <div className="row align-items-center justify-content-center mnvh">
                        <div className="col-12 col-sm-8 col-smd-6">
                            <div className="p-5 bg white">
                                <h6 className="font-semibold">Light House</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PG_Dashboard.propTypes = {
    NavbarActions: PropTypes.object.isRequired,
    pb: PropTypes.object
};

function mapStateToProps(state) {
    return {
        login: state.LoginReducer,
        pb: state.progressbar,
        nb: state.navbar
    };
}

function mapDispatchToProps(dispatch) {
    return {
        PBActions: bindActionCreators(PBActions, dispatch),
        NavbarActions: bindActionCreators(NavbarActions, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PG_Dashboard);
