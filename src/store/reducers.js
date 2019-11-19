import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const authReducer = (state = {}, action) => {
    const payload = action.payload;
    
    switch(action.type) {
        case 'LOG_IN_SUCCESS':
            return {login: true, ...payload};
        case 'SIGN_IN_SUCCESS':
            return {login: false, ...payload};
            
        case 'LOG_IN_FAIL':
        case 'SIGN_IN_FAIL':
            return {login: false, [action.type]: action.message};
        
        case 'POST_BOOK_SUCCESS':
            const { ...newState } = state;
            newState.jwt = payload.jwt;
            return newState;
        default:
            return state;
    }
}

const bookReduser = (state = [], action) => {
    switch(action.type) {
        case 'ADD_BOOKS':
            return action.payload;
//        case 'ADD_PERSON_TO_ARRAY':
//            const [...newState] = state;
//            newState.push(action.payload)
//            return newState;
        default:
            return state;
    }
}

const readerReduser = (state = [], action) => {
    switch(action.type) {
        case 'ADD_READERS':
            return action.payload;
//        case 'ADD_PERSON_TO_ARRAY':
//            const [...newState] = state;
//            newState.push(action.payload)
//            return newState;
        default:
            return state;
    }
}

const singleBookReduser = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_SINGLE_BOOK':
            return action.payload;
//        case 'ADD_PERSON_TO_ARRAY':
//            const [...newState] = state;
//            newState.push(action.payload)
//            return newState;
        default:
            return state;
    }
}

const postReduser = (state = {}, action) => {
    switch(action.type) {
        case 'POST_BOOK_SUCCESS':
            return action.payload;
        case 'POST_BOOK_FAIL':
            return {error: action.message};
        case 'POST_VISIT_SUCCESS':
            return action.payload;
//        case 'ADD_PERSON_TO_ARRAY':
//            const [...newState] = state;
//            newState.push(action.payload)
//            return newState;
        default:
            return state;
    }
}

//const signInReducer = (state = {}, action) => {
//    switch(action.type) {
//        case 'SIGN_IN_SUCCESS':
//            return action.payload;
//        default:
//            return state;
//    }
//}

//const errorsReducer = (state = {}, action) => {
//    switch(action.type) {
//        case 'LOG_IN_FAIL':
//        case 'SIGN_IN_FAIL':
//            console.log('LOG_IN_FAIL');
//            console.log(action);
//            return {[action.type]: action.message };
//        case 'REMOVE_ERRORS':
//            return {};
//        default:
//            return state;
//    }
//}

const setPageTitleReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_PAGE_TITLE':
            return {title: action.payload};
        default:
            return state;
    }
}

const reducers = combineReducers({
    auth: authReducer,
    books: bookReduser,
    book: singleBookReduser,
//    user: signInReducer,
//    errors: errorsReducer,
    readers: readerReduser,
    serverMessage: postReduser,
    pageTitle: setPageTitleReducer,
    form: formReducer,
});

export default reducers;