import React from 'react';
import { connect } from 'react-redux';

import BooksList from './../../components/BooksList';
import BookForm from './../../components/BookForm';
import BookDeliveryForm from './../../components/BookDeliveryForm';
import { setTitle } from './../../helpers';

function PageManager(props) {
    
    setTitle('Manage', props.pageTitle.title, props.dispatch);

    return (
        <>
            <section>
                <BooksList />
                <BookDeliveryForm />
                <BookForm />
            </section>
        </>
    );
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);


export default connect(mapStateToProps)(PageManager);