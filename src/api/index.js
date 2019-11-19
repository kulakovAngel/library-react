import axios from 'axios';
import { BASE_URL } from './../consts.js';



//let axiosConfig = {
//  headers: {
//      'Content-Type': 'application/json;charset=UTF-8',
//      "Access-Control-Allow-Origin": "*",
//  }
//};



export const logIn = (personDtata) => (
    axios.post(`${BASE_URL}/auth/login`, personDtata)
    .then( res => JSON.parse(res.data) )
);



//export const logIn = (personData) => {
//    
//    const formData = new FormData();
//    
//    formData.append('login', personData['login']);
//    formData.append('password', personData['password']);
//    
//    return fetch(`${BASE_URL}/auth/login`, {
//        //mode: 'no-cors',
//        method: 'POST',
//        //headers: { 'Content-Type': 'application/json;charset=utf-8' },
//        //body: JSON.stringify(personData)
//        body: formData
//    })
//    .then(res => res.json() )
//};

export const signIn = (personData) => (
    axios.post(`${BASE_URL}/auth/signin`, personData)
    .then( res => JSON.parse(res.data))
);

export const getBooks = () => (
    axios.get(`${BASE_URL}/book`)
    .then( res => res.data)
);

export const getSingleBook = (id) => {
    return axios.get(`${BASE_URL}/book/${id}`)
    .then( res => res.data)
};

export const postBook = (bookData) => (
    axios.post(`${BASE_URL}/book`, bookData)
    .then( res => res.data)
);

export const postVisit = (data) => (
    axios.post(`${BASE_URL}/visit`, data)
    .then( res => res.data)
);

export const getReaders = () => (
    axios.get(`${BASE_URL}/reader`)
    .then( res => res.data)
);