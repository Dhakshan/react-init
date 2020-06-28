import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NBActions from './NavbarAction';
import { history } from '../../../store/configureStore';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "app" : {
                "list" : [
                    {
                        "label" : "Home",
                        "url" : ""
                    }
                ]
            },
            "admin" : {
                "list" : [
                    {
                        "label" : "Dashboard",
                        "url" : "dashboard"
                    }
                ],
                "usermenu" : {
                    "list" : [
                        {
                            "label" : "Logout",
                            "method" : "logout"
                        }
                    ] 
                }
            }
        }
    }
    goTo(p){
        if(p.item.url){
            history.push(p.item.url);
        }
        if(p.item.method && this[p.item.method]){
            this[p.item.method](p);
        }
    }
    logout(){
        history.replace('/');
    }
    render() {
        return (
            <React.Fragment>
                <div className="app-navbarmain">
                    <div className="inner">
                        <div className="nav-wrapper">
                            <div className="row align-items-center">
                                <div className="col">
                                    <ul className="navlist">
                                        {
                                            (this.state[this.props.nb.type])&&
                                            this.state[this.props.nb.type].list.map((item,i)=>{
                                                return (
                                                    <li key={i} className={(item.url==this.props.nb.current_page)?'active':''}>
                                                        <a onClick={this.goTo.bind(this,{item,i})} href={null} title={item.label}>{item.label}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="nav-user-menu">
                                        {
                                            (this.props.nb.type=="admin")&&
                                            this.state.admin.usermenu.list.map((item,i)=>{
                                                return (
                                                    <li key={i} className={''}>
                                                        <a onClick={this.goTo.bind(this,{item,i})} href={null} title={item.label}>{item.label}</a>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

Navbar.propTypes = {
    nb: PropTypes.object
};

function mapStateToProps(state) {
    return {
        nb: state.NavbarR
    };
}

function mapDispatchToProps(dispatch) {
    return {
        NVActions: bindActionCreators(NBActions, dispatch)
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);