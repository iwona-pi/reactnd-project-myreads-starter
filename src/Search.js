import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Results from './Results'
 


class Search extends Component {
  state = {
    results: [],
    query: ''
  }

  handleSearch = (a) => {
      this.setState(
        {query: a},
        () => {
          if (this.state.query && this.state.query.length > 0) {
              this.searchBooks(a)
          } else {
            this.setState({results: []})
          }
        })
  }
  searchBooks = (query) => {
      BooksAPI.search(query).then((books) => 
                  this.setState({results: books})).catch(function(e){
                    console.log("error")
                  })
}

 
    
    render () {
        const { StartPage } = this.props
        
         return (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => StartPage()}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"
                onChange={(event) => {this.handleSearch(event.target.value)}}
                   

                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                <Results
                results = {this.state.results}/>
                
              </ol>
            </div>
          </div>
    )
}}

export default Search;
        