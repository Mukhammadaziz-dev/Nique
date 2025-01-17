import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Blog.css"
import FirstBlog from "../../Images/Blog1.png"
import SecondBlog from "../../Images/Blog2.png"
import ThirdBlog from "../../Images/Blog3.png"
import ForthBlog from "../../Images/Blog4.png"
import FifthBlog from "../../Images/Blog5.png"

const Blog = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return(
        <div>
            <div className="Blog">
                <div className="BlogOnMenu">
                    <NavLink to='/'>nique.</NavLink>
                    <h2>Blog</h2>
                    <h1>
                        Latest News
                    </h1>
                    <div className="BlogBottom">
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
                <div className="BlogFoods" id="Foods">
                    <div className="AlotRooms">
                        <div className="AlotRoom">
                            <img src={FirstBlog} alt="Rooms image" />
                            <div className="AlotRoomTextBox">
                                <span>
                                    Gatsby Night
                                </span>
                                <h3>
                                    Gatsby Night
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.
                                </p>
                            </div>
                        </div>
                        <div className="AlotRoom">
                            <img src={SecondBlog} alt="Rooms image" />
                            <div className="AlotRoomTextBox">
                                <span>
                                    Gift Card Standard
                                </span>
                                <h3>
                                    Gift Card Standard
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.
                                </p>
                            </div>
                        </div>
                        <div className="AlotRoom">
                            <img src={ThirdBlog} alt="Rooms image" />
                            <div className="AlotRoomTextBox">
                                <span>
                                    Gift Card Standard
                                </span>
                                <h3>
                                    New Restaurant
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.
                                </p>
                            </div>
                        </div>
                        <div className="AlotRoom">
                            <img src={ForthBlog} alt="Rooms image" />
                            <div className="AlotRoomTextBox">
                                <span>
                                    Gift Card Standard
                                </span>
                                <h3>
                                    Romantic Dinner
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.
                                </p>
                            </div>
                        </div>
                        <div className="AlotRoom">
                            <img src={FirstBlog} alt="Rooms image" />
                            <div className="AlotRoomTextBox">
                                <span>
                                    Gift Card Standard
                                </span>
                                <h3>
                                    Brand New Kitchen
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="BlogFooter">
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
    )
}
export default Blog;