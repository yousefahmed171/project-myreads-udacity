import React, { Component } from 'react';
import BookList from "./BookList.js";

 class ShelfedBook extends Component {

    render() {
        const { TitleName, ChangeShelf, List} = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{TitleName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {List.map((book) => {
                            return <li key={book.id}>
                            <BookList 
                                book={book} 
                                ChangeShelf={ChangeShelf}/>
                                </li>
                            })
                        }
                    </ol>
                </div>
            </div>
        )
    }
}
export default ShelfedBook