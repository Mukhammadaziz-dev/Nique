import React, { useEffect } from "react";
import "./Frontpage.css"
import { NavLink } from "react-router-dom";

const Frontpage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return(
        <div>
            <div className="FrontpageContainer">
                <div className="container">
                    <div className="FronpageTop">
                        <NavLink to='/'>
                            nique.
                        </NavLink>
                    </div>
                    <div className="FrontpageCenter">
                        <h3>
                            The pure taste of
                        </h3>
                        <h1>
                            Thailand
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                        </p>
                    </div>
                    <div className="FrontpageBottom">
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
            </div>
        </div>
    )
}
export default Frontpage;