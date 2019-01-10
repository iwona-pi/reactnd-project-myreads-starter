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
    newPage: ''
  }
  wer = ()=> {
    BooksAPI.getAll().then((boo) => {
      
      console.log({boo});
    })
} 
componentDidMount() {
  this.setState({ newPage: window.location.href });
  this.wer();
  
}
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
            <Bookshelf
            NewPage = {this.onClick}
             />
          )}/>
          
          <Route path='/search' render={({history}) => (
            <Search
            StartPage = {this.onClick}/>
          )}/>
        
      </div>
    )
  }
}

export default BooksApp
