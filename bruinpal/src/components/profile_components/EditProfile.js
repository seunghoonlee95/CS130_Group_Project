class EditProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  update(event) {
    console.log("let devin conenct info to backend api/user/update call");
  }

  render() {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={this.update}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Edit Profile</h3>
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
          </div>
        </form>
      </div>
    );
  }
}
