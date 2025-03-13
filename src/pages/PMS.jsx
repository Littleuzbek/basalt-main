import { useNavigate, useParams } from "react-router";
import pms1 from "../assets/solutionUnderProduct//pms/PMS1.jpg";
import control1 from "../assets/solutionUnderProduct//control/control1.jpg";
import scada1 from "../assets/solutionUnderProduct//scada/SCADA1.jpg"

export default function PMS() {
    const {lang} = useParams();
    const navigate = useNavigate();
  return (
    <div className="projects-page">
      <div>
      <div className="project-cardd pms">
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
            <img src={control1} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Measurement and control equipments"
                  : "Измерительное и контрольное оборудование"}
              </h4>
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/measurement-and-control-equipments`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd furnace-equipment">
            <img src={scada1} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "SCADA"
                  : "SCADA"}
              </h4>
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/scada`
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
