import { FC } from "react";
import scss from "./Subscription.module.scss";
import Image from "next/image";
import sub1 from "../../../../../public/subscription1.jpg";
import sub2 from "../../../../../public/subscription2.jpg";

const Subscription: FC = () => {
  return (
    <section className={scss.Subscription}>
      <div className="container">
        <div className={scss.content}>
          <h1>Абонемент</h1>
          <div className={scss.card}>
            <Image src={sub1} alt="img" />
            <Image src={sub2} alt="img" />
          </div>
          <div className={scss.buy}>
            <p>
              Абонемент барагы Талас театрынын 2025-жылда коюла турган баардык
              спекталдерине жарайт
            </p>
            <button>Сатып алуу</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
