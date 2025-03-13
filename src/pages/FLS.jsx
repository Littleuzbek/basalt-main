import { useNavigate, useParams } from "react-router";
import pms1 from "../assets/solutionUnderProduct//pms/PMS1.jpg";

export default function FLS() {
    const {lang} = useParams();
    const navigate = useNavigate();
  return (
    <div className="projects-page">
      <div>
      <div className="project-cardd furnace-equipment">
            <img src={pms1} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Plant automation system"
                  : "Система автоматизации завода"}
              </h4>
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/plant-automation-system`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd furnace-equipment">
            <img src={pms1} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Plant automation system"
                  : "Система автоматизации завода"}
              </h4>
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/plant-automation-system`
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
  );
}
