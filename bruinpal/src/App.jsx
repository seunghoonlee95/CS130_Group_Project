import React, {Component} from "react";
import "./App.css";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Footer from "./components/Footer";
import roycehall from "../src/images/roycehall.jpeg"

class App extends Component {
    state = {
      data: null
    };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend_test');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      console.log(body.express);
      return body;
    };
  
    render() {
      return (
          <div>
          <Home/>
          </div>
      );
    }
  }

export default App;
