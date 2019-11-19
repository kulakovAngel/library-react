import { call, put, takeEvery } from 'redux-saga/effects';

import { logIn, signIn, getBooks, getSingleBook, postBook, getReaders, postVisit } from './../api';

function* logInSaga(action) {
    try {
        const person = yield call(logIn, action.payload);
        yield put({type: "LOG_IN_SUCCESS", payload: person});
        yield put({type: "REMOVE_ERRORS"});
    } catch (e) {
        yield put({type: "LOG_IN_FAIL", message: e.response.data.error});
    }
}

function* signInSaga(action) {
    try {
        const res = yield call(signIn, action.payload);
        yield put({type: "SIGN_IN_SUCCESS", payload: res});
        yield put({type: "REMOVE_ERRORS"});
    } catch (e) {
        yield put({type: "SIGN_IN_FAIL", message: e.response.data.error});
    }
}

function* getBooksSaga(action) {
    try {
        const res = yield call(getBooks); //добавить payload при пагинации
        yield put({type: "ADD_BOOKS", payload: res});
        yield put({type: "REMOVE_ERRORS"});///?
    } catch (e) {
        yield put({type: "GET_BOOKS_FAIL", message: e.response.data.error});
    }
}

function* getReadersSaga(action) {
    try {
        const readers = yield call(getReaders); //добавить payload при пагинации
        yield put({type: "ADD_READERS", payload: readers});
        yield put({type: "REMOVE_ERRORS"});///?
    } catch (e) {
        yield put({type: "GET_READERS_FAIL", message: e.response.data.error});
    }
}

function* getSingleBookSaga(action) {
    try {
        const book = yield call(getSingleBook, action.payload);
        yield put({type: "ADD_SINGLE_BOOK", payload: book});
        yield put({type: "REMOVE_ERRORS"});///?
    } catch (e) {
        console.log('error:');
        console.log(e);
        yield put({type: "GET_BOOKS_FAIL", message: 'e.response.data.error'});
    }
}

function* postBooksSaga(action) {
    try {
        const res = yield call(postBook, action.payload);
        yield put({type: "POST_BOOK_SUCCESS", payload: res});
        //yield put({type: "REMOVE_ERRORS"});
    } catch (e) {
        yield put({type: "POST_BOOK_FAIL", message: e.response.data.error});
    }
    
//    try {
//        const res = yield call(getBooks);
//        yield put({type: "ADD_BOOKS", payload: res});
//        yield put({type: "REMOVE_ERRORS"});///?
//    } catch (e) {
//        yield put({type: "GET_BOOKS_FAIL", message: e.response.data.error});
//    }
}

function* postVisitSaga(action) {
    try {
        const res = yield call(postVisit, action.payload);
        console.log('SAGA:')
        console.log(action.payload)
        yield put({type: "POST_VISIT_SUCCESS", payload: res});
        //yield put({type: "REMOVE_ERRORS"});
    } catch (e) {
        yield put({type: "POST_VISIT_FAIL", message: e.response.data.error});
    }
}

function* mySaga() {
    yield takeEvery("TRY_LOG_IN", logInSaga);
    yield takeEvery("TRY_SIGN_IN", signInSaga);
    yield takeEvery("GET_BOOKS", getBooksSaga);
    yield takeEvery("GET_SINGLE_BOOK", getSingleBookSaga);
    yield takeEvery("TRY_POST_BOOK", postBooksSaga);
    yield takeEvery("TRY_POST_VISIT", postVisitSaga);
    yield takeEvery("GET_READERS", getReadersSaga);
}

export default mySaga;