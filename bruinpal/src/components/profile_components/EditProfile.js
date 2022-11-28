import React, { useState } from "react";
import { Link, redirect } from "react-router-dom";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(window.localStorage.getItem("userInfo")) || {
      username: "",
      email: "",
      tasker: false,
      taskAccepted: [],
      taskCreated: [],

      profileInformation: {
        courses: [],
        skills: [],
        bio: "",
        phonenumber: "",
        socialmedia: "",
        website: "",
      },
    };
    this.state.updated = false;
    this.update = this.update.bind(this);
  }

  update(event) {
    this.setState({ updated: false });
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    console.log("stored data", this.state.profileInformation);
    var object = {};
    //need to cross refrence state profileInformation with what form changes, and send all otherwise it overwrites all profileInformation, not selected fields
    formData.forEach((value, key) => {
      if (value !== "") {
        object[key] = value;
      } else if (value === "") {
        object[key] = this.state.profileInformation[key];
      }
    });
    var p = { profileInformation: object };
    p.email = this.state.email;
    console.log("email", p.email);
    var data = JSON.stringify(p);

    console.log("data", data);

    const requestOptions = {
      method: "post",
      credentials: "same-origin",
      headers: { "Content-Type": "application/json" },
      body: data,
    };
    fetch("api/user/update", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          console.log("error updating profile");
          console.log(result.error);
        } else {
          console.log(result);
        }
      })
      .then(() => {
        const getUserOptions = {
          method: "get",
          credentials: "same-origin",
          headers: { "Content-Type": "application/json" },
        };
        console.log(`api/user/${p.email}`);
        fetch(`api/user/${this.state.email}`, getUserOptions)
          .then((res) => res.json())
          .then((result) => {
            if (result.error) {
              console.log("error updating profile");
              console.log(result.error);
            } else {
              //console.log(result);
              console.log(result.userData);
              window.localStorage.setItem(
                "userInfo",
                JSON.stringify(result.userData)
              );
            }
          });
      })
      .then(() => {
        this.setState({ updated: true });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const done = this.state.updated;
    return (
      <div>
        <Navbar />
        {!done && (
          <div className="Edit-form-container">
            <form className="Edit-form" onSubmit={this.update}>
              <div className="Edit-form-content">
                <h2 className="Edit-form-title">Edit Your Profile</h2>

                <div className="Edit-form-group mt-3">
                  <h3 className="Auth-form-small-title">Basic Info</h3>
                  <label>One-line Bio</label>{" "}
                  <input
                    type="text"
                    name="bio"
                    className="form-control mt-1"
                    placeholder="One-line Bio"
                  />
                  <label>Phone</label>{" "}
                  <input
                    type="tel"
                    name="phonenumber"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    className="form-control mt-1"
                    placeholder="111-111-1111"
                  />
                  <label>Social Media</label>{" "}
                  <input
                    type="text"
                    name="socialmedia"
                    className="form-control mt-1"
                    placeholder="Social Media Account"
                  />
                  <label>Personal Website</label>{" "}
                  <input
                    type="url"
                    name="website"
                    className="form-control mt-1"
                    placeholder="Website"
                  />
                </div>

                <div className="Edit-form-group mt-3">
                  <h3 className="Auth-form-small-title">
                    Skills & Courses Taken
                  </h3>
                  <label>Skills (separated with comma)</label>{" "}
                  <input
                    type="text"
                    name="skills"
                    className="form-control mt-1"
                    placeholder="Skills"
                  />
                  <label>Courses (separated with comma)</label>{" "}
                  <input
                    type="text"
                    name="courses"
                    className="form-control mt-1"
                    placeholder="Courses"
                  />
                </div>

                <div className="d-grid gap-2 mt-3">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ margin: "0 auto" }}
                  >
                    Submit
                  </button>

                  <Link to="/profile" style={{ margin: "0 auto" }}>
                    <button className="btn btn-primary">Cancel</button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        )}
        {done && (
          <div>
            <center>
              <div className="Edit-form-group mt-3">
                <h3 className="Auth-form-small-title">Update Confirmed</h3>
                <h1>Profile Information has been updated</h1>
                <Link to="/profile" style={{ margin: "0 auto" }}>
                  <button className="btn btn-primary">Back to Profile</button>
                </Link>
              </div>
            </center>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
