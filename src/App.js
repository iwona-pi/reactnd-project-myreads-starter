import React from 'react'
import { Route } from 'react-router'
import Bookshelf from './Bookshelf'
import Search from './Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    newPage: '',
    books: []
  }
 
componentDidMount() {
  this.setState({ newPage: window.location.href });
   BooksAPI.getAll().then((books) => {
      
      this.setState({books: books})})
}

updateBook = (book, shelf) => {

    BooksAPI.update(book, shelf).then((res) => 
     BooksAPI.getAll(res)).then((books) => {
      
      this.setState({books: books})})

         }
                              

onClick = () =>{
    let f = window.location
    if (f.pathname === '/') {
    this.setState({ newPage: f.pathname = 'search' })
    } else {
      this.setState({newPage: f.pathname = '/'})
    }
  }


 

  render() {
    return (
      <div className="app">
       
          <Route exact path='/' render={() => (
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <div className="list-books-content">
                <Bookshelf
                title = "Currently Reading"
                NewPage = {this.onClick}
                updateBook = {this.updateBook}
                results = {this.state.books.filter(function(book) {
                            return book.shelf === "currentlyReading"})}
                 />
                
                <Bookshelf
                title = "Want to Read"
                NewPage = {this.onClick}
                updateBook = {this.updateBook}
                results = {this.state.books.filter(function(book) {
                            return book.shelf === "wantToRead"})}
                 />
    
                 <Bookshelf
                title = "Read"
                NewPage = {this.onClick}
                updateBook = {this.updateBook}
                results = {this.state.books.filter(function(book) {
                            return book.shelf === "read"})}
             />
              </div>
            </div>

          )}/>

          
          <Route path='/search' render={({history}) => (
            <Search
            StartPage = {this.onClick}
            updateBook = {this.updateBook}
            />
          )}/>
        
      </div>
    )
  }
}

export default BooksApp
