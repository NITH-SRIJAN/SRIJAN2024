import React from "react";

import "../../Assets/css/EditionPhone.css";
import image2020 from "../../Assets/images/first.jpg";
import image2022 from "../../Assets/images/second.jpg";
import image2021 from "../../Assets/images/2020-2021.png";
import image2018 from "../../Assets/images/2016-2017.png";
import image2019 from "../../Assets/images/2018-2019.png";
import image2023 from "../../Assets/images/SRIJAN 2022-23.png";
import image2024 from "../../Assets/images/2023-2024.png";
import image2025 from "../../Assets/images/2024-2025.png";
import Navbar from "../../components/NewNavbar.js/NewNavbar";
import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const EditionPhone = () => {
  return (
    <>
      <Navbar />
      <section className="phone-edition">
        <div className="current-edition">
          <div className="edition-text">SRIJAN 2024-25</div>
          <a href="https://drive.google.com/file/d/1-wcs8CAANGjdh6iJQX2eQiTwuX7bIhys/view?usp=drive_link" target="_blank" rel="noreferrer">
            <img className="edition-img" src={image2025} alt="edition" />
          </a>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={16}
          centeredSlides={true}
          className="edition-swiper"
          breakpoints={{
            0:   { slidesPerView: 1 },
            400: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
          }}
        >
          <SwiperSlide>
            <a href="https://drive.google.com/file/d/1078JyEIw45q7blAeXCEuAZJugdzTYQ6n/view?usp=drive_link" target="_blank" rel="noreferrer">
              <img className="edition-img" src={image2024} alt="edition" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://drive.google.com/file/d/1rtChbl4X6n3TIwi-SKLvx9D5U8vlD8XM/view?usp=drive_link" target="_blank" rel="noreferrer">
              <img className="carousel-components" src={image2023} alt="SRIJAN 2022-23" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://drive.google.com/file/d/1lqy5vTkv4erXBLndVKP5PuBxHZ-To3NR/view?usp=sharing" target="_blank" rel="noreferrer">
              <img className="carousel-components" src={image2022} alt="SRIJAN 2021-22" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://drive.google.com/file/d/10sXlN12S37ILaF9AU_iMQhi62WTOsjuB/view?usp=drive_link" target="_blank" rel="noreferrer">
              <img className="carousel-components" src={image2021} alt="SRIJAN 2020-21" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://drive.google.com/file/d/1lmBbYQvnFDeM7KNqZ6L0J7RtadBBle4E/view?usp=sharing" target="_blank" rel="noreferrer">
              <img className="carousel-components" src={image2020} alt="SRIJAN 2019-20" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://drive.google.com/file/d/1SC6heWxbESkYuql8VBAyVUXlWZ8crl08/view?usp=drive_link" target="_blank" rel="noreferrer">
              <img className="carousel-components" src={image2019} alt="SRIJAN 2018-19" />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="https://drive.google.com/file/d/1yIWkM0lmwmqvQ41xUenTqAfrXdhhb9Nr/view?usp=sharing" target="_blank" rel="noreferrer">
              <img className="carousel-components" src={image2018} alt="SRIJAN 2017-18" />
            </a>
          </SwiperSlide>
        </Swiper>

        <div className="block1">
          <NavLink className="link" to="/editions/all">
            <h3>View All</h3>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default EditionPhone;
