import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import MovieRow from './MovieRow';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.performSearch()
    this.searchChangeHandler = this.searchChangeHandler.bind(this)
  }

  performSearch(searchTerm) {
    // console.log('>>>>>>>> Perform search', searchResults)
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=abf873cdb39470df5ade84f10bc046ec&query=${searchTerm}`

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        const results = searchResults.results;
        // console.log(results[0])
        const movieRows = []

        results.forEach((movie) => {
          movie.poster_path = `https://image.tmdb.org/t/p/w185${movie.poster_path}`
          // console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow);
        })
        this.setState({rows: movieRows})
      },
      error: (xhr, status, err) => {
        console.log('xxxxxxxxxxxx')
      }
    })
  }

  searchChangeHandler(e) {
    // e.preventDefault()
    // console.log(e.target.value)
    const searchTerm = e.target.value;
    this.performSearch(searchTerm)
  }

  render() {
    const { rows } = this.state;

    return (
      <div className="App">
        <table className='titleBar'>
          <tbody>
            <tr>
              <td>
                <i style={{color: '#f7bbe8', fontSize: '2em'}} className="fa fa-compass"></i>
              </td>
              <td width='16' />
              <td>
                <h1>Movies DB search</h1>
              </td>
            </tr>
          </tbody>
        </table>
        <input onChange={this.searchChangeHandler} style={{paddingLeft: 16, paddingTop: 8, paddingBottom: 8, fontSize: 20, display: 'block'}} placeholder='search ...' />
        {rows}
      </div>
    );
  }
}

export default App;
