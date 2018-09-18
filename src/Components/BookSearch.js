import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import sortBy from 'sort-by'

class BookSearch extends Component {

	state = {
		query: []
	}
	/*Search query based on user-input*/
	updateQuery = (query) => {
		BooksAPI.search(query).then((books) => {
			if (books.error) {
				this.setState({ query: [] })
			} else {
				this.setState({ query: books })
			}
		}).catch((e) => {
			this.setState({ query: [] })
		}
		)
	}

	/* Render search*/
	render() {
		const { query } = this.state
		let showingBooks
		if (query) {
			showingBooks = query
			showingBooks.sort(sortBy('title'))
		} else {
			showingBooks = []
		}

		/* Compare bookshelf to search query results and set shelf property
			of book object if it occurs in the search.
		*/
		let bookCase = this.props.books
		showingBooks.forEach((book) => {
			bookCase.forEach(myBook => {
				if (book.id === myBook.id) {
					book.shelf = myBook.shelf
				}
				if (book.shelf === undefined) {
					book.shelf = 'none'
				}
				console.log(book.shelf)
			})
		})

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<a href="/" className="close-search">Close Search</a>
					<div className="search-books-input-wrapper">
						<input type="text" placeholder="Search For Books By Title" value={this.query} onChange={(event) => this.updateQuery(event.target.value)} />
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{showingBooks.map((book) => (
							<li key={book.id} className="book-item">
								<div className="book">
									<div className="book-top">

										{book.imageLinks ? (
											<div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url(' + book.imageLinks.smallThumbnail + ')' }}></div>
										) : (
												<div className="book-cover" style={{ width: 128, height: 193 }}>No Image Available</div>
											)}

										<div className="book-shelf-changer">
											<select onChange={(event) => this.props.onUpdateBook(event.target.value, book)} value={book.shelf}>
												<option value="move" >Move to...</option>
												<option value="currentlyReading">Currently Reading</option>
												<option value="wantToRead">Want to Read</option>
												<option value="read">Read</option>
												<option value="none">Ignore</option>
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

export default BookSearch
