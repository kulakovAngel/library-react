import React from 'react';
import Tabs from './../Tabs';
import Signin from './Signin';
import LogIn from './Login';


function AuthForm() {
    return (
        <Tabs>
            {{ title: 'LogIn', content: <LogIn /> }}
            {{ title: 'Signin', content: <Signin /> }}
        </Tabs>
    );
}


export default AuthForm;
