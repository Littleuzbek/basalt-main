import { useNavigate, useParams } from "react-router";
import fls1 from "../assets/solutionUnderProduct/fls/FLS1.jpg";
import fls2 from "../assets/solutionUnderProduct/fls/fls-1.jpg";

export default function FLS() {
    const {lang} = useParams();
    const navigate = useNavigate();
  return (
    <div className="projects-page">
      <div style={{gridTemplateColumns: "auto auto", justifyContent: "space-around"}}>
      <div className="project-cardd furnace-loader">
            <img src={fls1} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Furnace loader system"
                  : "Система загрузки печи"}
                  <br />
                  (FLS-1)
              </h4>
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/fls-1`
                    )
                  }
                >
                  {lang === "en" ? "Read more" : "Подробнее"}
                </button>
              </div>
            </div>
          </div>
          <div className="project-cardd furnace-loader">
            <img src={fls2} loading="lazy" alt="" />
            <div>
              <h4>
                {lang === "en"
                  ? "Furnace loader system "
                  : "Система загрузки печи "}
                  <br />
                  (FLS-2)
              </h4>
              <div className="moreBtn">
                <button
                  onClick={() =>
                    navigate(
                      `/${lang}/solutions/fls-2`
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
