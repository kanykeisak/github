import React from 'react';
import classes from './BookList.module.css'
import Button from "../button/Button";

const BookList = ({books, onDelete}) => {
    return (
        <ul className={classes.list}>
            {books.map((book, index) => (
                <li key={index} className={classes.item}>
                    {book}
                    <Button label="Удалить" onClick={() => onDelete(index)} color={'red'}/>
                </li>
            ))}
        </ul>
    );
};

export default BookList;