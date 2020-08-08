import React from "react";
import Form from "./common/form";
import { getMovies, getMovie, saveMovie } from "../data/fakeMovieService";
import * as genreAPI from "../data/fakeGenreService";
import Joi from "joi-browser";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      _id: "",
      genre: "",
      numberInStock: "",
      dailyRentalRate: "",
      genreId: "",
    },
    genres: genreAPI.getGenres(),
    movies: getMovies(),
    errors: {},
  };
  componentWillMount() {
    // set data if current movie exists
    if (this.props.match.params.id) {
      // const data = getMovie(this.props.match.params.id);
      const id = this.props.match.params.id;

      const data = this.state.movies.find(
        (m) => m._id === this.props.match.params.id
      );
      console.log("ss", data);

      // change genre to a string:
      const { name, _id } = data.genre;
      data.genre = name;
      data.genreId = _id;
      this.setState({ data });
    } else {
      // set movie id
      const newData = { ...this.state.data };

      newData._id = "2312313";
      // set action genre by default
      const action = genreAPI.getGenres()[0];
      newData.genre = action.name;
      newData.genreId = action._id;
      newData.liked = false;
      this.setState({ data: newData });
      console.log(this.state.data);
    }
  }
  componentDidMount() {
    // this.showError();
  }
  showError = () => {
    console.log(this.state.data);
    const result = Joi.validate(this.state.data, this.schema, {
      abortEarly: false,
    });
    console.log(result);
  };
  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number().required().label("Number In Stock"),
    dailyRentalRate: Joi.number().required().label("Rate"),
    _id: Joi.string(),
    liked: Joi.boolean(),
    genreId: Joi.string(),
  };
  doSubmit = () => {
    // call save movie api
    console.log("save movie");
    // put back genre obj
    const genre = this.state.genres.find((g) => {
      return g.name === this.state.data.genre;
    });
    this.state.data.genre = genre;
    this.state.data.genreId = genre._id;
    console.log("movie:", this.state.data);
    saveMovie(this.state.data);
    this.props.history.push("/");
  };
  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("title", "Title", true)}
        {this.renderInput("genre", "Genre")}
        {this.renderInput("numberInStock", "Number In Stock")}
        {this.renderInput("dailyRentalRate", "Rate")}
        {this.renderButton("Save")}
        <button onClick={this.showError}>show error</button>
      </form>
    );
  }
}

export default MovieForm;
