# MyReads: A Book Tracking App
This app is the React MyReads Project in Udacity's GWG FEND Nanodegree.

## Getting Started
1. Clone project `git clone git@github.com:gerkill/MyReads.git`
2. Install all project dependencies with `npm install`
3. Start the development server with `npm start` - this should open up your default browser window and begin serving the page. It will automatically reload on file save.

4. Alternatively to start from scratch you can run `create-react-app` and set up your own development build.

5. Install React Router `npm install react-router-dom`

## Built With
- [Starter Code for the React MyReads](https://github.com/udacity/reactnd-project-myreads-starter) - Udacity MyReads Project Starter Code
- [Create React App](https://github.com/facebookincubator/create-react-app)

## What's Included
- Users can view 3 shelves of books: Currently Reading, Want to read, and Read.
- Users can move a book from one shelf to another. Books are updated immediately.
- Users can click on "+Book" button to navigate to `/search` page
- Users can click on "Back" Button or Back broswer button to navigate to `/` main page with updated books
- Users can search different books by title, author, or [search terms](SEARCH_TERMS.md)

## Backend Server
The provided file [`BooksAPI.js`](src/BooksAPI.js) contains these methods:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 
