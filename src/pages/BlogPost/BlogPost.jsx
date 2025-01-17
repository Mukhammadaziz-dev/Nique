import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./BlogPost.css"
import BlogPostImage from "../../Images/BlogPostImage.png"

const BlogPost = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []); 
    
    return(
        <div>
            <div className="BlogPost">
                <div className="BlogPostOnMenu">
                    <NavLink to='/'>nique.</NavLink>
                    <h2>September 19, 2022</h2>
                    <h1>
                        New Restuarant
                    </h1>
                    <div className="BlogPostBottom">
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
                <div className="BlogPostFoods" id="Foods">
                    <div className="BlogPostLorems">
                        <h2>
                            Lorem ipsum dolor
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Turpis massa sed elementum tempus egestas sed sed risus. 
                        </p>
                        <img src={BlogPostImage} alt="" />
                        <h2>
                            Lorem ipsum dolor
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer malesuada nunc vel risus commodo viverra maecenas. Dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Placerat duis ultricies lacus sed turpis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Turpis massa sed elementum tempus egestas sed sed risus. 
                            <br /> <br />
                            Velit ut tortor pretium viverra. Vivamus arcu felis bibendum ut. Quis enim lobortis scelerisque fermentum dui faucibus in ornare. Fusce ut placerat orci nulla pellentesque dignissim enim. 
                            <br /> <br />
                            Congue eu consequat ac felis donec et. Feugiat vivamus at augue eget arcu dictum. Scelerisque felis imperdiet proin fermentum leo vel orci. Auctor urna nunc id cursus metus aliquam eleifend mi. Facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eget arcu dictum varius duis at consectetur lorem. Magna eget est lorem ipsum.
                        </p>
                    </div>
                    <div className="BlogPostFooter">
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
                            <Link to={'/BlogPost'}>BlogPost</Link>
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
export default BlogPost;