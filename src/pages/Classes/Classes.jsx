import React from "react";
import "./Classes.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Navigation, Pagination } from 'swiper/modules';
import { NavLink } from "react-router-dom";

const Classes = () => {
    return(
        <div>
            <div className="Logo">
                <NavLink className="ClassesLogo">
                    nique.
                </NavLink>
            </div>
            <Swiper >
            </Swiper>
            <Swiper
                slidesPerView={3}
                navigation={true} 
                pagination={true}
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                    },
                    500: {
                      slidesPerView: 2,
                    },
                    1000: {
                      slidesPerView: 3,
                    },
                  }}
                modules={[FreeMode, Pagination, Navigation]}
                className="mySwiper"
            
            >
                <SwiperSlide className="Swipper">
                    <NavLink to="/workshop">
                        <h3>
                            Asian
                        </h3>
                        <h1>
                            Delicious <br />
                            Breakfast
                        </h1>
                        <span>
                            June 16, 2023
                        </span>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className="Swipper">
                    <NavLink to="/workshop">
                        <h3>
                            Breakfast
                        </h3>
                        <h1>
                            Coffee Time
                        </h1>
                        <span>
                            March 17, 2023
                        </span>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className="Swipper">
                    <NavLink to="/workshop">
                        <h3> to="/workshop"
                            Vegan
                        </h3>
                        <h1>
                            Vegan Burger
                        </h1>
                        <span>
                            January 10, 2023
                        </span>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className="Swipper">
                    <NavLink to="/workshop">
                        <h3>
                            Italian
                        </h3>
                        <h1>
                            Salad Style
                        </h1>
                        <span>
                            November 19, 2022
                        </span>
                    </NavLink>
                </SwiperSlide>
                <SwiperSlide className="Swipper">
                    <NavLink to="/workshop">
                        <h3>
                            Italian
                        </h3>
                        <h1>
                            Homemade <br />
                            Honey
                        </h1>
                        <span>
                            October 8, 2022
                        </span>
                    </NavLink>
                </SwiperSlide>
            </Swiper>
            <div className="ClassesMenu">
                <div className="ClassesMenuChild">
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
    )
}
export default Classes;