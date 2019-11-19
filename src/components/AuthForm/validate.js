export const validateSignIn = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Name is required!';
    }
    if (!values.login) {
        errors.login = 'Login is required!';
    }
    if (!values.password) {
        errors.password = 'Password is required!';
    }
    return errors;
}


export const validateLogIn = values => {
    const errors = {};
    if (!values.login) {
        errors.login = 'Login is required!';
    }
    if (!values.password) {
        errors.password = 'Password is required!';
    }
    return errors;
}