import React from 'react';

import NavLinks from './../../components/NavLinks';
import { DEVELOPER, CONTACTS } from './../../consts';
import style from './style.module.css';

function Footer() {
    return (
        <footer className={ style.documentFooter }>
            <section className={ style.section }>
                <h4 className={ style.heading }>The Echarts example</h4>
                <p>&copy;{DEVELOPER}, {new Date().getFullYear()}</p>
                <p>All rights reserved</p>
            </section>
            <section className={ style.section }>
                <h4 className={ style.heading }>Quick links:</h4>
                <NavLinks />
            </section>
            <section className={ style.section }>
                <h4 className={ style.heading }>Contacts:</h4>
                <p>{CONTACTS}</p>
            </section>
        </footer>
    );
}

export default Footer;