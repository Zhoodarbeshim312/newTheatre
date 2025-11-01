"use client";
import { useEffect, useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scss from "./Welcome.module.scss";
import axios from "axios";

export interface IData {
  id: number;
  title: string;
  genre: string;
  date: string;
  time: string;
  image: string;
  age_control: number;
  price: number;
}

const Welcome = () => {
  const [bgImage, setBgImage] = useState<string>("");
  const [data, setData] = useState<IData[]>([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get<IData[]>(
        `http://56.228.23.49/ru/theatre/repertoire/`
      );
      setData(res.data);
      if (res.data.length > 0) {
        setBgImage(res.data[0].image);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    afterChange: (index: number) => {
      if (data[index]) {
        setBgImage(data[index].image);
      }
    },
  };

  if (loading)
    return (
      <p
        style={{
          textAlign: "center",
        }}
      >
        Загрузка...
      </p>
    );
  if (data.length === 0) return <p>Нет данных 😔</p>;

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
            {data.map((item) => (
              <div key={item.id} className={scss.slide}>
                <h3>{item.genre || "Жанр не указан"}</h3>
                <h1>{item.title || "Без названия"}</h1>
                <h3>{item.date || "Дата не указана"}</h3>
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
