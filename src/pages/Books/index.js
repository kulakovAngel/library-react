import React from 'react';
import { connect } from 'react-redux';

import BooksList from './../../components/BooksList';
import { setTitle } from './../../helpers';

function PageBooks(props) {
    
    setTitle('Books', props.pageTitle.title, props.dispatch);

    return (
        <>
            <section>
                <h2>Books</h2>
                <p>Books PAge</p>
                <BooksList />
            </section>
        </>
    );
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);


export default connect(mapStateToProps)(PageBooks);