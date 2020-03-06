import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableheader";
import TableBody from "./common/tablebody";

class MoviesTable extends Component {
  columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    { key: "like" },
    { key: "delete" }
  ];

  render() {
    const {
      movies,
      onLike,
      onDelete,
      onSort,
      sortColumn,
      moviesCount
    } = this.props;
    return (
      <React.Fragment>
        <p> There are {moviesCount} movies showing from database. </p>
        <table className="table">
          <TableHeader
            columns={this.columns}
            onSort={onSort}
            sortColumn={sortColumn}
          />
          <TableBody data={movies}  />
          <tbody>
            {movies.map(movie => (
              <tr key={movie._id}>
                <td> {movie.title} </td>
                <td> {movie.genre.name} </td>
                <td> {movie.numberInStock}</td>
                <td> {movie.dailyRentalRate} </td>
                <td>
                  <Like liked={movie.liked} onClick={() => onLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default MoviesTable;
