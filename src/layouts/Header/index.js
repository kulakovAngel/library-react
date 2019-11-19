import React from 'react';
import { connect } from 'react-redux';

import style from './style.module.css';

function Header(props) {
    
    const { pageTitle, auth } = props;
    document.title = 'Library – ' + pageTitle.title;
    
    return (
        <header className={ style.documentHeader }>
            <h1 className={ style.pageTitle }>{ pageTitle.title }</h1>
            {auth.login && <div>Hello, {auth.name}</div>}
        </header>
    );
}

const mapStateToProps = state => ({
    pageTitle: state.pageTitle,
    auth: state.auth,
});

export default connect(mapStateToProps)(Header);