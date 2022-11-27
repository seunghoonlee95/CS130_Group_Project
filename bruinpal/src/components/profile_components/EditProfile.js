import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  update(event) {

    for (let i = 0; i < event.target.length; i++) {
      console.log(event.target[i].name +': '+event.target[i].value);
    }
    let skills=event.target.skillsstring.value.split(',');
    let courses=event.target.coursesstring.value.split(',');
    console.log(skills);
    console.log(courses);
    console.log(event.target.username);
    event.preventDefault();
    //Devin
  }


  render() {
    return (
      <div className="Edit-form-container">
        <form className="Edit-form" onSubmit={this.update}>
          <div className="Edit-form-content">
            <h2 className="Edit-form-title">Edit Your Profile</h2>
            
            <div className="Edit-form-group mt-3">
            <h3 className="Auth-form-small-title">Basic Info</h3>
              <label className="test">Username</label> <input type="text" name="username" className="form-control mt-1" placeholder="Username" required/>
              <label>One-line Bio</label> <input type="text" name="onelinebio" className="form-control mt-1" placeholder="One-line Bio"/>
              <label>Email</label> <input type="email" name="email" className="form-control mt-1" placeholder="Email"/>
              <label>Phone</label> <input type="tel" name="phonenumber" className="form-control mt-1" placeholder="Phone Number"/>
              <label>Social Media</label> <input type="text" name="socialmedia" className="form-control mt-1" placeholder="Social Media Account"/>
              <label>Personal Website</label> <input type="url" name="website" className="form-control mt-1" placeholder="Website"/>
            </div>

            <div className="Edit-form-group mt-3">
            <h3 className="Auth-form-small-title">Skills & Courses Taken</h3>
            <label>Skills (separated with comma)</label> <input type="text" name="skillsstring" className="form-control mt-1" placeholder="Skills"/>
            <label>Courses (separated with comma)</label> <input type="text" name="coursesstring" className="form-control mt-1" placeholder="Courses"/>
            </div>

            <div className="Edit-form-group mt-3">
              <label>Password to authenticate</label> <input type="password" name="password" className="form-control mt-1" placeholder="Password" minLength={6}/>
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary" style={{margin:"0 auto"}}>
                Submit
              </button>
                
              <Link to="/profile" style={{margin:"0 auto"}}>
              <button className="btn btn-primary">
                Cancel
              </button>
              </Link>
              
            </div>

          </div>
        </form>
      </div>
    );
  }
}
