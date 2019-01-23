import React  from 'react'
import PropTypes from 'prop-types';

const Book = ({book, updateBook}) =>  

 (
 	<li>
		<div className="book">
           <div className="book-top">
           {book.imageLinks  &&
             <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>}
             <div className="book-shelf-changer">
               <select onChange={ (e) => updateBook(book, e.target.value) } defaultValue = {book.shelf}>
                 <option value="move" disabled>Move to...</option>
                 <option value="currentlyReading">Currently Reading</option>
                 <option value="wantToRead">Want to Read</option>
                 <option value="read">Read</option>
                 <option value="none">None</option>
               </select>
             </div>
           </div>
           <div className="book-title">{book.title}</div>
           {book.authors &&
           <div className="book-authors">{book.authors[0]}</div>}
         </div> 										
    </li>
 )
 		


 Book.propTypes = {
	
	imageLinks: PropTypes.object.isRequired,
	shelf: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	authors: PropTypes.array.isRequired,
	book: PropTypes.object.isRequired,
	updateBook: PropTypes.func.isRequired
}

export default Book;

