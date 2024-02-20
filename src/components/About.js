import React from "react";
import ReactDOM from "react-dom/client";
import User from "./User";
import UserClass from "./UserClass";

const About = () => {

    return (
        <>
            <h1>About</h1>
            <h3>This is namaste React web series</h3>
            {/* <User name={"rajratn more (functional component)"}/> */}
            <UserClass name={"rajratn more (class component)"}/>
        </>
    )

}

export default About;