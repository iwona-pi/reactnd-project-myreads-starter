import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Results extends Component {
	state = {
		books: {}
	}


 componentDidMount() {
   BooksAPI.getAll().then((boo) => {
      
      this.setState({books: boo})
})}
 		updateBook = (book, shelf) => {
		if (shelf !== 'move') {
      BooksAPI.update(book, shelf).then((res) => 
                 
         console.log(res)
                 
                  
                  )}
                  
}

 render () {

 	const {results, class1="search-books-results"} = this.props
 	
 	return (
 		<div className={class1}>
 			{results.length >0 &&
 			<ol className="books-grid">
 			{results.map((result, i) => 
 				<li key={i} >
					<div className="book">
                          <div className="book-top">
                          	{result.imageLinks  &&
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${result.imageLinks.smallThumbnail})` }}></div>}
                            <div className="book-shelf-changer">
                              <select onClick={(e) => this.updateBook(result, e.target.value)} defaultValue="move">
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

