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
  wer = ()=> {
    BooksAPI.getAll().then((boo) => {
      
      console.log({boo});
    })
} 
componentDidMount() {
  this.setState({ newPage: window.location.href });
   BooksAPI.getAll().then((boo) => {
      
      this.setState({books: boo});
  console.log({boo})})
}

updateBook = (book, shelf) => {
    
 /*     if (book.shelf !==shelf) {
      let y = this.state.books
      const t = y.filter(d=> d.id === book.id)[0];
      t.shelf = shelf;
      BooksAPI.update(book, shelf).then((res) => 

             // console.log(res))
            this.setState({
              books: y
            }))*/
    BooksAPI.update(book, shelf).then((res) => 
     BooksAPI.getAll(res)).then((boo) => {
      
      this.setState({books: boo})})

         }

/*    value = () => {
    
    return this.state.books[0].shelf

}*/                              

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
            <div>
            <Bookshelf
            NewPage = {this.onClick}
            updateBook = {this.updateBook}
            // books = {this.state.books}
            results = {this.state.books.filter(function(book) {
                        return book.shelf === "currentlyReading"})}
             />
            
            <Bookshelf
            NewPage = {this.onClick}
            updateBook = {this.updateBook}
            
            results = {this.state.books.filter(function(book) {
                        return book.shelf === "wantToRead"})}
             />

             <Bookshelf
            NewPage = {this.onClick}
            updateBook = {this.updateBook}
            // books = {this.state.books}
            results = {this.state.books.filter(function(book) {
                        return book.shelf === "read"})}
             />
            </div>
          )}/>

          
          <Route path='/search' render={({history}) => (
            <Search
            StartPage = {this.onClick}
            />
          )}/>
        
      </div>
    )
  }
}

export default BooksApp
