import React, { Component } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default class TaskCRUD extends React.Component{
    constructor(props){
        super(props);
        this.state = JSON.parse(window.localStorage.getItem('userInfo')) || {
            username: "",
            email: "",
            tasker: false,
            taskAccepted: [],
            taskCreated: []
          }       
    }

    render(){
        return(
            <React.Fragment>
                <Navbar />
                    {this.state.email !== "" && 
                        <div>
                            Hello Form
                        </div>
                    }
                    {this.state.email === "" &&
                        <div>
                            Please Login To Create a Task
                        </div>
                    }
                <Footer />
            </React.Fragment>
        )
    }
}

