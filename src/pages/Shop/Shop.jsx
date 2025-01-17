import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Shop.css"
import firstNique from "../../Images/nique1.png"
import secondNique from "../../Images/nique2.png"
import thirdNique from "../../Images/nique3.png"
import forthNique from "../../Images/nique4.png"

const Shop = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return(
        <div>
            <div className="Shop">
                <div className="ShopOnMenu">
                    <NavLink to='/'>nique.</NavLink>
                    <h2>Shop</h2>
                    <h1>
                        Give a gift
                    </h1>
                    <div className="ShopBottom">
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
                <div className="ShopFoods" id="Foods">
                    <div className="ShopContects">
                        <div className="ShopContent">
                            <img src={firstNique} alt="Nique image" />
                            <div className="ShopContentTextBox">
                                <span>
                                    $ 15 USD
                                </span>
                                <h3>
                                    Gift Card Light
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.
                                </p>
                            </div>
                        </div>
                        <div className="ShopContent">
                            <img src={secondNique} alt="Nique image" />
                            <div className="ShopContentTextBox">
                                <span>
                                    $ 30 USD
                                </span>
                                <h3>
                                    Gift Card Standard
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.
                                </p>
                            </div>
                        </div>
                        <div className="ShopContent">
                            <img src={thirdNique} alt="Nique image" />
                            <div className="ShopContentTextBox">
                                <span>
                                    $ 50 USD
                                </span>
                                <h3>
                                    Gift Card Premium
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.
                                </p>
                            </div>
                        </div>
                        <div className="ShopContent">
                            <img src={forthNique} alt="Nique image" />
                            <div className="ShopContentTextBox">
                                <span>
                                    $ 100 USD
                                </span>
                                <h3>
                                    Gift Card Gold
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit eo ut vitae neque sed sed sit sagittis tristique scelerisque.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="ShopFooter">
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
export default Shop;