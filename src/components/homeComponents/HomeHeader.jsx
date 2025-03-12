import "./Header.css";
import { useState } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router";
import { FaStamp } from "react-icons/fa";
import { GiTrophyCup } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import poster from "../../assets/preload.jpg";
import logo from "../../assets/logo.png";
import lava from "../../assets/lava.mp4";
import en from "../../assets/eng.png"
import ru from "../../assets/rus.png"
import {langs} from "../../assets/product-data"
import SolutionSlider from "../sliders/SolutionSlider";

export default function HomeHeader() {
  const [menu, setMenu] = useState(false);
  const {lang} = useParams();
  const {pathname} = useLocation();
  const nextLang =  decodeURIComponent(pathname)?.replace(lang, langs.find((e)=>e.lang !== lang)?.lang);


  const closeMenu = () => {
    setMenu(false);
  };

  const langHandler = (newLang) => {
    localStorage.setItem("lang", newLang)
  }
  return (
    <header className="header">
      <div className="header-top">
        <div className="home-navigation-sm">
        <img src={logo} alt="" />
        <div className="menuBtn" style={{ display: "block !important" }}>
          {menu ? (
              <IoMdClose className="btn" onClick={() => setMenu(!menu)} />
              ) : (
              <LuMenu className="btn" onClick={() => setMenu(!menu)} />
              )}
        </div>
        {menu && (
            <div className="menu-container">
            <div className="menu">
              <NavLink to={`/${lang}`} className="menu-item" onClick={() => closeMenu()}>
                {lang === "en" ? "Home" : "Главный"}
              </NavLink>
              <NavLink
                to={`/${lang}/projects`}
                className="menu-item"
                onClick={() => closeMenu()}
                >
                {lang === "en" ? "Projects" : "Проекты"}
              </NavLink>
              <NavLink
                to={`/${lang}/solutions`}
                className="menu-item"
                onClick={() => closeMenu()}
                >
                {lang === "en" ? "Solutions" : "Решения"}
              </NavLink>
              <NavLink
                to={`/${lang}/news`}
                className="menu-item"
                onClick={() => closeMenu()}
                >
                {lang === "en" ? "News" : "Новости"}
              </NavLink>
              <NavLink
                to={`/${lang}/partners`}
                className="menu-item"
                onClick={() => closeMenu()}
                >
                {lang === "en" ? "Partners" : "Партнеры"}
              </NavLink>
              <NavLink
                to={`/${lang}/about-us`}
                className="menu-item"
                onClick={() => closeMenu()}
                >
                {lang === "en" ? "About Us" : "О нас"}
              </NavLink>
              <NavLink
                to={`/${lang}/contact-us`}
                className="menu-item"
                onClick={() => closeMenu()}
                >
                {lang === "en" ? "Contact Us" : "Связаться"}
              </NavLink>
              <div className="menu-item nav-products-sm">
                  <Link
                    to={lang === "en" ? "" : nextLang}
                    onClick={() => {
                      langHandler("en");
                    }}
                  >
                    <img src={langs[0].img} alt="" /> en{" "}
                  </Link>
                  <Link
                    to={lang === "ru" ? "" : nextLang}
                    onClick={() => {
                      langHandler("ru");
                    }}
                  >
                    <img src={langs[1].img} alt="" /> ru
                  </Link>
                </div>
            </div>
          </div>
        )}
        </div>

        <div>
          <div className="before-navigation">
            <img src={logo} alt="" className="home-logo" loading="lazy" />
            <div className={lang === "en" ? "before-navigation-item" : "before-navigation-item-ru"}>
              <FaStamp
                className="icon"
                style={{ width: "33px", height: "33px" }}
                />
              <div className="iso-stump">
                <div>
                  <h4>{lang === "en" ? "Certified" : "Сертифицированная"}</h4>
                  <h4>{lang === "en" ? "Company" : "компания"}</h4>
                </div>
                <div>
                  <p>{lang === "en" ? "ISO" : "Исо"} 9001:2015 ({lang === "en" ? "ISO" : "Исо"} 9001)</p>
                  <p>{lang === "en" ? "ISO" : "Исо"} 14001:2019 ({lang === "en" ? "ISO" : "Исо"} 14001)</p>
                  <p>{lang === "en" ? "ISO" : "Исо"} 45001:2020 ({lang === "en" ? "ISO" : "Исо"} 45001)</p>
                </div>
              </div>
            </div>
            <div className={lang === "en" ? "before-navigation-item" : "before-navigation-item-ru"}>
              <GiTrophyCup className="icon" />
              <div>
                <h4>{lang === "en" ? "Great Industrial" : "Большая промышленность"}</h4>
                <p>{lang === "en" ? "Solution Provider" : "Поставщик решений"}</p>
              </div>
            </div>
            <div className={lang === "en" ? "before-navigation-item" : "before-navigation-item-ru"}>
              <FaGlobeAmericas className="icon" />
              <div>
                <h4>{lang === "en" ? "Address" : "Адрес"}</h4>
                <p>{lang === "en" ? "Uzbekistan, Tashkent" : "Узбекистан, Ташкент"}</p>
              </div>
            </div>
          </div>

          <div className="home-navigation">
            <ul>
              {/* <li>
                <NavLink to="/">{lang === "en" ? "Home" : "Главный"}</NavLink>
              </li> */}
              <li className="home-navigation-item">
                <NavLink to={`/${lang}/projects`}>{lang === "en" ? "Projects" : "Проекты"}</NavLink>
                <div className="home-navigation-drop">
                  <Link to={`/${lang}/projects/rockfiber`}>{lang === "en" ? "Rokfiber" : "Рокфайбер"}</Link>
                  <Link to={`/${lang}/projects/geobasalt-products`}>
                    {lang === "en" ? "GEOBASALT PRODUCTS" : "Геобазальтовые изделия"}
                  </Link>
                  <Link to={`/${lang}/projects/ecobasalt-group`}>{lang === "en" ? "ECOBASALT GROUP" : "Экобазальтовая группа"}</Link>
                  <Link to={`/${lang}/projects/goldfiber-pro`}>{lang === "en" ? "GOLDFIBER PRO" : "Голдфайбер про"}</Link>
                  <Link to={`/${lang}/projects/basalt-wool`}>{lang === "en" ? "BASALT WOOL" : "Базальтовая вата"}</Link>
                  <Link to={`/${lang}/projects/basfiber-trade`}>{lang === "en" ? "BASFIBER TRADE" : "Торговля бастволокном"}</Link>
                  <Link to={`/${lang}/projects/qoraqalpoq-basalt-wool`}>
                    {lang === "en" ? "QORAQALPOQ BASALTWOOL" : "КОРАКАЛПОК базальтоватная вата"}
                  </Link>
                  <Link to={`/${lang}/projects/basalt-quarry`}>{lang === "en" ? "BASALT QUARRY" : "Базальтовый карьер"}</Link>
                </div>
              </li>
              <li className="home-navigation-item">
                <NavLink to={`/${lang}/solutions`}>{lang === "en" ? "Solutions" : "Решения"}</NavLink>
                <div className="home-navigation-drop">
                  <Link to={`/${lang}/solutions/production-of-basalt-continuous-fiber`}>
                    {lang === "en" ? "production of Basalt continuous fiber" : "Производство базальтового волокна "}
                  </Link>
                  <Link to={`/${lang}/solutions/production-of-basalt-continuous-rockwool`}>
                    {lang === "en" ? "production of Basalt rockwool" : "Производство базальтового каменного волокна"}
                  </Link>
                  <Link to={`/${lang}/solutions/production-of-basalt-continuous-pipes`}>
                    {lang === "en" ? "production of BRP continuous pipes" : "Производство непрерывных труб BRP"}
                  </Link>
                  <Link to={`/${lang}/solutions/production-of-basalt-continuous-chopped-strand`}>
                    {lang === "en" ? "production of Basalt continuous chopped strand" : "Производство базальтовой непрерывной рубленой нити"}
                  </Link>
                  <Link to={`/${lang}/solutions/production-of-basalt-continuous-reinforcement-bars`}>
                    {lang === "en" ? "production of Basalt reinforcement bars" : "Производство базальтовой арматуры"}
                  </Link>
                  <Link to={`/${lang}/solutions/production-of-basalt-continuous-geogrids`}>
                    {lang === "en" ? "production of Basalt geogrids and facade mesh" : "Производство базальтовых георешеток и лачевой сетки"}
                  </Link>
                  <Link to={`/${lang}/solutions/production-of-basalt-continuous-fabric`}>
                    {lang === "en" ? "production of Basalt fabric" : "производство базальтовой ткани"}
                  </Link>
                </div>
              </li>
              <li>
                <NavLink to={`/${lang}/news`}>{lang === "en" ? "News" : "Новости"}</NavLink>
              </li>
              <li>
                <NavLink to={`/${lang}/partners`}>{lang === "en" ? "Partners" : "Партнеры"}</NavLink>
              </li>
              <li>
                <NavLink to={`/${lang}/about-us`}>{lang === "en" ? "About Us" : "О нас"}</NavLink>
              </li>
              <li>
                <NavLink to={`/${lang}/contact-us`}>{lang === "en" ? "Contact Us" : "Связаться"}</NavLink>
              </li>
              <li className="home-navigation-item">
                <div className="lang-container">
                  <img src={lang === "en" ? en : ru } alt="" />
                  <p style={{textTransform: "uppercase"}}>{lang === "en" ? "EN" : "RU"}</p>
                </div>
                <div className="home-navigation-drop">
                  <Link to={lang === "en" ? "/ru" : "/en"} onClick={() => langHandler(lang === "en" ? "ru" : "en")}>
                    <img src={lang === "en" ? ru : en} alt="" />
                    <p style={{textTransform: "uppercase", fontWeight: "600", fontSize: "18px"}}>{lang === "en" ? "RU" : "EN"}</p>
                  </Link>
                </div>
              </li>
            </ul>
            <NavLink to={`/${lang}/contact-us`}>{lang === "en" ? "Get a Quote" : "Получить предложение"}</NavLink>
          </div>
        </div>
      </div>
      <div className="header-mid">
        <video
          src={lava}
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
          poster={poster}
        ></video>
      </div>
      <div className="header-bottom">
        <SolutionSlider />
      </div>
    </header>
  );
}
