import React from 'react';
import { connect } from 'react-redux';

import { setTitle } from './../../helpers';

function PageBooks(props) {
    
    setTitle('', props.pageTitle.title, props.dispatch);

    return (
        <>
            <section>
                <h2>API</h2>
                <ol>
                    <li>
                        <p>
                            /api/auth/signin - присоединиться
                        </p>
                        <p>
                            method: POST
                        </p>
                        <p>
                            input: login, password, username
                        </p>
                        <p>
                            output: 'message': 'User added!'
                        </p>
                    </li>
                    <li>
                        <p>
                            /api/auth/login - войти
                        </p>
                        <p>
                            method: POST
                        </p>
                        <p>
                        input: login, password
                        </p>
                        <p>
                        output: name, jwt
                        </p>
                    </li>
                    <li>
                        <p>
                        /api/auth/logout - выйти
                        </p>
                        <p>
                        method: POST
                        </p>
                        <p>
                        input: -
                        </p>
                        <p>
                        output: 'message': 'Logout successfully!'
                        </p>
                    </li>
                    <li>
                        <p>
                        /api/book
                        </p>
                        <p>
                        method: GET - все книги
                        </p>
                        <p>
                        input: -
                        </p>
                        <p>
                        output: 'message': 'Logout successfully!'
                        </p>
                    </li>
                    <li>
                        <p>
                        /api/book/id - книга по id
                        </p>
                        <p>
                        method: POST
                        </p>
                        <p>
                        input: jwt
                        </p>
                        <p>
                        output: 'message': 'Logout successfully!'
                        </p>
                    </li>
                </ol>
            </section>
        </>
    );
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);


export default connect(mapStateToProps)(PageBooks);