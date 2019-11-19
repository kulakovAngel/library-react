import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { CustomField } from './CustomField';
import { validateSignIn } from './validate';
import style from './style.module.css';


function Signin(props) {
    
    const { auth, handleSubmit, pristine, submitting, reset } = props;
    
    const sending = (values) => {
        reset();
        props.dispatch({
            type: 'TRY_SIGN_IN',
            payload: values
        });
        
    }
    
    return (
        <form onSubmit={ handleSubmit(sending) } className={ style.formContainer }>
            <Field
                name='name'
                component={ CustomField }
                type='text'
                placeholder='Name*'
            />
            <Field
                name='login'
                component={ CustomField }
                type='text'
                placeholder='Login*'
            />
            <Field
                name='password'
                component={ CustomField }
                type='text'
                placeholder='Password*'
            />
            <button type='submit' disabled={ pristine || submitting } className={ style.button }>
                Submit
            </button>
            { auth.message ? auth.message : auth.SIGN_IN_FAIL }
        </form>
    );
}


const mapStateToProps = state => (
    { auth: state.auth }
);


export default reduxForm({
    form: 'signin_form',
    validate: validateSignIn,
}) (connect(mapStateToProps)(Signin));