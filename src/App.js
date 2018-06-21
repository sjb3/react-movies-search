import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import $ from 'jquery';
import MovieRow from './MovieRow';
import NavBar from './components/NavBar';
import TextField from '@material-ui/core/TextField';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.performSearch()
    this.searchChangeHandler = this.searchChangeHandler.bind(this)
  }

  performSearch = (searchTerm) => {
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

  searchChangeHandler = (e) => {
    const searchTerm = e.target.value;
    this.performSearch(searchTerm)
  }

  render() {
    const { rows } = this.state;

    return (
      <div className="App">
          <NavBar />
          <form>
            <TextField
            style={{fontStyle:'italic'}}
            placeholder='Search Movie ...'
            onChange={this.searchChangeHandler}
            margin="normal"
          />
          </form>
        {rows}
      </div>
    );
  }
}

export default App;
