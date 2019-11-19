import React from 'react';
import Tabs from './../Tabs';
import AddBook from './AddBook';
import DeleteBook from './DeleteBook';
//import style from './style.module.css';


function BookForm() {
    return (
        <Tabs>
            {{ title: 'Add', content: <AddBook /> }}
            {{ title: 'Delete', content: <DeleteBook /> }}
            {{ title: 'Update', content: <DeleteBook /> }}
        </Tabs>
    );
}


export default BookForm;
