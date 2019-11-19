import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import { CustomField } from './CustomField'
import { validateLogIn } from './validate';
import style from './style.module.css';


function AddBook(props) {
    console.log('%cSTORE:', 'color: #f66');
    console.log(props.store);
    
    const { auth, handleSubmit, pristine, submitting, reset } = props;
    
    console.log('props.post:');
    console.log(props.serverMessage);
    
    const sending = (values) => {
        const {...v} = values;
        v.jwt = auth.jwt;
        reset();
        props.dispatch({
            type: 'TRY_POST_BOOK',
            payload: v
        });
        console.log(v);
    };
    
    return (
        <form onSubmit={ handleSubmit(sending) } className={ style.formContainer }>
            <Field
                name='title'
                component={ CustomField }
                type='text'
                placeholder='Title*'
            />
            <Field
                name='author'
                component={ CustomField }
                type='text'
                placeholder='Author*'
            />
            <Field
                name='total'
                component={ CustomField }
                type='number'
                placeholder='Total*'
            />
            <Field
                name='available'
                component={ CustomField }
                type='number'
                placeholder='Available*'
            />
            <button type='submit' disabled={ pristine || submitting } className={ style.button }>
                Add the book
            </button>
            { props.serverMessage.message ? props.serverMessage.message : props.serverMessage.error }
        </form>
    );
}


const mapStateToProps = state => (
    { auth: state.auth, serverMessage: state.serverMessage, store: state }
);


export default reduxForm({
    form: 'login_form',
    validate: validateLogIn,
}) (connect(mapStateToProps)(AddBook));