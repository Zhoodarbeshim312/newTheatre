"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Detail.module.scss";
import { useParams } from "next/navigation";
import Image from "next/image";
import axios from "axios";
import { Info } from "../cards/Cards";
const Detail: FC = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState<Info | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getDetailData = async () => {
      try {
        if (!id) return;
        const res = await axios.get<Info>(
          `http://56.228.23.49/ru/theatre/play/${id}`
        );
        setDetailData(res.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      } finally {
        setLoading(false);
      }
    };
    getDetailData();
  }, [id]);
  if (loading)
    return (
      <p
        style={{
          textAlign: "center",
        }}
      >
        Загрузка данных...
      </p>
    );

  if (!detailData) return <p>Данные не найдены 😔</p>;
  return (
    <section className={scss.Detail}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.text}>
            <h1>{detailData.title || "Без названия"}</h1>
            <p>
              <strong>Режиссёр:</strong> {detailData.director || "не указано"}
            </p>
            <p>
              <strong>Жанр:</strong> {detailData.genre || "не указано"}
            </p>
            <p>
              <strong>Премьера:</strong> {detailData.premiere || "не указано"}
            </p>
            <p>
              <strong>Длительность:</strong>{" "}
              {detailData.time
                ? `${Math.floor(detailData.time / 60)}ч ${
                    detailData.time % 60
                  }мин`
                : "не указано"}
            </p>

            <p>{detailData.description || "Описание отсутствует"}</p>
          </div>

          <div className={scss.img}>
            <Image
              src={detailData.image || "/fallback.png"}
              alt={detailData.title || "Спектакль"}
              width={300}
              height={500}
              style={{ objectFit: "cover", borderRadius: "10px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
