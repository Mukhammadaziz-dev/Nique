import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Contact.css"
import { Button } from "react-scroll";

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return(
        <div>
            <div className="ContactLeftRight">
                <div className="ContactLeft">
                    <div className="LeftTop">
                        <NavLink to='/'>
                            nique.
                        </NavLink>
                    </div>
                    <div className="LeftCenter">
                        <h3>
                            Contact
                        </h3>
                        <h1>
                            Get in Touch
                        </h1>
                    </div>
                    <div className="LeftBottom">
                        <i class='bx bx-time'></i>
                        <NavLink 
                        to='/menu'
                        className={({ isActive }) => (isActive ? 'linkActive active' : 'linkNoActive')}
                        >
                            Menu
                        </NavLink>
                        <NavLink to='/restaurant'
                        className={({ isActive }) => (isActive ? 'linkActive active' : 'linkNoActive')}
                        >
                            Restaurant
                        </NavLink>
                        <NavLink to='/classes'
                        className={({ isActive }) => (isActive ? 'linkActive active' : 'linkNoActive')}
                        >
                            Classes
                        </NavLink>
                        <NavLink to='/reservation'
                        className={({ isActive }) => (isActive ? 'linkActive active' : 'linkNoActive')}
                        >
                            Book a Table
                        </NavLink>
                    </div>
                </div>
                <div className="ContactRight">
                    <div className="inRight">
                        <p>
                            Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla facilisi cras fermentum odio eu.
                        </p>
                        <div className="inpBox">
                            <span>Name</span> <br />
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="inpBox">
                            <span>Email</span> <br />
                            <input type="email" placeholder="Your email address" />
                        </div>
                        <div className="inpMessageBox">
                            <span>Message</span> <br />
                            <input type="text" placeholder="Your message" />
                        </div>
                        <NavLink to="/blogpost">Book a table</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;