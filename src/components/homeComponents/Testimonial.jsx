import { useState } from "react";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import end1 from "../../assets/endProducts/end1.jpg"
import end2 from "../../assets/endProducts/end2.jpg"
import end3 from "../../assets/endProducts/end3.jpg"
import end4 from "../../assets/endProducts/end4.jpg"
import end5 from "../../assets/endProducts/end5.jpg"
import end6 from "../../assets/endProducts/end6.jpg"
import end7 from "../../assets/endProducts/end7.jpg"

import EndProductSlider from "../sliders/EndProductSlider";
import { useParams } from "react-router";

export default function Testimonial() {
  const [offer, setOffer] = useState(3);
  const images = [end1, end2, end3, end4, end5, end6, end7];
  const {lang} = useParams();


  const offerHandler = (order) => {
    if(offer === order){
      setOffer(0)
    }else{
      setOffer(order)
    }
  }

  return (
    <div className="testimonial-contatiner">
      <div>
      <div className="testimonial" data-aos="fade-right" data-aos-duration="2000">
          <h2> {lang === "en" ? "END PRODUCTS" : "ЕНД ПРОДУКТЫ"}</h2>
          <span></span>
          <EndProductSlider images={images}/>
        </div>

        <div className="FAQ" data-aos="fade-left" data-aos-duration="2000">
          <h2>{lang === "en" ? "FAQ's" : "Часто задаваемые вопросы"}</h2>
          <span></span>
          <div>
            <div className="offer" onClick={() => offerHandler(1)}>
              <div>
                {offer === 1 ? <FaMinus style={{backgroundColor: "var(--orange)", color: "var(--grayish)"}}/> : <FaPlus />}
                <div style={offer === 1 ? {backgroundColor: "var(--grayish)", color: "white", fontSize: "13.5px"} : {fontSize: "13.5px"}}>
                  {lang === "en" ? 
                  "What is the minimum plant capacity that can be built and make a profit?" :
                  "Какова минимальная мощность завода, который можно построить и получить прибыль?"}
                </div>
              </div>
              {offer === 1 && <p >
                - {lang === "en" ?
                  "It depends on where the end product is used. If it is for construction materials, we recommend to our clients to start with at least 5 000 TPA plant." : 
                  "Это зависит от того, где используется конечный продукт. Если это строительные материалы, мы рекомендуем нашим клиентам начинать с завода мощностью не менее 5 000 тонн в год."}
              </p>}
            </div>
            <div className="offer" onClick={() => offerHandler(2)}>
              <div>
                {offer === 2 ? <FaMinus style={{backgroundColor: "var(--orange)", color: "var(--grayish)"}}/> : <FaPlus />}
                <div style={offer === 2 ? {backgroundColor: "var(--grayish)", color: "white"} : {}}>
                  {lang === "en" ?
                  "What is the difference between assembled and direct roving?" : 
                  "В чем разница между собранным и прямым ровингом?"}
                </div>
              </div>
              {offer === 2 &&<p >
                { lang === "en" ?
                "- Assembled roving is formed by joining several threads into one on cross winding machines and used mostly in pultrusion for manufacturing construction materials." : 
                "- Собранный ровинг формируется путем соединения нескольких нитей в одну на машинах крестовой намотки и используется в основном в пултрузии для производства строительных материалов."}
                {lang === "en" ? 
                "- Direct roving is formed on winders right after coming out of the furnace. It is also used in production of construction materials, but also widely implemented in the fields where more advanced materials produced." : 
                "- Прямой ровинг формируется на намоточных станках сразу после выхода из печи. Он также используется в производстве строительных материалов, но также широко применяется в областях, где производятся более современные материалы."}     
              </p>}
            </div>
            <div className="offer" onClick={() => offerHandler(3)}>
              <div>
                {offer === 3 ? <FaMinus style={{backgroundColor: "var(--orange)", color: "var(--grayish)"}}/> : <FaPlus />}
                <div style={offer === 3 ? {backgroundColor: "var(--grayish)", color: "white"} : {}}>
                  {lang === "en" ? 
                  "Why use basalt fiber instead of fiberglass?" :
                  "Почему используют базальтовое волокно вместо стекловолокна?"}
                </div>
              </div>
              {offer === 3 && <p >
                -{lang === "en" ? 
                " It is one of the frequently asked questions. Basalt and glass fibers both have unique properties. If you compare basalt fiber to regular fiberglass (as now there are different types of glass fiber on the market), basalt fiber has a very high resistance to chemically aggressive environments (5 times higher) and therefore is not damaged in contact with salt solutions, withstanding almost any severe conditions without losing its performance characteristics. One of the bright examples is a usage of basalt geogrids in road constructions." : 
                " Это один из часто задаваемых вопросов. Базальтовое и стеклянное волокно обладают уникальными свойствами. Если сравнивать базальтовое волокно с обычным стекловолокном (а сейчас на рынке представлены различные виды стеклянного волокна), то базальтовое волокно обладает очень высокой устойчивостью к химически агрессивным средам (в 5 раз выше) и поэтому не разрушается при контакте с солевыми растворами, выдерживая практически любые суровые условия без потери своих эксплуатационных характеристик. Один из ярких примеров — использование базальтовых геосеток в дорожном строительстве."}
              </p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
