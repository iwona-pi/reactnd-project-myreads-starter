import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import Shelf from './Shelf'


class Bookshelf extends Component {
	static propTypes = {
   		NewPage: PropTypes.func.isRequired
  }
	state = {
		books: []
	}

	moveBook = () => {
		BooksAPI.getAll().then((boo) => {
      		this.setState({books: boo})    
    })
	}
		updateBook = (book, shelf) => {
		if (shelf !== 'move') {
      BooksAPI.update(book, shelf).then((res) => 
                 
                 BooksAPI.getAll(res)).then((boo) => {
      
      this.setState({books: boo})}
                 
                  
                  )}
                  
}

	componentDidMount() {
    	BooksAPI.getAll().then((boo) => {
      		this.setState({books: boo})
     
    })
}
	
	render () {
		
		const { NewPage, class2 = "bookshelf-books"} = this.props
			
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
                      results = {this.state.books.filter(function(book) {
                      	return book.shelf === "currentlyReading"
                      })}
                      class1 = {class2}
                      updateBook = {this.updateBook}

                      />
  
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  	<Shelf
                      results = {this.state.books.filter(function(book) {
                      	return book.shelf === "wantToRead"
                      })}
                      class1 = {class2}
                      updateBook = {this.updateBook}

                      />
        
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  	 <Shelf
                      results = {this.state.books.filter(function(book) {
                      	return book.shelf === "read"
                      })}
                      class1 = {class2}
                      updateBook = {this.updateBook}
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