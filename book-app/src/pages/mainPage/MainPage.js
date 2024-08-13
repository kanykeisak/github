import React, { useState } from 'react';
import classes from './MainPage.module.css'
import BookList from "../../components/bookList/BookList";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState('');

    const addBook = () => {
        if (newBook.trim() !== '') {
            setBooks([...books, newBook]);
            setNewBook('');
        }
    };

    const deleteBook = (index) => {
        const updatedBooks = books.filter((_, i) => i !== index);
        setBooks(updatedBooks);
    };
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <p className={classes.p}>Добавить книгу</p>
            </div>
            <div className={classes.inputWrapper}>
                <div className={classes.inputName}>
                    <p className={classes.inputP}>Название: </p>
                    <Input
                        value={newBook}
                        onChange={(e) => setNewBook(e.target.value)}
                        placeholder="Введите название"
                    /></div>
                <div>
                    <Button label="Добавить" onClick={addBook} color={'blue'}/>
                </div>
            </div>
            <div className={classes.result}>
                <div className={classes.name}>
                    <p className={classes.inputPl}>Название</p>
                </div>
                <BookList books={books} onDelete={deleteBook}/>
            </div>
        </div>
    );
};

export default MainPage;