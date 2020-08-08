import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import NavBar from "./components/common/NavBar";
import MovieForm from "./components/MovieForm";
import LoginForm from "./components/loginForm";
import registerForm from "./components/registerForm";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={registerForm} />
          <Route path="/movies/new" component={MovieForm} />
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={MoviesList}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="movies" />
          <Redirect to="not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
