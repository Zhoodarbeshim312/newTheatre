import { FC } from "react";
import scss from "./Footer.module.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <footer className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.top}>
            <h3>Способы оплаты</h3>
            <div className={scss.buy}>
              <h1>ABank</h1>
              <h1>MBank</h1>
              <h1>OBank!</h1>
            </div>
          </div>
          <hr />
          <div className={scss.middle}>
            <nav className={scss.nav}>
              <a href="">Театр</a>
              <a href="">Афиша</a>
              <a href="">Галерея</a>
              <a href="">Касса</a>
              <a href="">Контакты</a>
            </nav>
            <nav className={scss.nav}>
              <a href="">Залдын схемасы</a>
              <a href="">Команда</a>
              <a href="">Вакансия</a>
            </nav>
            <nav className={scss.soccial}>
              <div className={scss.address}>
                <p>Адрес: </p>
                <div className={scss.links}>
                  <a href="">
                    <FaYoutube />
                  </a>
                  <a href="">
                    <FaFacebookF />
                  </a>
                  <a href="">
                    <FaInstagram />
                  </a>
                  <a href="">
                    <FaTelegramPlane />
                  </a>
                  <a href="">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </nav>
          </div>
          <div className={scss.bottom}>
            <p>
              "Капар Медетбеков атындагы Талас облустук музыкалык драма театры"{" "}
              <br />
              Администратор сайта: tomdtkg@gmail.com <br />
              Разработка: DEV-KG.PRO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
