import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class Results extends Component {
	kupa(s) {
		console.log(s)
	}

	updateBook = (book, shelf) => {
		if (shelf !== 'move') {
      BooksAPI.update(book, shelf).then((res) => 
                 console.log({res})
                  
                  )}
                  
}
 componentDidMount() {
   BooksAPI.getAll().then((boo) => {
      
      console.log({boo});
    })
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
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${result.imageLinks.smallThumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onClick={(e) => this.updateBook(result, e.target.value)}>
                                <option value="move" >Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{result.title}</div>
                          <div className="book-authors">df</div>
                    </div> 										
                </li>)}
 			</ol>
 }		</div>
 		)
 	
}}

export default Results

{/* <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
                            <div className="book-shelf-changer">
                              <select>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">1776</div>
                          <div className="book-authors">David McCullough</div>
                        </div>
                      </li>*/ }