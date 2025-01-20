import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Reservation.css"


const Reservation = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return(
        <div>
            <div className="ReservationLeftRight">
                <div className="ReservationLeft">
                    <div className="LeftTop">
                        <NavLink to='/'>
                            nique.
                        </NavLink>
                    </div>
                    <div className="LeftCenter">
                        <h3>
                            Book a table
                        </h3>
                        <h1>
                            Reservation
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
                <div className="ReservationRight">
                    <div className="inRight">
                        <h1>
                            Book a table
                        </h1>
                        <p>
                            Our dining atmosphere is casual and comfortable. To reflect this environment, we maintain a formal dress.
                        </p>
                        <div className="inpBox">
                            <span>Name</span> <br />
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="inpBox">
                            <span>Number of guests</span> <br />
                            <input type="number" placeholder="Number of guests" />
                        </div>
                        <div className="inpBoxs">
                            <div className="inpBox">
                                <span>Date</span> <br />
                                <input type="date" placeholder="Date" />
                            </div><div className="inpBox">
                                <span>Time</span> <br />
                                <input type="time" placeholder="Time" />
                            </div>
                        </div>
                        <NavLink to="/contact">Book a table</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reservation;