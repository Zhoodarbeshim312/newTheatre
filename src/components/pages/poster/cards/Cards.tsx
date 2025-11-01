"use client";
import { FC, useState } from "react";
import scss from "./Cards.module.scss";
import Image from "next/image";

interface IData {
  id: number;
  img: string;
  title: string;
  category: string;
}

const Cards: FC = () => {
  const data: IData[] = [
    {
      id: 1,
      img: "https://sputnik.kg/img/103469/24/1034692483_0:0:1566:2048_600x0_80_0_0_b255304384f64800068e8f7b7024e808.jpg",
      title: "Жамила",
      category: "Спектаклдер",
    },
    {
      id: 2,
      img: "https://sputnik.kg/img/103469/24/1034692483_0:0:1566:2048_600x0_80_0_0_b255304384f64800068e8f7b7024e808.jpg",
      title: "Концерт А",
      category: "Концерттер",
    },
    {
      id: 3,
      img: "https://sputnik.kg/img/103469/24/1034692483_0:0:1566:2048_600x0_80_0_0_b255304384f64800068e8f7b7024e808.jpg",
      title: "Балдар шоу",
      category: "Балдар үчүн",
    },
    {
      id: 4,
      img: "https://sputnik.kg/img/103469/24/1034692483_0:0:1566:2048_600x0_80_0_0_b255304384f64800068e8f7b7024e808.jpg",
      title: "Семинар",
      category: "Семинарлар",
    },
    {
      id: 5,
      img: "https://sputnik.kg/img/103469/24/1034692483_0:0:1566:2048_600x0_80_0_0_b255304384f64800068e8f7b7024e808.jpg",
      title: "Спектакль B",
      category: "Спектаклдер",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Баары");

  const filteredData =
    selectedCategory === "Баары"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <section className={scss.Cards}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.category}>
            {[
              "Баары",
              "Спектаклдер",
              "Концерттер",
              "Балдар үчүн",
              "Семинарлар",
            ].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? scss.active : ""}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={scss.cards}>
            {filteredData.map((el) => (
              <div key={el.id} className={scss.card}>
                <div className={scss.imageWrapper}>
                  <Image
                    src={el.img}
                    alt={el.title}
                    width={300}
                    height={200}
                    style={{ borderRadius: "10px", objectFit: "cover" }}
                  />
                </div>
                <h3>{el.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
