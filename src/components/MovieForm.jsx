import React from "react";
import Form from "./common/form";
import { getMovies, getMovie, saveMovie } from "../data/fakeMovieService";
import * as genreAPI from "../data/fakeGenreService";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    movies: getMovies(),
    errors: {},
  };
  componentWillMount() {}
  componentDidMount() {
    // fetch genres
    const genres = genreAPI.getGenres();
    this.setState({ genres });
    // if no movie ID break, else if no movie found go not found page
    // else populate from with movie
    const movieId = this.props.match.params.id;
    if (movieId === "new") return;

    const movie = getMovie(movieId);
    if (!movie) return this.props.history.replace("/not-found");
    this.setState({ data: this.mapMovieModel(movie) });
  }
  mapMovieModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };
  showError = () => {
    console.log(this.state.data);
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    console.log(result);
  };
  schema = {
    _id: Joi.string(),
    title: Joi.string().required().label("Title"),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .required()
      .min(0)
      .max(100)
      .label("Number In Stock"),
    dailyRentalRate: Joi.number().required().min(0).max(10).label("Rate"),
  };
  doSubmit = () => {
    // call save movie API
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("title", "Title", true)}
        {this.renderSelect("genreId", "Genre", this.state.genres)}
        {this.renderInput("numberInStock", "Number In Stock")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderButton("Save")}
      </form>
    );
  }
}

export default MovieForm;
