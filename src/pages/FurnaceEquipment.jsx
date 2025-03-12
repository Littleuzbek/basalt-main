import { useNavigate, useParams } from "react-router";
import furnace from "../assets/solutionUnderProduct/furnace/Furnace4.jpg"
import platinum from "../assets/solutionUnderProduct/platinum/Bushing1.jpg"
import burnerTyped from "../assets/solutionUnderProduct/burner/burner-d.jpg"
import burnerTypeh from "../assets/solutionUnderProduct/burner/burner-h.jpg"
import winding from "../assets/solutionUnderProduct/winding/winding1.webp"

export default function FurnaceEquipment() {
    const {lang} = useParams();
    const navigate = useNavigate();
  return (
    <>
      <div className="projects-page">
        <div>
          <div className="project-cardd furnace-equipment">
            <img src={furnace} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Furnace"
                  : "Печь"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/furnace`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd furnace-equipment">
            <img src={platinum} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Platinum-rhodium feeders’ system"
                  : "Система платино-родиевых питателей"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/platinum-rhodium-feeders-system`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd furnace-equipment">
            <img src={burnerTyped} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Burner type-D"
                  : "Тип горелки-D"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/burner-type-d`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd furnace-equipment">
            <img src={burnerTypeh} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Burner type-D"
                  : "Тип горелки-H"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/burner-type-h`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd furnace-equipment">
            <img src={winding} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Winders"
                  : "Намотчики"}
              </h4>
              {/* <p>	Компания ТУЛАПРЕССМАШ производит сменные универсальные формообразователи для решеток перекрытия...</p> */}
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/winders`
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
