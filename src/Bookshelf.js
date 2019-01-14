import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'


class Bookshelf extends Component {
	state: {
		books: []
	}

	static propTypes = {
   		NewPage: PropTypes.func.isRequired
  }

/*	moveBook = () => {
		BooksAPI.getAll().then((boo) => {
      		this.setState({books: boo})    
    })
	}*/
		


/*
	componentDidMount() {
    	BooksAPI.getAll().then((boo) => {
      		this.setState({books: boo})
     
    })
}*/
	
	render () {
		
		const { books, NewPage, class2 = "bookshelf-books"} = this.props
			
		return (
			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  
                      {/*{this.state.books.map((book) => 
						book.shelf === "currentlyReading" &&*/}
                      <Shelf
                      results = {books.filter(function(book) {
                      	return book.shelf === "currentlyReading"
                      })}
                      class1 = {class2}
                      updateBook = {this.props.updateBook}
                    	
                      />
  
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  	<Shelf
                      results = {books.filter(function(book) {
                      	return book.shelf === "wantToRead"
                      })}
                      class1 = {class2}
                      updateBook = {this.props.updateBook}

                      />
        
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  	 <Shelf
                      results = {books.filter(function(book) {
                      	return book.shelf === "read"
                      })}
                      class1 = {class2}
                      updateBook = {this.props.updateBook}
                      />
                 
                </div>
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => NewPage()}>Add a book</button>
            </div>
          </div>
			)
	}
}

export default Bookshelf;