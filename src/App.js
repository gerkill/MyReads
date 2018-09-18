import React, { Component } from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookSearch from './Components/BookSearch'
import CurrentReads from './Components/CurrentReads'
import WantToRead from './Components/WantToRead'
import HaveRead from './Components/HaveRead'

class BooksApp extends Component {
	state = {
		books: [],
	}

	/* Retrieves data from bookshelf */
	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.setState({ books: books })
		})
	}

	/* Updates the bookshelf */
	updateBook = (shelf, book) => {
		const bookIndex = this.state.books.findIndex(oldBook => oldBook.id === book.id)
		let newState
		if (bookIndex !== -1) {
			newState = Object.assign({}, this.state.books);
			newState[bookIndex].shelf = shelf
		}
		BooksAPI.update(book, shelf)
		console.log(this.state);
		if(newState !== this.state.books) {}
		console.log(newState);
		this.setState({ newState })
	}

	/*The main render method containing the react components */
	render() {
		return (
			<div className="app">
				<Switch>

					<Route exact path="/" render={(props) => (
						<div className="list-books">
							<div className="list-books-title">
								<h1>MyReads: A Book Tracking App</h1>
							</div>
							<div className="list-books-content">
								<div>
									<CurrentReads onUpdateBook={this.updateBook} books={this.state.books} />
									<WantToRead onUpdateBook={this.updateBook} books={this.state.books} />
									<HaveRead onUpdateBook={this.updateBook} books={this.state.books} />
								</div>
							</div>
							<div className="open-search">
								<Link to="/search">Add A Book</Link>
							</div>
						</div>
					)} />

					<Route path="/search" render={(props) => (
						<BookSearch
							onUpdateBook={this.updateBook}
							books={this.state.books}
							onNavigate={this.refresh}
						/>
					)} />
				</Switch>
			</div>
		)
	}
}

export default BooksApp
