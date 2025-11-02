"use client";
import { FC } from "react";
import scss from "./Candidats.module.scss";
import Image from "next/image";

export interface Person {
  id: number;
  image: string;
  name: string;
  status: string;
}

export interface Category {
  title: string;
  people: Person[];
}

const Candidats: FC = () => {
  const candidats: Category[] = [
    {
      title: "Көркөм башкаруу",
      people: [
        {
          id: 1,
          image:
            "https://krasnodar-tr.gazprom.ru/d/story/20/143904/vasyukov-d.a..jpg",
          name: "Бекботоев Алмазбек",
          status: "Директор",
        },
        {
          id: 2,
          image:
            "https://krasnodar-tr.gazprom.ru/d/story/20/143904/vasyukov-d.a..jpg",
          name: "Бекботоев Алмазбек",
          status: "Театрдын көркөм жетекчиси",
        },
        {
          id: 3,
          image:
            "https://krasnodar-tr.gazprom.ru/d/story/20/143904/vasyukov-d.a..jpg",
          name: "Бекботоев Алмазбек",
          status: "Театрдын башкы артисти",
        },
      ],
    },
    {
      title: "Актёр-актрисалар",
      people: [
        {
          id: 1,
          image:
            "https://krasnodar-tr.gazprom.ru/d/story/20/143904/vasyukov-d.a..jpg",
          name: "Бекботоев Алмазбек",
          status: "Кыргыз Республикасынын эмгек сиңирген артисти",
        },
        {
          id: 2,
          image:
            "https://krasnodar-tr.gazprom.ru/d/story/20/143904/vasyukov-d.a..jpg",
          name: "Бекботоев Алмазбек",
          status: "Сахна чебери",
        },
        {
          id: 3,
          image:
            "https://krasnodar-tr.gazprom.ru/d/story/20/143904/vasyukov-d.a..jpg",
          name: "Бекботоев Алмазбек",
          status: "Актёр",
        },
      ],
    },
    {
      title: "Оркестр бөлүмү",
      people: [
        {
          id: 1,
          image:
            "https://krasnodar-tr.gazprom.ru/d/story/20/143904/vasyukov-d.a..jpg",
          name: "Бекботоев Алмазбек",
          status: "Театрдын башкы артисти",
        },
        {
          id: 2,
          image:
            "https://krasnodar-tr.gazprom.ru/d/story/20/143904/vasyukov-d.a..jpg",
          name: "Бекботоев Алмазбек",
          status: "өндүрүш директору",
        },
        {
          id: 3,
          image:
            "https://krasnodar-tr.gazprom.ru/d/story/20/143904/vasyukov-d.a..jpg",
          name: "Бекботоев Алмазбек",
          status: "Актриса",
        },
      ],
    },
  ];

  return (
    <section className={scss.Candidats}>
      <div className="container">
        {candidats.map((category) => (
          <div key={category.title} className={scss.category}>
            <h2 className={scss.categoryTitle}>{category.title}</h2>
            <div className={scss.cards}>
              {category.people.map((person) => (
                <div key={person.id} className={scss.card}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    width={200}
                    height={250}
                  />
                  <h3>{person.name}</h3>
                  <p>{person.status}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Candidats;
