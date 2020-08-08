import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./like";
import Table from "./common/table";

class MovieTable extends Component {
  columns = [
    {
      path: "title",
      label: "Title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: (movie) => (
        <Like
          className="m-2"
          handleLike={() => this.props.onLike(movie)}
          liked={movie.liked}
        />
      ),
    },
    {
      key: "delete",
      content: (movie) => (
        <button
          onClick={() => this.props.onDelete(movie._id)}
          className="btn-danger btn-sm btn m-2"
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, onSort, sortCol } = this.props;
    return (
      <table className="table">
        <Table
          columns={this.columns}
          data={movies}
          onSort={onSort}
          sortCol={sortCol}
        />
      </table>
    );
  }
}

export default MovieTable;
