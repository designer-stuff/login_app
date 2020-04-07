import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getGenres } from "./services/genreService";
import Login from "./components/login";
import Logout from "./components/logout";
import Register from "./components/register";
import ResetPassword from "./components/resetPassword";
import Genre from "./components/genre";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {
    genres: [],
  };

  async componentDidMount() {
    try {
      const { data: genres } = await getGenres();
      this.setState({ genres });
    } catch (ex) {}
  }

  render() {
    const { genres } = this.state;
    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <Switch>
          <Route path="/api/auth" component={Login} exact></Route>
          <Route path="/api/logout" component={Logout} exact></Route>
          <Route
            path="/api/register"
            render={(props) => <Register {...props}></Register>}
            exact
          ></Route>
          <Route
            path="/api/reset-password"
            component={ResetPassword}
            exact
          ></Route>
          <Route
            path="/api/genres"
            render={(props) => <Genre genres={genres} {...props}></Genre>}
            exact
          ></Route>
          <Redirect from="/" to="/api/auth"></Redirect>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
