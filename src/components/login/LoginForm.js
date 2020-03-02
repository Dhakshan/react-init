import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from "yup";
import FormError from '../ui/formError/FormError';
import {history} from '../../store/configureStore';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
});

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }
  goto(url){
    history.push(url);
  }

  render() {
    return (
      <React.Fragment>
        <Formik
            initialValues={{ email: "dhakshinamurthy82@gmail.com", password: "abcd123456", rememberme:"yes"}}
            validationSchema={loginSchema}
            onSubmit={(values) => {
              this.props.onSubmit(values);
            }}
            render={({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
            }) => (
                <form method="POST" id="loginform" name="loginform" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="form-control medium" id="email" name="email" placeholder="Email address.." onChange={handleChange} onBlur={handleBlur} value={values.email} />
                        {errors && errors.email && touched.email && (
                            <FormError errorMessage={errors.email} />
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control medium" id="password" name="password" placeholder="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
                        {errors && errors.password && touched.password && (
                            <FormError errorMessage={errors.password} />
                        )}
                    </div>
                    <div className="form-group">
                      <button type="submit" className="button theme w">
                        <span className="spantxt">Get Inside</span>
                      </button>
                    </div>
                    <div className="form-group">
                      <a href={null}>Dasboard</a>
                    </div>
                </form>
            )}
        />
    </React.Fragment>
    );
  }
}

LoginForm.propTypes = {
  onSubmit : PropTypes.func 
};

export default LoginForm;