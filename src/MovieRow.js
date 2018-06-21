import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   margin: {
//     margin: theme.spacing.unit,
//   },
//   cssRoot: {
//     color: theme.palette.getContrastText(purple[500]),
//     backgroundColor: purple[500],
//     '&:hover': {
//       backgroundColor: purple[700],
//     },
//   },
//   bootstrapRoot: {
//     boxShadow: 'none',
//     textTransform: 'none',
//     fontSize: 16,
//     padding: '6px 12px',
//     border: '1px solid',
//     backgroundColor: '#007bff',
//     borderColor: '#007bff',
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:hover': {
//       backgroundColor: '#0069d9',
//       borderColor: '#0062cc',
//     },
//     '&:active': {
//       boxShadow: 'none',
//       backgroundColor: '#0062cc',
//       borderColor: '#005cbf',
//     },
//     '&:focus': {
//       boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
//     },
//   },
// });


class MovieRow extends Component {
  // const { movie } = this.props;
  viewMovie = () => {
    const url = `https://www.themoviedb.org/movie/${this.props.movie.id}`
    window.location.href = url;
  }

  render () {
    // const { classes } = props;
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

               <Button
                type='submit'
                onClick={this.viewMovie.bind(this)}
                variant="contained"
                color="primary"
              >View
              </Button>
            </td>
           </tr>
         </tbody>
        </table>
      </div>
    )
  }
}

export default MovieRow