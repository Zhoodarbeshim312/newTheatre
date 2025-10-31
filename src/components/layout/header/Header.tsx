"use client";
import { FC, useState } from "react";
import scss from "./Header.module.scss";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { ImWhatsapp } from "react-icons/im";
import { Spin as Hamburger } from "hamburger-react";
import Image from "next/image";

const Header: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <Image src={logo} alt="img" />
            <p>
              Капар Медетбеков атындагы <br />
              Талас облустук <br />
              музыкалык драма театры
            </p>
          </div>
          <nav className={scss.nav}>
            <nav className={scss.links}>
              <p>
                Касса: <span>+996 500 800 907</span>
              </p>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaFacebookF />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <GrInstagram />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <ImWhatsapp />
              </a>
            </nav>
            <nav className={scss.pages}>
              <Link
                onClick={() => setOpen(false)}
                href="/"
                className={pathname === "/" ? scss.active : ""}
              >
                Башкы бет
              </Link>
              <Link
                href="/poster"
                className={pathname === "/poster" ? scss.active : ""}
              >
                Афиша
              </Link>
              <Link
                href="/performance"
                className={pathname === "/performance" ? scss.active : ""}
              >
                Спектакль
              </Link>
              <Link
                href="/talasTheatre"
                className={pathname === "/talasTheatre" ? scss.active : ""}
              >
                Талас театыры
              </Link>
              <Link
                href="/team"
                className={pathname === "/team" ? scss.active : ""}
              >
                Команда
              </Link>
              <Link
                href="/gallery"
                className={pathname === "/gallery" ? scss.active : ""}
              >
                Галерея
              </Link>
              <Link
                href="/repertoire"
                className={pathname === "/repertoire" ? scss.active : ""}
              >
                Репертуар
              </Link>
            </nav>
          </nav>
          <div onClick={() => setOpen(!isOpen)} className={scss.burger}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
        <div style={{ right: isOpen ? "0px" : "-400px" }} className={scss.menu}>
          <nav className={scss.nav}>
            <nav className={scss.pages}>
              <Link
                onClick={() => setOpen(false)}
                href="/"
                className={pathname === "/" ? scss.active : ""}
              >
                Башкы бет
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/poster"
                className={pathname === "/poster" ? scss.active : ""}
              >
                Афиша
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/performance"
                className={pathname === "/performance" ? scss.active : ""}
              >
                Спектакль
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/talasTheatre"
                className={pathname === "/talasTheatre" ? scss.active : ""}
              >
                Талас театыры
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/team"
                className={pathname === "/team" ? scss.active : ""}
              >
                Команда
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/gallery"
                className={pathname === "/gallery" ? scss.active : ""}
              >
                Галерея
              </Link>
              <Link
                onClick={() => setOpen(false)}
                href="/repertoire"
                className={pathname === "/repertoire" ? scss.active : ""}
              >
                Репертуар
              </Link>
            </nav>
            <p>
              Касса: <span>+996 500 800 907</span>
            </p>
            <nav className={scss.links}>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaFacebookF />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <GrInstagram />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <ImWhatsapp />
              </a>
            </nav>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
