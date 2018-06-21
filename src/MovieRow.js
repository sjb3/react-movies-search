import React, { Component } from 'react'

class MovieRow extends Component {
  // const { movie } = this.props;
  viewMovie() {
    const url = `https://www.themoviedb.org/movie/${this.props.movie.id}`
    window.location.href = url;
  }

  render () {
    return (
      <div>
        <table key={this.props.movie.id}>
         <tbody>
           <tr>
             <td>
               <img width='100' src={this.props.movie.poster_path} alt='poster' />
             </td>
             <td>
               <h3>{this.props.movie.title}</h3>
               <p>{this.props.movie.overview}</p>
               <input type='submit' onClick={this.viewMovie.bind(this)} value='View' />
            </td>
           </tr>
         </tbody>
        </table>
      </div>
    )
  }
}

export default MovieRow