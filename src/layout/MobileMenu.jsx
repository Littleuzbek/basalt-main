import { useState } from "react";
import { NavLink } from "react-router";
import { IoMdClose } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import logo from "../assets/logo.png";

export default function MobileMenu({lang}) {
  const [menu, setMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false)
  }
  return (
    <>
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
              </div>
            </div>
          )}



        <div>
          <img src={logo} alt="" onClick={() => navigate("/")} />

          <div className="menuBtn" style={{ display: "block !important" }}>
            {menu ? (
              <IoMdClose className="btn" onClick={() => setMenu(!menu)} />
            ) : (
              <LuMenu className="btn" onClick={() => setMenu(!menu)} />
            )}
          </div>

          {/* mobile scroll menu*/}
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
              </div>
            </div>
          )}
        </div>

          {/* mobile scroll menu end */}
    </>
    )
}
