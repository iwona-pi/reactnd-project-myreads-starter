import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
// import PropTypes from 'prop-types'

class Results extends Component {


 render () {


 	const {results, books, updateBook} = this.props

 	let  res 
 	if (results.length >0) {
 	res = results.map(bookSearch => {
  		const bookExist = books.find(bookApp => bookApp.id === bookSearch.id); 
    if (bookExist) {
    	bookSearch.shelf = bookExist.shelf
  	} else {
   		bookSearch.shelf = 'none'} 
    return bookSearch; 
		
	})} else {
 		res = []
 	}
 	
 	return (
 		<div className="search-books-results">
 			{ res.length >0 &&
 			<ol className="books-grid">
 			{res.map((result, i) => 
 				<li key={i} >
					<div className="book">
                          <div className="book-top">
                          	{result.imageLinks  &&
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${result.imageLinks.smallThumbnail})` }}></div>}
                            <div className="book-shelf-changer">
                              <select onChange={(e) => updateBook(result, e.target.value)} defaultValue={result.shelf}>
                                <option value="move" disabled >Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{result.title}</div>
                          {result.authors &&
                          <div className="book-authors">{result.authors[0]}</div>}
                    </div> 										
                </li>)}
 			</ol>
 }		</div>
 		)
 	
}}

export default Results

