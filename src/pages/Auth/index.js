import React from 'react';
import { connect } from 'react-redux';

import AuthForm from './../../components/AuthForm';
import { setTitle } from './../../helpers';

function PageAuth(props) {
    
    setTitle('Auth', props.pageTitle.title, props.dispatch);
    
    return (
        <>
            <section>
                <h2>Auth</h2>
                <AuthForm />
            </section>
        </>
    );
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);


export default connect(mapStateToProps)(PageAuth);