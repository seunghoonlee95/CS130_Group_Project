import React, { useState } from "react";
import { Navigate } from "react-router-dom";

//TODO: redirect to page once logged in
//show error on invalid login
//Note: to regsiter/login only email and password will be needed
//once logged in, go into account home to set username, phone number, skills, etc
class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("state")) || {
      loggedIn: false,
      signup: false,
      invalidLogin: false,
      invalidSignUp: false,
      username: "",
      errorMessage: "",
    };

    this.checkSignIn = this.checkSignIn.bind(this);
    this.register = this.register.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    if (window.localStorage.getItem("loggedIn") === null) {
      window.localStorage.setItem("loggedIn", "false");
    }
  }

  setState(state) {
    window.localStorage.setItem("state", JSON.stringify(state));
    super.setState(state);
  }

  changeMode = () => {
    this.setState({ signup: !this.state.signup });
  };

  handleLogout = (event) => {
    const requestOptions = {
      method: "post",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
    };
    fetch("api/auth/signout", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          console.log("Error Logging Out. Please try again.");
          console.log(result);
        } else {
          this.setState({ loggedIn: false, username: "", userInfo: {} });
          window.localStorage.setItem("loggedIn", "false");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  checkSignIn(event) {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    var object = {};
    formData.forEach((value, key) => (object[key] = value));
    var data = JSON.stringify(object);

    const requestOptions = {
      method: "post",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    fetch("api/auth/signin", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          console.log(result);
          this.setState({ invalidLogin: true });
        } else {
          this.setState({ loggedIn: true, invalidLogin: false });
          window.localStorage.setItem("loggedIn", "true");
          const userReqOpt = {
            method: "get",
            credentials: "same-origin",
            headers: { "Content-Type": "application/json" },
          };
          console.log("get user data from database: ", JSON.parse(data));
          const email = JSON.parse(data).email;
          fetch(`api/user/${email}`, userReqOpt)
            .then((res) => res.json())
            .then((result) => {
              if (result.error) {
                console.log(result);
                this.setState({ invalidLogin: true });
              } else {
                console.log(result.userData);
                window.localStorage.setItem(
                  "userInfo",
                  JSON.stringify(result.userData)
                );
              }
            });
        }
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
        console.log("handle errors later plz");
      });
  }

  register(event) {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();

    var object = {};
    formData.forEach((value, key) => (object[key] = value));
    object.taskAccepted = [];
    object.taskCreated = [];
    object.tasker = false;
    var data = JSON.stringify(object);

    const requestOptions = {
      method: "post",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    fetch("api/auth/signup", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          this.setState({ invalidSignUp: true, errorMessage: result.error });
        } else {
          this.setState({ loggedIn: true, invalidSignUp: false });
          console.log(result);
          window.localStorage.setItem(
            "userInfo",
            JSON.stringify(result.userData)
          );
          window.localStorage.setItem("loggedIn", "true");
          window.location.reload(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  signUp() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={this.register}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign Up</h3>
            {this.state.invalidSignUp && <p>{this.state.errorMessage}</p>}
            <div className="text-center">
              Already registered?{" "}
              <span className="link-primary" onClick={this.changeMode}>
                Sign In
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Username</label>
              <input
                type="text"
                name="username"
                className="form-control mt-1"
                placeholder="Username"
              />
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Email Address"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Password"
                minLength={6}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  }

  signIn = () => {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={this.checkSignIn}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span
                id="auth-page-sign-up-button"
                className="link-primary"
                onClick={this.changeMode}
              >
                <a>Sign Up</a>
              </span>
            </div>
            {this.state.invalidLogin && (
              <div>
                <br />
                <p>
                  Your login credentials could not be verified, please try
                  again.
                </p>
              </div>
            )}
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    );
  };

  logOut = () => {
    //TODO: maybe navigate to user page or something else?
    return (
      <div className="d-grid gap-2 mt-3">
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={this.handleLogout}
        >
          Logout
        </button>
        <br />
      </div>
    );
  };

  render() {
    if (this.state.loggedIn) {
      return (
        //<Navigate to='/' />
        <div>{this.logOut()}</div>
      );
    } else if (this.state.signup) {
      return <div>{this.signUp()}</div>;
    }
    return <div>{this.signIn()}</div>;
  }
}

export default Auth;
