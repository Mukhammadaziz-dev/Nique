import React from "react";
import "./Classes.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { NavLink } from "react-router-dom";
import 'swiper/css/autoplay';

const Classes = () => {
    return(
        <div>
            <div className="Logo">
                <NavLink className="ClassesLogo">
                    nique.
                </NavLink>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                freeMode={true}
                navigation={true} 
                modules={[FreeMode, Pagination]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                className="mySwiper"
            >
                <SwiperSlide className="Swipper">
                    <NavLink>
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
                    <NavLink>
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
                    <NavLink>
                        <h3>
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
                    <NavLink>
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
                    <NavLink>
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
        </div>
    )
}
export default Classes;