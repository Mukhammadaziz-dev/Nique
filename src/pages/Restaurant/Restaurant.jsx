import React, { useEffect } from "react";
import "./Restaurant.css"
import { NavLink } from "react-router-dom";

const Restaurant = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return(
        <div>
            <div className="RestaurantContainer">
                <div className="container">
                    <div className="RestaurantTop">
                        <NavLink to='/'>
                            nique.
                        </NavLink>
                    </div>
                    <div className="RestaurantCenter">
                        <h3>
                            Discover
                        </h3>
                        <h1>
                            nique.
                        </h1>
                        
                    </div>
                    <div className="RestaurantBottom">
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
export default Restaurant;