import "../Projects.css";
import "../homeComponents/Header.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
  import { GrFormPrevious } from "react-icons/gr";
import { useRef } from "react";
import { useNavigate, useParams } from "react-router";
import fiber from "../../assets/basaltGoldfiber/GOLDFIBER-2.jpg"
import wool from "../../assets/solutionRockwool/solWool0.webp"
import pipe from "../../assets/solutionPipe/solPipe6.jpg"
import strand from "../../assets/solutionStrand/solStrand2.jpg"
import bar from "../../assets/solutionBars/solBar4.jpg"
import mesh from "../../assets/solutionMesh/solMesh1.jpg"
import fabric from "../../assets/solutionFabric/solFabric1.jpg"

export default function SolutionSlider() {
  const navigate = useNavigate();
  let sliderRef = useRef(null);
  const {lang} = useParams();

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    focusOnSelect: true,
    nav: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 5,
    draggable: true,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 400
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 400
        }
      },
    ]
  };

  return (
    <div className="solution-slider" >
      <div className="action-container">
        <GrFormPrevious onClick={() => previous()}/>
        <GrFormPrevious onClick={() => next()}/>
      </div>
      <div>
        <div className="slider-container">
          <Slider 
           ref={slider => {
             sliderRef = slider;
            }}
            {...settings}>
            <div className="project-cardd solution-slider-card">
              <img
                loading="lazy"
                src={fiber}
                alt=""
                />
              <div>
                <h4>
                  {
                    lang === "en" ? 
                    "Complex for the production of Basalt continuous fiber" :
                    "Производство базальтового непрерывного волокна"
                  }
                </h4>
                <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                  <button onClick={() => navigate(`/${lang}/solutions/production-of-basalt-continuous-fiber`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card">
              <img
                src={wool}
                loading="lazy"
                alt=""
                />
              <div>
                <h4>
                {
                  lang === "en" ? 
                  "Complex for the production of Basalt rockwool" :
                  "Производство базальтовой минеральной ваты"
                }
                </h4>
                <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                  <button onClick={()=> navigate(`/${lang}/solutions/production-of-basalt-continuous-rockwool`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card">
              <img
                src={pipe}
                loading="lazy"
                alt=""
                />
              <div>
                <h4>
                  {
                    lang === "en" ? 
                    "Complex for the production of BRP continuous pipes" :
                    "Производство базальтовых непрерывных труб"
                  }
                </h4>
                <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                  <button onClick={()=> navigate(`/${lang}/solutions/production-of-basalt-continuous-pipes`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card" id="solution-slider-card">
              <img
                src={strand}
                loading="lazy"
                alt=""
                />
              <div >
               <h4>
                {
                  lang === "en" ? 
                  "Complex for the production of Basalt continuous chopped strand" :
                  "Производство базальтовой непрерывной рубленой нити"
                }
                </h4>
                <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                  <button onClick={()=> navigate(`/${lang}/solutions/production-of-basalt-continuous-chopped-strand`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card">
              <img
                src={bar}
                loading="lazy"
                alt=""
                />
              <div>
                <h4>
                  {
                    lang === "en" ?
                    "Complex for the production of Basalt reinforcement bars" :
                    "Производство базальтовой арматуры"
                  }
                </h4>
                <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                  <button onClick={()=> navigate(`/${lang}/solutions/production-of-basalt-continuous-reinforcement-bars`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card" id="solution-slider-card">
              <img
                src={mesh}
                loading="lazy"
                alt=""
                />
              <div >
                <h4>
                  {
                    lang === "en" ?
                    "Complex for the production of Basalt geogrids and facade mesh" :
                    "Производство базальтовых Георешеток и фасадной сетки"
                  }
                </h4>
                <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                  <button onClick={()=> navigate(`/${lang}/solutions/production-of-basalt-continuous-geogrids`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
            <div className="project-cardd solution-slider-card">
              <img
                src={fabric}
                loading="lazy"
                alt=""
                />
              <div >
                <h4>
                  {
                    lang === "en" ?
                    "Complex for the production of Basalt fabric" :
                    "Производство базальтовой ткани"
                  }
                </h4>
                <div className={`moreBtn ${lang === "en" ? "" : "hoverBtn"}`}>
                  <button onClick={()=> navigate(`/${lang}/solutions/production-of-basalt-continuous-fabric`)}>
                    {lang === "en" ? "Read more" : "Подробнее"}
                  </button>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="action-container-sm">
        <GrFormPrevious onClick={() => previous()}/>
        <GrFormPrevious onClick={() => next()}/>
      </div>
    </div>
  );
}
