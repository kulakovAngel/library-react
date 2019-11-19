import React from 'react';

import style from './style.module.css';


export const CustomField = (props) => {
    const { input, type, placeholder, meta: { touched, error } } = props;
    return (
        <>
            <input { ...input } placeholder={ placeholder } type={ type } className={ style.textInput } />
            {touched && ((error && <span className={ style.message }>{ error }</span>))}
        </>
    )
}