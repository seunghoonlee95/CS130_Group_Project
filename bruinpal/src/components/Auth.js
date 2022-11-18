import React, { useState } from "react";

//TODO: redirect to page once logged in
//show error on invalid login
class Auth extends React.Component{
 constructor(props){
  super(props);
  this.state = {
    loggedIn: false,
    username: '',
    signup: false
  }

  this.checkSignIn.bind(this);
  this.register.bind(this);
 }

 changeMode = () => {
  this.setState({ signup: !this.state.signup})
 }

 checkSignIn (event){
  const formData = new FormData(event.currentTarget);
  event.preventDefault();

  var object = {};
  formData.forEach((value, key) => object[key] = value);
  var data = JSON.stringify(object);

  const requestOptions = {
    method: "post",
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: data
  }
  fetch('api/auth/signin', requestOptions).then(res => {
    console.log(res.json());
    if(res.error){
      console.log("invalid login")
    }else{
      this.setState({loggedIn:true})
    }
  }).catch(err => {
    console.log(err)
    console.log("handle errors later plz")
  })

/*
  fetch('api/tasks/1').then(res => {
    console.log(res.json())
  })
  */
 }

 register(event){

 }

 signUp(){
  return (
      <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={this.register}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={this.changeMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>username</label>
            <input
              type="text"
              name="username"
              className="form-control mt-1"
              placeholder="e.g Danny Lee"
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
  )
 }

 signIn = () => {
    return(
      <div className="Auth-form-container">
          <form className="Auth-form" onSubmit={this.checkSignIn}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Sign In</h3>
              <div className="text-center">
                Not registered yet?{" "}
                <span id="auth-page-sign-up-button" className="link-primary" onClick={this.changeMode}>
                 <a>Sign Up</a> 
                </span>
              </div>
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
    )
  }



 render(){
  if(this.state.loggedIn){
    return(
      <div>
        log out
      </div>
    )
  }
  else if(this.state.signup){
    return (
      <div>
        { this.signUp() }
      </div>
    )
  }
  return (
    <div>
      { this.signIn() }
    </div>
  )
 }
}

export default Auth;
