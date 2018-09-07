import React, { Component } from 'react'

class BookList extends Component {

    render() {

        const { book, ChangeShelf} = this.props;
        const { imageLinks, shelf, title, authors } = book ;
        let image = imageLinks ? imageLinks.thumbnail : 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
        image = image.replace("http://", "https://");

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 130,
                        height: 195,
                        backgroundImage: 'url(' + image +')' }}/>
                    <div className="book-shelf-changer">
                        <select 
                            onChange={(e) => 
                            ChangeShelf(book,e.target.value)} 
                            defaultValue={shelf}
                        >
                            <option value="none" disabled>
                                Move to...
                            </option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{Array.isArray(authors) ? authors.join(', ') : authors}</div>
            </div>);
    }
}
export default BookList