"use client";
import { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scss from "./Welcome.module.scss";

import theatre1 from "../../../../../public/theatre.webp";
import theatre2 from "../../../../../public/theater2.webp";
import theatre3 from "../../../../../public/theater3.webp";

const slides = [
  {
    id: 1,
    image: theatre1,
    genre: "Драма",
    title: "Жамийла",
    date: "15 АВГУСТАН БАШТАП",
  },
  {
    id: 2,
    image: theatre2,
    genre: "Комедия",
    title: "Көңүл ачуу",
    date: "20 АВГУСТАН БАШТАП",
  },
  {
    id: 3,
    image: theatre3,
    genre: "Трагедия",
    title: "Ак кеме",
    date: "25 АВГУСТАН БАШТАП",
  },
];

const Welcome = () => {
  const [bgImage, setBgImage] = useState(theatre1.src);

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    afterChange: (index: number) => setBgImage(slides[index].image.src),
  };

  return (
    <section
      id="welcome"
      className={scss.Welcome}
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container">
        <div className={scss.slider}>
          <Slider {...settings}>
            {slides.map((slide) => (
              <div key={slide.id} className={scss.slide}>
                <h3>{slide.genre}</h3>
                <h1>{slide.title}</h1>
                <h3>{slide.date}</h3>
                <button>Толук маалымат алуу</button>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
