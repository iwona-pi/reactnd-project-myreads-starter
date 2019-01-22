import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Book from './Book'


class Bookshelf extends Component {
	state: {
		books: []
	}

	static propTypes = {
   		NewPage: PropTypes.func.isRequired,
   		results: PropTypes.array.isRequired
  }


	
	render () {
		
		const { NewPage, results, updateBook, title} = this.props
			
		return (

              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">{title}</h2>
					<div className="search-books-results">
 		
 						<ol className="books-grid">
							{results.map(book => (
                      
                      		<Book

		                       updateBook = {updateBook}
		                       key= {book.id}
		                       book = {book}
		                       imageLinks = {book.imageLinks}
		                       shelf = {book.shelf}
		                       title = {book.title}
		                       authors = {book.authors}
		                    	
		                    />))}
  						</ol>
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