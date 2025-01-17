import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Workshop.css"
import 'boxicons'
import { Link } from "react-router-dom"
import Teacher from "../../Images/Teacher.png"
import NoodleSoup from "../../Images/NoodleSoup.png"
import SeaCurry from "../../Images/SeaCurry.png"
import TeacherInformation from "../../Images/TeacherInformation.png"

const WorkShop = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return(
        <div>
            <div className="WorkShop">
                <div className="WorkShopOnMenu">
                    <NavLink to='/'>nique.</NavLink>
                    <h2>Shop</h2>
                    <h1>
                        Delicious <br />
                        Breakfast
                    </h1>
                    <div className="WorkshopBottom">
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
                <div className="Eating">
                    <div className="ScrollBar">
                        <div className="Foods" id="Foods">
                            <div className="ReserveYourSpot">
                                <span>Cooking Class</span>
                                <h2>
                                    Reserve Your Spot
                                </h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor massa id neque aliquam.
                                </p>
                                <div className="ButtonAndPrice">
                                    <NavLink >
                                        Book a Spot
                                    </NavLink>
                                    <span>89€</span>
                                </div>
                            </div>
                            <div className="Details">
                                <h2>
                                    Details
                                </h2>
                                <div className="Catigory">
                                    <h3>
                                        Date
                                    </h3>
                                    <p>
                                        June 16, 2023 8:00 PM
                                    </p>
                                </div>
                                <span className="CatigoryLine"></span>
                                <div className="Catigory">
                                    <h3>
                                        Teacher
                                    </h3>
                                    <p className="Teacher">
                                        <img src={Teacher} alt="TeacherPhoto" />
                                        Jakob Grønberg
                                    </p>
                                </div>
                                <span className="CatigoryLine"></span>
                                <div className="Catigory">
                                    <h3>
                                        Language
                                    </h3>
                                    <p>
                                        English
                                    </p>
                                </div>
                                <span className="CatigoryLine"></span>
                                <div className="Catigory">
                                    <h3>
                                        Location
                                    </h3>
                                    <p>
                                        nique.
                                        Main Street 16
                                        10629 Berlin
                                    </p>
                                </div>
                            </div>
                            <div className="FoodMenu">
                                <h2>
                                    Menu
                                </h2>
                                <div className="FoodName">
                                    <img src={NoodleSoup} alt="Food Image" />
                                    <div className="TextBox">
                                        <h3>
                                            Noodle Soup
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur
                                        </p>
                                    </div>
                                </div>
                                <div className="FoodName">
                                    <img src={SeaCurry} alt="Food Image" />
                                    <div className="TextBox">
                                        <h3>
                                            Sea Curry
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="TeacherBox">
                                <h2>
                                    Teacher
                                </h2>
                                <div className="TeacherInformation">
                                    <img src={TeacherInformation} alt="Teacher Image" />
                                    <div className="TeacherText">
                                        <h3>
                                            Jakob Grønberg
                                        </h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                                        </p>
                                        <div className="TeacherSotialMedia">
                                            <Link>
                                                <i class='bx bxl-instagram bx-tada' ></i>
                                            </Link>
                                            <Link>
                                                <i class='bx bxl-facebook-circle bx-tada' ></i>
                                            </Link>
                                            <Link>
                                                <i class='bx bxl-twitter bx-tada' ></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Footer">
                                <div className="flogo">
                                    <Link className='loggo'to={'/'}>nique.</Link>
                                    <p>By Pawel Gola <br /> Powered by Webflow</p>
                                </div>
                                <div className="fpages">
                                    <h2>Pages</h2>
                                    <Link to={'/menu'}>Menu</Link>
                                    <Link to={'/restaurant'}>Restaurant</Link>
                                    <Link to={'/classes'}>Classes</Link>
                                    <Link to={'/reservation'}>Book a Table</Link>
                                    <Link to={'/contact'}>Contact</Link>
                                    <Link to={'/blog'}>Blog</Link>
                                    <Link to={'/shop'}>Shop</Link>
                                </div>
                                <div className="futil">
                                    <h2>Utility Pages</h2>
                                    <Link>Styleguide</Link>
                                    <Link>Licensing</Link>
                                    <Link>Changelog</Link>
                                    <Link to={'/error404'}>404 Page</Link>
                                    <Link>Password Protected</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkShop;