import React from 'react';
import { Outlet } from "react-router-dom"
import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

class About extends React.Component {

    constructor(props) {
        super(props);
        //console.log("Parent constructor")
    }

    componentDidMount() {
        //API Calls
        //console.log("Parent componentDidMount");
    }

    render () {
        //console.log("Parent render")
        return (
            <div>
                <h1>About Us Page</h1>
                <p>
                    This is the Namaste React Live Course Chapter 07 - Finding the Path.
                </p>
                {/* <Outlet /> */}
                <Profile />
                
            </div>
        );
    }
}

export default About;