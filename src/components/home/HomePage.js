import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../vendor/custom/pages/home.scss';
import LoginForm from '../login/LoginForm';
import * as Actions from '../login/LoginAction';
import { history } from '../../store/configureStore';
import * as PBActions from '../common/progressbar/ProgressBarAction';
import ProgressBar from '../common/progressbar/ProgressBar';

class HomePage extends Component {
  static propTypes = {
    prop: PropTypes
  }

  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values){
      const { email, password } = values;
      if (email && password) {
          this.props.PBActions.enable({show:true,text:"Authenticating.."});
          this.props.Actions.login({
            title: 'foo',
            body: 'bar',
            userId: 1
          }).then(()=>{
            this.props.PBActions.enable({show:false});
            history.push("dashboard");
          },()=>{
            this.props.PBActions.enable({show:false});
          });
      }
  }

  render() {
    return (
      <div className="home-page">
        <ProgressBar></ProgressBar>
        <div className="container">
          <div className="row align-items-center justify-content-center mnvh">
              <div className="col-12 col-sm-8 col-smd-6">
                <div className="p-5 bg white">
                  <h6 className="font-semibold">Login</h6>
                  <p>Welcome to Birthday Event Creator</p>
                  <LoginForm onSubmit={this.handleSubmit} />
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {
  Actions : PropTypes.object.isRequired,
  pb : PropTypes.object
};

function mapStateToProps(state) {
  return {
    login : state.LoginReducer,
    pb : state.progressbar
  };
}

function mapDispatchToProps(dispatch) {
  return {
    Actions : bindActionCreators(Actions,dispatch),
    PBActions : bindActionCreators(PBActions,dispatch)
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);