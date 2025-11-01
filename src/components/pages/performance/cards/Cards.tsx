"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Cards.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";

export interface IData {
  id: number;
  title: string;
  image: string;
  info: Info;
}

export interface Info {
  id: number;
  title: string;
  director: string;
  author: string;
  genre: string;
  premiere: string;
  time: number;
  address: any;
  image: string;
  description: string;
}

const Cards: FC = () => {
  const [data, setData] = useState<IData[]>([]);
  const router = useRouter();
  const getData = async () => {
    try {
      const res = await axios.get<IData[]>(
        `http://56.228.23.49/ru/theatre/play/`
      );
      setData(res.data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(data);

  return (
    <section className={scss.Cards}>
      <div className="container">
        <div className={scss.content}>
          <h1>Спектакли</h1>
          <div className={scss.cards}>
            {data.map((el) => (
              <div key={el.id} className={scss.card}>
                <div className={scss.imageWrapper}>
                  {el.image ? (
                    <Image
                      onClick={() =>
                        router.push(`/performance/detail/${el.id}`)
                      }
                      src={el.image}
                      alt={el.title || "Спектакль"}
                      fill
                      style={{ objectFit: "cover", borderRadius: "10px" }}
                    />
                  ) : (
                    <Image
                      onClick={() =>
                        router.push(`/performance/detail/${el.id}`)
                      }
                      src="/notImage.png"
                      alt={el.title || "Спектакль"}
                      fill
                      style={{ objectFit: "cover", borderRadius: "10px" }}
                    />
                  )}
                </div>
                <h3>{el.title || "Без названия"}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
