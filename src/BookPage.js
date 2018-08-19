
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf.js';

 class ShelfListBook extends Component {
    
    render() {
        
        const { ChangeShelf, books } = this.props
        const currentlyReading =  books.filter((book) => book.shelf === 'currentlyReading') 
        const wantToRead =  books.filter((book) => book.shelf === 'wantToRead') 
        const read =  books.filter((book) => book.shelf === 'read') 

        return (
            <div className="list-books">
                <div className="list-books-content">
                    <div>
                        <BookShelf 
                            TitleName='Currently Reading' 
                            List={currentlyReading} 
                            ChangeShelf={ChangeShelf}
                        />
                        <BookShelf 
                            TitleName='Want to Read'  
                            List={wantToRead} 
                            ChangeShelf={ChangeShelf}
                        />
                        <BookShelf 
                            TitleName='Read'  
                            List={read} 
                            ChangeShelf={ChangeShelf}
                        />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Adding book</Link>
                </div>
            </div>
        );
    }
}
export default  ShelfListBook