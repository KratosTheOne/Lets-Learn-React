import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const Login = () => {

    const [user, setUser] = useState({});
    const { state } = useLocation();

    const loginUser = (values) => {
        let response = {};
        // Authentication is here (hardcoded)
        if(values.email === "kaustubhsinha@gmail.com") {
            response = {
                name : "Kaustubh",
                email : values.email,
                authenticated : true
            }
        } else {
            response = {
                authenticated : false
            }
        }
        return response;
    }
    return (
        <div className="Login-container">
            <h1>Login Page</h1>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                    errors.email = 'Required';
                    } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                    errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={async (values, { setSubmitting }) => {
                    setSubmitting(true);
                    const response = await loginUser(values);
                    console.log("OnSubmit", response);
                    setUser(response);
                    //setSubmitting(false);
                }}
                >
                {({ isSubmitting }) => (
                    <Form className="login-form">
                        <span className='login-msg'>{state.msg ? state.msg : "Welcome to Yum Yum Foods!"} Please Login!</span>
            
                        <img className="logo" alt="logo" src= ".../Assets/yumyumLogo.jpg" />
                        {isSubmitting && <div>Loading...</div>}
                        <div className="email">
                            <label htmlFor="email" className="email-label">Email</label>
                            <Field type="email" name="email" id="email" />
                            <ErrorMessage name="email" component="div"  id="pwd" />
                        </div>
            
                        <div className="pwd">
                            <label htmlFor="password" className="pwd-label">Password</label>
                            <Field type="password" name="password" id="pwd"/>
                            <ErrorMessage name="password" component="div" />
                        </div>
            
                        <div className='submit'>
                            <button className="submit-btn" type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                        </div>
                    </Form>
                )
            }
            </Formik>
            {user.authenticated && <Navigate to="/" state={user} replace={true} />}
        </div>
    )
};

export default Login;