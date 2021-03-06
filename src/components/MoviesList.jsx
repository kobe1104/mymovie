import React, { Component } from "react";
import { getMovies } from "../data/fakeMovieService";
import MovieTable from "./MovieTable";
import Pagination from "./common/pagination";
import SearchBox from "./common/searchBox";
import { paginate } from "../utils/paginate";
import { Link } from "react-router-dom";
import { getGenres } from "../data/fakeGenreService";
import { ListGroup } from "./common/listGroup";
import _ from "lodash";

class MoviesList extends Component {
  state = {
    allMovies: [],
    allGenres: [],
    searchQuery: "",
    pageSize: 4,
    currentPage: 1,
    sortCol: { path: "title", order: "asc" },
  };
  componentDidMount() {
    const allGenres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ allMovies: getMovies(), allGenres });
  }
  handleItemSelect = (genre) => {
    this.setState({ currentGenre: genre, searchQuery: "", currentPage: 1 });
  };
  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentGenre: null, currentPage: 1 });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleRemove = (id) => {
    const movies = this.state.allMovies.filter((m) => m._id !== id);
    this.setState({ allMovies: movies });
  };
  handleLike = (movie) => {
    let allMovies = [...this.state.allMovies];
    let idx = allMovies.indexOf(movie);
    allMovies[idx].liked = !allMovies[idx].liked;
    this.setState({ allMovies });
  };
  handleSort = (sortCol) => {
    this.setState({ sortCol });
  };
  getMovieData = () => {
    const {
      pageSize,
      currentPage,
      allMovies,
      currentGenre,
      searchQuery,
      sortCol,
    } = this.state;
    let filteredMovies = allMovies;
    if (searchQuery) {
      filteredMovies = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    } else if (currentGenre && currentGenre._id) {
      filteredMovies = allMovies.filter(
        (m) => m.genre._id === currentGenre._id
      );
    }
    const sorted = _.orderBy(filteredMovies, [sortCol.path], [sortCol.order]);

    const movies = paginate(sorted, currentPage, pageSize);
    return { totalCount: filteredMovies.length, data: movies };
  };
  render() {
    const { pageSize, currentPage, sortCol, searchQuery } = this.state;
    const { totalCount, data: movies } = this.getMovieData();
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={this.state.allGenres}
            currentGenre={this.state.currentGenre}
            handleItemSelect={this.handleItemSelect}
          />
        </div>
        <div className="col">
          <Link
            to="/movies/new"
            className="btn btn-primary"
            style={{ marginBottom: 20 }}
          >
            New Movie
          </Link>
          {this.state.allMovies.length ? (
            <h1>currently showing:{totalCount} movies</h1>
          ) : (
            <h1>there's no movies</h1>
          )}
          <SearchBox value={searchQuery} onChange={this.handleSearch} />
          {totalCount > 0 && (
            <MovieTable
              movies={movies}
              sortCol={sortCol}
              onLike={this.handleLike}
              onDelete={this.handleRemove}
              onSort={this.handleSort}
            />
          )}
          <Pagination
            pageSize={pageSize}
            itemCount={totalCount}
            currentPage={currentPage}
            handlePageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default MoviesList;
