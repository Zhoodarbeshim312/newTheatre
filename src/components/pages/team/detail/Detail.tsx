import { FC } from "react";
import scss from "./Detail.module.scss";

const Detail: FC = () => {
  return (
    <section className={scss.Detail}>
      <div className="container">
        <div className={scss.content}>Detail</div>
      </div>
    </section>
  );
};

export default Detail;
