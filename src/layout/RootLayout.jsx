import { Link, NavLink, Outlet, data, replace, useLocation, useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import entrance from "../assets/entrance1.jpg";
import projBack from "../assets/projectPageBack.mp4"
import solutionBack from "../assets/solutionPageBack.mp4"
import aboutBack from "../assets/aboutBack.mp4"
import en from "../assets/eng.png"
import ru from "../assets/rus.png"
// import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import Footer from "../components/Footer";
import FixedBtn from "../components/FixedBtn";
import projBackPreload from "../assets/projectBackPreload.png"
import solBackPreload from "../assets/solutionBackPreload.jpg"
import aboutBackPreload from "../assets/aboutBackPreload.jpg"
import {langs} from "../assets/product-data"

export default function RootLayout() {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();
  const link = useLocation();
  const {pathname} = useLocation();
  const {lang} = useParams();
  const nextLang =  decodeURIComponent(pathname)?.replace(lang, langs.find((e)=>e.lang !== lang)?.lang);
  const sect = [
    {
      route: "projects", 
      ru: "проекты", 
      en: "projects"
    },
    {
      route: "solutions",
      ru: "решения", 
      en: "solutions"
    },
    {
      route: "news", 
      ru: "новости", 
      en: "news"
    },
    {
      route: "partners",
      ru: "партнеры", 
      en: "partners"
    },
    {
      route: "about-us",
      ru: "о нас", 
      en: "about us"
    },
    {
      route: "contact-us",
      ru: "Свяжитесь с нами", 
      en: "contact us"
    },
    {
      route: "technological-furnace-equipment",
      en: "technological furnace equipment",
      ru: "технологическое печное оборудование"
    },
    {
      route: "complete-plant-automation-system",
      en: "complete plant automation system",
      ru: "полная система автоматизации завода"
    }
  ];

  useEffect(() => {
    const header = document.getElementById("header");
    
    window.addEventListener("scroll", () => {
      
      if (window.scrollY > 140) {
        header?.classList.add("scrolled");
      } else {
        header?.classList.remove("scrolled");
      }
    });
  }, [window.scrollY]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if(lang && lang !== "en" && lang !== "ru"){
      throw data("Page not Found", {status: 404})
    }
    
  }, [link]);
  
  let timeOut;
  
  const navigationHandler = () => {
    const dropDown = document.querySelector(".navigation-drop");
    
    dropDown.setAttribute("style","display: none")
    
    clearTimeout(timeOut)
    
    timeOut = setTimeout(() => {
      dropDown.removeAttribute("style")
    }, 100);
  };
  
  const closeMenu = () => {
    setMenu(false)
  }
  
  const langHandler = (newLang) => {
    localStorage.setItem("lang", newLang);

    timeOut = setTimeout(() => {
      window.location.reload();
    }, 100);
  }
  
  console.log(link.pathname);
  return (
    <>
      <div
        className="main-header"
        style={link.pathname === `/${lang}` ? { display: "none" } : {}}
      >
        <div>
          <img src={logo} alt="" onClick={() => navigate(`/${lang}`)} />
          <ul>
            <li>
              <Link to={`/${lang}`}>{lang === "en" ? "Home" : "Главный"}</Link>
            </li>
            <li>
              <NavLink to={`/${lang}/projects`}>
                {lang === "en" ? "Projects" : "Проекты"}
              </NavLink>
              <div className="navigation-drop">
                <Link
                  to={`/${lang}/projects/rockfiber`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en" ? "Rokfiber" : "Рокфайбер"}
                </Link>
                <Link
                  to={`/${lang}/projects/geobasalt-products`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en"
                    ? "GEOBASALT PRODUCTS"
                    : "Геобазальтовые изделия"}
                </Link>
                <Link
                  to={`/${lang}/projects/ecobasalt-group`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en" ? "ECOBASALT GROUP" : "Экобазальтовая группа"}
                </Link>
                <Link
                  to={`/${lang}/projects/goldfiber-pro`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en" ? "GOLDFIBER PRO" : "Голдфайбер про"}
                </Link>
                <Link
                  to={`/${lang}/projects/basalt-wool`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en" ? "BASALT WOOL" : "Базальтовая вата"}
                </Link>
                <Link
                  to={`/${lang}/projects/basfiber-trade`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en" ? "BASFIBER TRADE" : "Торговля бастволокном"}
                </Link>
                <Link
                  to={`/${lang}/projects/qoraqalpoq-basalt-wool`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en"
                    ? "QORAQALPOQ BASALTWOOL"
                    : "КОРАКАЛПОК базальтоватная вата"}
                </Link>
                <Link
                  to={`/${lang}/projects/basalt-quarry`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en" ? "BASALT QUARRY" : "Базальтовый карьер"}
                </Link>
              </div>
            </li>
            <li>
              <NavLink to={`/${lang}/solutions`}>
                {lang === "en" ? "Solutions" : "Решения"}
              </NavLink>
              <div className="navigation-drop">
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-fiber`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en"
                    ? "production of Basalt continuous fiber"
                    : "ПРОИЗВОДСТВО БНВ (БАЗАЛЬТОВОГО НЕПРЕРЫВНОГО ВОЛОКНА)Производство базальтового волокна"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-rockwool`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en"
                    ? "production of Basalt rockwool"
                    : "ПРОИЗВОДСТВО БАЗАЛЬТОВОЙ КАМЕНОЙ ВАТЫ"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-pipes`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en"
                    ? "production of BRP continuous pipes"
                    : "ПРОИЗВОДСТВО БАЗАЛЬТА КОМПОЗИТНЫХ ТРУБ"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-chopped-strand`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en"
                    ? "production of Basalt continuous chopped strand"
                    : "ППРОИЗВОДСТВО БАЗАЛЬТОВОЙ ФИБРЫ"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-reinforcement-bars`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en"
                    ? "production of Basalt reinforcement bars"
                    : "ПРОИЗВОДСТВО БАЗАЛЬТОВОЙ АРМАТУРЫ"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-geogrids`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en"
                    ? "production of Basalt geogrids and facade mesh"
                    : "ПРОИЗВОДСТВО БАЗАЛЬТОВЫХ ФАСАДНЫХ И ГЕОСЕТОК"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-fabric`}
                  onClick={() => navigationHandler()}
                >
                  {lang === "en"
                    ? "production of Basalt fabric"
                    : "ПРОИЗВОДСТВО БАЗАЛЬТОВОЙ КРУЧЕНОЙ НИТИ И ТКАНИ"}
                </Link>
              </div>
            </li>
            <li>
              <NavLink to={`/${lang}/news`}>
                {lang === "en" ? "News" : "Новости"}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/partners`}>
                {lang === "en" ? "Partners" : "Партнеры"}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/about-us`}>
                {lang === "en" ? "About Us" : "О нас"}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/contact-us`}>
                {lang === "en" ? "Contact Us" : "Связаться"}
              </NavLink>
            </li>
            <li>
              <div className="lang-container">
                <img src={lang === "en" ? en : ru} alt="" />
                <p style={{ textTransform: "uppercase", color: "black" }}>
                  {lang === "en" ? "EN" : "RU"}
                </p>
              </div>
              <div className="navigation-drop">
                <Link
                  to={nextLang}
                  replace={true}
                  onClick={() => langHandler(lang === "en" ? "ru" : "en")}
                >
                  <img src={lang === "en" ? ru : en} alt="" />
                  <p>{lang === "en" ? "RU" : "EN"}</p>
                </Link>
              </div>
            </li>
          </ul>

          {/* mobile menu */}

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
                <Link
                  to={`/${lang}`}
                  className={`menu-item ${
                    !link.pathname.includes(`/${lang}/`) && "active"
                  }`}
                  onClick={() => closeMenu()}
                >
                  {lang === "en" ? "Home" : "Главный"}
                </Link>
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
          {/* mobile menu end */}
        </div>

        <span className="header-background">
          {link.pathname.includes("/projects") ||
            link.pathname.includes("/solutions") ||
            link.pathname.includes("/about-us") || (
              <img src={entrance} alt="" onClick={() => navigate(`/${lang}`)} />
            )}
          {link.pathname.includes("/projects") && (
            <video
              src={projBack}
              autoPlay
              loop
              muted
              preload="auto"
              poster={projBackPreload}
              playsInline
            ></video>
          )}
          {link.pathname.includes("/solutions") && (
            <video
              src={solutionBack}
              autoPlay
              loop
              muted
              preload="auto"
              poster={solBackPreload}
              playsInline
            ></video>
          )}
          {link.pathname.includes("/about-us") && (
            <video
              src={aboutBack}
              autoPlay
              loop
              muted
              preload="auto"
              poster={aboutBackPreload}
              playsInline
              style={{ objectPosition: "center 40%" }}
            ></video>
          )}
          <div>
            <h1 style={{ textTransform: "capitalize" }}>
              {lang === "en"
                ? sect.find(
                    (route) => link?.pathname?.split("/")?.[2] === route.route
                  )?.en
                : sect.find(
                    (route) => link?.pathname?.split("/")?.[2] === route.route
                  )?.ru}
            </h1>
            <p
              style={{
                textTransform: "capitalize",
                display: "flex",
                alignItems: "center",
              }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/"
              >
                {lang === "en" ? "Home" : "Главный"}
              </NavLink>{" "}
              <span style={{ margin: "0 10px" }}>{">"}</span>{" "}
              {lang === "en"
                ? sect.find(
                    (route) => link?.pathname?.split("/")?.[2] === route.route
                  )?.en
                : sect.find(
                    (route) => link?.pathname?.split("/")?.[2] === route.route
                  )?.ru}
            </p>
          </div>
        </span>
      </div>

      <div className="nav-container" id="header">
        <div>
          <img src={logo} alt="" onClick={() => navigate(`/${lang}`)} />
          <ul className="navigation">
            <li>
              <Link
                to={`/${lang}`}
                className={
                  !link?.pathname?.includes(`/${lang}/`) ? "active" : ""
                }
              >
                {lang === "en" ? "Home" : "Главный"}
              </Link>
            </li>
            <li>
              <NavLink to={`/${lang}/projects`}>
                {lang === "en" ? "Projects" : "Проекты"}
              </NavLink>
              <div className="navigation-drop">
                <Link to={`/${lang}/projects/rockfiber`}>
                  {lang === "en" ? "Rokfiber" : "Рокфайбер"}
                </Link>
                <Link to={`/${lang}/projects/geobasalt-products`}>
                  {lang === "en"
                    ? "GEOBASALT PRODUCTS"
                    : "Геобазальтовые изделия"}
                </Link>
                <Link to={`/${lang}/projects/ecobasalt-group`}>
                  {lang === "en" ? "ECOBASALT GROUP" : "Экобазальтовая группа"}
                </Link>
                <Link to={`/${lang}/projects/goldfiber-pro`}>
                  {lang === "en" ? "GOLDFIBER PRO" : "Голдфайбер про"}
                </Link>
                <Link to={`/${lang}/projects/basalt-wool`}>
                  {lang === "en" ? "BASALT WOOL" : "Базальтовая вата"}
                </Link>
                <Link to={`/${lang}/projects/basfiber-trade`}>
                  {lang === "en" ? "BASFIBER TRADE" : "Торговля бастволокном"}
                </Link>
                <Link to={`/${lang}/projects/qoraqalpoq-basalt-wool`}>
                  {lang === "en"
                    ? "QORAQALPOQ BASALTWOOL"
                    : "КОРАКАЛПОК базальтоватная вата"}
                </Link>
                <Link to={`/${lang}/projects/basalt-quarry`}>
                  {lang === "en" ? "BASALT QUARRY" : "Базальтовый карьер"}
                </Link>
              </div>
            </li>
            <li>
              <NavLink to={`/${lang}/solutions`}>
                {lang === "en" ? "Solutions" : "Решения"}
              </NavLink>
              <div className="navigation-drop">
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-fiber`}
                >
                  {lang === "en"
                    ? "production of Basalt continuous fiber"
                    : "Производство базальтового волокна "}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-rockwool`}
                >
                  {lang === "en"
                    ? "production of Basalt rockwool"
                    : "Производство базальтового каменного волокна"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-pipes`}
                >
                  {lang === "en"
                    ? "production of BRP continuous pipes"
                    : "Производство непрерывных труб BRP"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-chopped-strand`}
                >
                  {lang === "en"
                    ? "production of Basalt continuous chopped strand"
                    : "Производство базальтовой непрерывной рубленой нити"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-reinforcement-bars`}
                >
                  {lang === "en"
                    ? "production of Basalt reinforcement bars"
                    : "Производство базальтовой арматуры"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-geogrids`}
                >
                  {lang === "en"
                    ? "production of Basalt geogrids and facade mesh"
                    : "Производство базальтовых георешеток и лачевой сетки"}
                </Link>
                <Link
                  to={`/${lang}/solutions/production-of-basalt-continuous-fabric`}
                >
                  {lang === "en"
                    ? "production of Basalt fabric"
                    : "производство базальтовой ткани"}
                </Link>
              </div>
            </li>
            <li>
              <NavLink to={`/${lang}/news`}>
                {lang === "en" ? "News" : "Новости"}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/partners`}>
                {lang === "en" ? "Partners" : "Партнеры"}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/about-us`}>
                {lang === "en" ? "About Us" : "О нас"}
              </NavLink>
            </li>
            <li>
              <NavLink to={`/${lang}/contact-us`}>
                {lang === "en" ? "Contact Us" : "Связаться"}
              </NavLink>
            </li>
            <li>
              <div className="lang-container">
                <img src={lang === "en" ? en : ru} alt="" />
                <p style={{ textTransform: "uppercase", color: "black" }}>
                  {lang === "en" ? "EN" : "RU"}
                </p>
              </div>
              <div className="navigation-drop">
                <Link
                  to={nextLang}
                  replace={true}
                  onClick={() => langHandler(lang === "en" ? "ru" : "en")}
                >
                  <img src={lang === "en" ? ru : en} alt="" />
                  <p>{lang === "en" ? "RU" : "EN"}</p>
                </Link>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <img src={logo} alt="" onClick={() => navigate("/")} />

          <div className="menuBtn" style={{ display: "block !important" }}>
            {menu ? (
              <IoMdClose className="btn" onClick={() => setMenu(!menu)} />
            ) : (
              <LuMenu className="btn" onClick={() => setMenu(!menu)} />
            )}
          </div>

          {/* mobile menu */}
          {menu && (
            <div className="menu-container">
              <div className="menu">
                <NavLink
                  to={`/${lang}`}
                  className="menu-item"
                  onClick={() => closeMenu()}
                >
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
          {/* mobile menu end */}
        </div>
      </div>
      <Outlet />
      <Footer />
      {link?.pathname?.includes("/contact-us") || <FixedBtn />}
    </>
  );
}
