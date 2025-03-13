import "../components/Projects.css";
import { useNavigate, useParams } from "react-router";
import fiber from "../assets/basaltRockfiber/fiber1.jpg";
import geobasalt from "../assets/basaltGeogrid/geogrid2.jpg";
import ecobasalt from "../assets/basaltPipe/pipe4.jpg";
import goldfiber from "../assets/basaltGoldfiber/GOLDFIBER-31.jpg";
import wool from "../assets/basaltWool/wool3.jpg";
import trade from "../assets/basaltBasfiber/basfiber32.jpg";
import qqwool from "../assets/basaltQWool/qqWool3.jpg";
import quarry from "../assets/basaltQuarry/quarry5.jpg";
import { Helmet } from "react-helmet";

export default function Projects() {
  const navigate = useNavigate();
  const { lang } = useParams();
  return (
    <>
      <Helmet>
        <title>Basalt-Engineering products</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="projects-page">
        <div>
          <div
            className="project-cardd project-card-slider"
            id="project-slider-fiber"
          >
            <img loading="lazy" src={fiber} alt="" />
            <div>
              <h4>{lang === "en" ? "ROCKFIBER" : "РОКФАЙБЕР"}</h4>
              <p>
                {lang === "en"
                  ? "Production of basalt roving (basalt continuous fiber), basalt chopped strand and basalt reinforcement bars."
                  : "Комплекс по производству базальтового непрерывного волокна, нарезанного прута и арматурных стержней."}
              </p>
              <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                <button onClick={() => navigate(`/${lang}/projects/rockfiber`)}>
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div
            className="project-cardd project-card-slider"
            id="project-slider-geobasalt"
            style={{ "--height-geobasalt": lang === "en" ? "-100px" : "-108px"}}
          >
            <img loading="lazy" src={geobasalt} alt="" />
            <div>
              <h4 style={lang === "ru" ? { padding: "10px 20px" } : {}}>
                {lang === "en"
                  ? "GEOBASALT PRODUCTS"
                  : "ГЕОБАЗАЛЬТОВЫЕ ИЗДЕЛИЯ"}
              </h4>
              <p style={lang === "ru" ? { padding: "10px 20px 0" } : {}}>
                {lang === "en"
                  ? "Production of basalt geogrid and facade mesh."
                  : "Комплекс по производству базальтовых георешеток и фасадной сетки."}
              </p>
              <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                <button
                  onClick={() =>
                    navigate(`/${lang}/projects/geobasalt-products`)
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div
            className="project-cardd project-card-slider"
            id="project-slider-ecobasalt"
            style={{ "--height-ecobasalt": lang === "en" ? "-85px" : "-104px"}}
          >
            <img loading="lazy" src={ecobasalt} alt="" />
            <div>
              <h4>
                {lang === "en" ? "ECOBASALT GROUP" : "ЭКОБАЗАЛЬТОВАЯ ГРУППА"}
              </h4>
              <p>
                {lang === "en"
                  ? "Production of continuous BRP pipes"
                  : "Комплекс по производству непрерывных труб BRP."}
              </p>
              <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                <button
                  onClick={() => navigate(`/${lang}/projects/ecobasalt-group`)}
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div
            className="project-cardd project-card-slider"
            id="project-slider-goldfiber"
            style={{ "--height-goldfiber": lang === "en" ? "-120px" : "-135px"}}
          >
            <img loading="lazy" src={goldfiber} alt="" />
            <div>
              <h4>{lang === "en" ? "GOLDFIBER PRO" : "ГОЛДФАЙБЕР ПРО"}</h4>
              <p>
                {lang === "en"
                  ? "Production of basalt continuous fiber (including basalt direct roving) and basalt chopped strand."
                  : "Комплекс по производству базальтового непрерывного волокна (в том числе базальтового прямого ровинга) и базальтовой рубленой нити."}
              </p>
              <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                <button
                  onClick={() => navigate(`/${lang}/projects/goldfiber-pro`)}
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div
            className="project-cardd project-card-slider"
            id="project-slider-wool"
            // style={{ "--height-wool": lang === "en" ? "-102px" : "-102px"}}
          >
            <img loading="lazy" src={wool} alt="" />
            <div>
              <h4>{lang === "en" ? "BASALT WOOL" : "БАЗАЛЬТОВАЯ ВАТА"}</h4>
              <p>
                {lang === "en"
                  ? "Production of basalt rockwool and insulation materials"
                  : "Комплекс по производству базальтовой минеральной ваты."}
              </p>
              <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                <button
                  onClick={() => navigate(`/${lang}/projects/basalt-wool`)}
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div
            className="project-cardd project-card-slider"
            id="project-slider-basfiber"
            style={{ "--height-basfiber": lang === "en" ? "-120px" : "-102px"}}
          >
            <img loading="lazy" src={trade} alt="" />
            <div>
              <h4>
                {lang === "en" ? "BASFIBER TRADE" : "ТОРГОВЛЯ БАСФАЙБЕРОМ"}
              </h4>
              <p>
                {lang === "en"
                  ? "Production of basalt continuous fiber (including basalt direct roving) and basalt fabric"
                  : "Комплекс по производству базальтового волокна и тканей."}
              </p>
              <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                <button
                  onClick={() => navigate(`/${lang}/projects/basfiber-trade`)}
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div
            className="project-cardd project-card-slider"
            id="project-slider-qqwool"
            style={{ "--height-qqwool": lang === "en" ? "-110px" : "-107px"}}
          >
            <img loading="lazy" src={qqwool} alt="" />
            <div>
              <h4 className={lang === "en" ? "" : "rus-wool"}>
                {lang === "en"
                  ? "QORAQALPOQ BASALTWOOL"
                  : "КОРАКАЛПОК БАЗАЛЬТОВАЯ ВАТА"}
              </h4>
              <p style={{ padding: "10px 20px 0" }}>
                {lang === "en"
                  ? "Production of basalt rockwool and insulation materials"
                  : "Производство базальтовой минеральной ваты и изоляционных материалов."}
              </p>
              <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                <button
                  onClick={() =>
                    navigate(`/${lang}/projects/qoraqalpoq-basalt-wool`)
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div
            className="project-cardd project-card-slider"
            id="project-slider-quarry"
            style={{ "--height-quarry": lang === "en" ? "-85px" : "-102px"}}
          >
            <img loading="lazy" src={quarry} alt="" />
            <div>
              <h4>{lang === "en" ? "BASALT QUARRY" : "БАЗАЛЬТОВЫЙ КАРЬЕР"}</h4>
              <p>
                {lang === "en"
                  ? "Production of basalt quarry"
                  : "Добыча базальтовой породы и подготовка сырья."}
              </p>
              <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                <button
                  onClick={() => navigate(`/${lang}/projects/basalt-quarry`)}
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
