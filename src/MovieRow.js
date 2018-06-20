import React, { Component } from 'react'

class MovieRow extends Component {
  // const { movie } = this.props;

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
               <h5>{this.props.movie.title}</h5>
               <p>{this.props.movie.overview}</p>
            </td>
           </tr>
         </tbody>
        </table>
      </div>
    )
  }
}

export default MovieRow