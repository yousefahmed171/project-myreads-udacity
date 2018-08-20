import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI.js'
import BookPage from "./BookPage.js";
import Search from "./Search.js";
import './App.css'

class BooksApp extends Component {

   state = {
        books: [],
        showSearchPage: true,
    }

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books: books, showSearchPage: false })
        });
    }

    //App Component Constructor 
    constructor(props) {
    super(props);
    this.ChangeShelf = this.ChangeShelf.bind(this);
    }


    //Books Shelf
    ChangeShelf(book, shelf){
        BooksAPI.update(book, shelf).then(this.setState((state) => ({
            books: state.books.map(bo => {
                while (bo.title === book.title) {
                    bo.shelf = shelf;
                    return bo
                } 
                    return bo
            }),
            showSearchPage: false
        })));
        BooksAPI.update(book, shelf).then(() => this.setState((state) => {
            book.shelf = shelf
            const newBooks = state.books.filter(bookOnState => book.id !== bookOnState.id).concat(book)
            return { books: newBooks }
        })
        )
    };
    
    render() {

        const { books, showSearchPage } = this.state

        return (
            <div className="app">
                <Route exact path="/" render={() => (
                    <div>
                        <div className="list-books-title">
                            <h1>MyReads</h1>
                        </div>
                        {!showSearchPage ? (
                            <BookPage 
                                books={books}
                                ChangeShelf={this.ChangeShelf}
                            />
                            ) : (
                                <div className="loading"/>
                            )
                        }
                    </div>
                )}/>

                <Route path="/search" render={() => (
                    <Search 
                        ChangeShelf={this.ChangeShelf} 
                        books={
                            books.filter((book) => 
                                book.shelf === 'currentlyReading').concat(books.filter((book) => 
                                book.shelf === 'wantToRead'),books.filter((book) => 
                                book.shelf === 'read')
                        )}
                    />
                )}/>
            </div>
        )
    }

}
export default BooksApp