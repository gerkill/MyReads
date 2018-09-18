import React, { Component } from 'react'

/* Define the Currently Reading section of the book app*/
class CurrentReads extends Component {
	render() {

		return (
			<div className="bookshelf">
            	<h2 className="bookshelf-title">Currently Reading</h2>
                	<div className="bookshelf-books">
		 				<ol className='books-grid'>

			{this.props.books.filter( book => book.shelf==='currentlyReading' ).map((book) => (
				<li key={book.id} className="book-item">
                        <div className="book">
                          <div className="book-top">
                            {book.imageLinks ? (
                            	<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + 		book.imageLinks.smallThumbnail + ')' }}></div>
								) : (
									<div className="book-cover" style={{ width: 128, height: 193 }}>No Image Available</div>
								)}
                            <div className="book-shelf-changer">
                              <select onChange={(event) => this.props.onUpdateBook(event.target.value, book)} value={book.shelf} >
                                <option value="move" >Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">Remove</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
			))}
					</ol>
				</div>
			</div>
		)
	}
}

export default CurrentReads