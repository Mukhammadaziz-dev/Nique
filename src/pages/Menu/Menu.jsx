import './menu.css'
import 'boxicons'
import FoodImage1  from '../../Images/image1.png'
import FoodImage2  from '../../Images/image2.png'
import FoodImage3  from '../../Images/image3.png'
import FoodImage4  from '../../Images/image4.png'
import FoodImage5  from '../../Images/image5.png'
import FoodImage6  from '../../Images/image6.png'
import FoodImage7  from '../../Images/image7.png'
import FoodImage8  from '../../Images/image8.png'
import FoodImage9  from '../../Images/image9.png'
import FoodImage10 from '../../Images/image10.png'
import FoodImage11 from '../../Images/image11.png'
import FoodImage12 from '../../Images/image12.png'
import FoodImage13 from '../../Images/image13.png'
import FoodImage14 from '../../Images/image14.png'
import { Link as ScrollLink } from "react-scroll"
import { Link, NavLink } from "react-router-dom"

const Menu = () => {
  return (
    <div className="Menu">
      <div className="OnMenu">
        <NavLink to='/'>nique.</NavLink>
        <h2>Check Out</h2>
        <h1>Our Menus</h1>
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
      <div className="Eating">
        <div className="EatingNaw">
            <ScrollLink>Starters</ScrollLink>
            <ScrollLink>Lunch</ScrollLink>
            <ScrollLink>Dinner</ScrollLink>
            <Link>Wine</Link>
            <ScrollLink>Drinks</ScrollLink>
        </div>
        <div className="MenuFoods" id="Foods">
            <div className="Starters" id="Start">
                <h1>Starters</h1>
                <div className="StartersBox1">
                    <img src={FoodImage1} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Tomato Toast <box-icon className='boxicon' name='leaf' color='#f8d49e' ></box-icon></h3>
                        <p>$29</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox2">
                    <img src={FoodImage2} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Noodle Soup</h3>
                        <p><span>$8.00</span>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox3">
                    <img src={FoodImage3} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Pumpkin Soup</h3>
                        <p>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
            </div>
            <div className="Starters This food image" id="Break">
                <h1>Breakfast</h1>
                <div className="StartersBox1">
                    <img src={FoodImage4} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Delicious Pancakes</h3>
                        <p><span>$8.00</span>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox2">
                    <img src={FoodImage5} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Sweet Heaven</h3>
                        <p>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox3">
                    <img src={FoodImage6} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Oatmeal Spirit</h3>
                        <p>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox4">
                    <img src={FoodImage7} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Avocado Smash</h3>
                        <p>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
            </div>
            <div className="Starters Starters2" id="Dinner">
                <h1>Dinner</h1>
                <div className="StartersBox1">
                    <img src={FoodImage8} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Italian Pizza</h3>
                        <p>$29</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox2">
                    <img src={FoodImage9} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Sea Curry</h3>
                        <p><span>$8.00</span>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox3">
                    <img src={FoodImage10} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Vegan Burger</h3>
                        <p>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox4">
                    <img src={FoodImage11} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Noodle Bowl</h3>
                        <p>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
            </div>
            <div className="Starters Starters2" id="Drink">
                <h1>Drinks</h1>
                <div className="StartersBox1">
                    <img src={FoodImage12} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Panthouse Tonic</h3>
                        <p><span>$8.00</span>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox2">
                    <img src={FoodImage13} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Apple Breeze</h3>
                        <p>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
                <div className="StartersBox3">
                    <img src={FoodImage14} alt="This food image" />
                    <div className="InText">
                        <div className="InTextPrice">
                        <h3>Frenchman Blitz</h3>
                        <p>$5.00</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div>
            </div>
            <div className="MenuFooter">
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

export default Menu
