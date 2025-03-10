import { useNavigate, useParams } from "react-router";
import welcomePic from "../../assets/about-img.jpg";

export default function Welcome() {
  const {lang} = useParams();
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <div>
        <div className="welcome-words" data-aos="fade-right" data-aos-duration="2000">
          <h2>{lang === "en" ? "Kindness" : "Доброта"}</h2>
          <h2>{lang === "en" ? "Melts Stone" : "Плавит камень"}</h2>

          <p>
            {lang === "en" ?
            `The Group of companies BASALT UZBEKISTAN was founded in 2015 in the Jizzakh region, Forish district, Republic of Uzbekistan. Location - basalt quarry "Osmonsoy". 
            BASALT UZBEKISTAN presents a wide range of basalt materials for construction in Uzbekistan and other countries. It is one of the largest manufacturers of composite materials in CIS region.` :
            `Группа компаний BASALT UZBEKISTAN была основана в 2015 году в Джизакской области, Фаришском районе, Республике Узбекистан. Местонахождение - базальтовый карьер «Осмонсой».
            BASALT UZBEKISTAN представляет широкий ассортимент базальтовых материалов для строительства в Узбекистане и других странах. Является одним из крупнейших производителей композитных материалов в регионе СНГ.`
            }
          </p>

          <p>
            {
              lang === "en" ?
              "BASALT UZBEKISTAN carries out a full production cycle, starting with the extraction of basalt rocks in Forish district of Jizzakh region and ending with the supply of various finished products worldwide. Our enterprises use innovative cutting-edge technology developed within the company as well as brought from EU." :
              "BASALT UZBEKISTAN осуществляет полный цикл производства, начиная с добычи базальтовых пород в Фаришском районе Джизакской области и заканчивая поставкой готовой продукции по всему миру. На наших предприятиях используются инновационные передовые технологии, как разработанные внутри компании, так и привезенные из ЕС."
            } 
          </p>
          <button onClick={()=>navigate("/about-us")}>{lang === "en" ? "Read More" : "Подробнее"}</button>
        </div>

        <img src={welcomePic} loading="lazy" alt="" data-aos="fade-left" data-aos-duration="2000"/>
      </div>
    </div>
  );
}
