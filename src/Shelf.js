import React, { Component } from 'react'


class Shelf extends Component {



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
                              <select onClick={(e) => this.props.updateBook(result, e.target.value)}>
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
 	
}


}

export default Shelf