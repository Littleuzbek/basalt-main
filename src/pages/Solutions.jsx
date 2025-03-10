import { useNavigate, useParams } from "react-router";
import "../components/Projects.css";
import fiber from "../assets/basaltGoldfiber/GOLDFIBER-2.jpg";
import wool from "../assets/solutionRockwool/solWool0.webp";
import pipe from "../assets/solutionPipe/solPipe6.jpg";
import strand from "../assets/solutionStrand/solStrand2.jpg";
import bar from "../assets/solutionBars/solBar4.jpg";
import mesh from "../assets/solutionMesh/solMesh1.jpg";
import fabric from "../assets/solutionFabric/solFabric1.jpg";
import { Helmet } from "react-helmet";

export default function Solutions() {
  const navigate = useNavigate();
  const { lang } = useParams();

  return (
    <>
      <Helmet>
        <title>Basalt-Engineering solutions</title>
        <meta name="description" content="" />
      </Helmet>
      <div className="projects-page">
        <div>
          <div className="project-cardd solution-card">
            <img src={fiber} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Complex for the production of Basalt continuous fiber"
                  : "Производство базальтового непрерывного волокна"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(`/${lang}/solutions/production-of-basalt-continuous-fiber`)
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd solution-card">
            <img src={wool} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Complex for the production of Basalt rockwool"
                  : "Производство базальтовой минеральной ваты"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/production-of-basalt-continuous-rockwool`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd solution-card">
            <img src={pipe} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Complex for the production of BRP continuous pipes"
                  : "Производство базальтовых непрерывных труб"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(`/${lang}/solutions/production-of-basalt-continuous-pipes`)
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div
            className="project-cardd solution-card"
            id="solution-slider-card"
          >
            <img src={strand} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Complex for the production of Basalt continuous chopped strand"
                  : "Производство базальтовой непрерывной рубленой нити"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/production-of-basalt-continuous-chopped-strand`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd solution-card">
            <img src={bar} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Complex for the production of Basalt reinforcement bars"
                  : "Производство базальтовой арматуры"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/production-of-basalt-continuous-reinforcement-bars`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div
            className="project-cardd solution-card"
            id="solution-slider-card"
          >
            <img src={mesh} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Complex for the production of Basalt geogrids and facade mesh"
                  : "Производство базальтовых Георешеток и фасадной сетки"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/production-of-basalt-continuous-geogrids`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd solution-card">
            <img src={fabric} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Complex for the production of Basalt fabric"
                  : "Производство базальтовой ткани"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/production-of-basalt-continuous-fabric`
                    )
                  }
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
