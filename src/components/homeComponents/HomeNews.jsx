import { FaComments, FaUser, FaRegCalendarAlt } from "react-icons/fa";
import { useLocation, useParams } from "react-router";
import news1 from "../../assets/Latestnews/news1.jpg";
import news2 from "../../assets/Latestnews/news2.jpg";
import news3 from "../../assets/Latestnews/news3.mp4";
import aboutBackPreload from "../../assets/aboutBackPreload.jpg"

export default function HomeNews() {
  const location = useLocation();
  const {lang} = useParams();
  
  const dd = new Date().getDate();
  const year = new Date().getFullYear();
  const monthName = new Date().toLocaleString("en", { month: "long" });
  return (
    <div className="latest-news-container">
      {location.pathname.includes("news") || 
      <>
        <h2>{lang === "en" ? "Our Latest News" : "Наши Последние Новости"}</h2>
        <span></span>
      </>}
      <div className="news">
        <div className="news-item" data-aos="fade-right" data-aos-duration="2000">
          <video
            src={news3}
            poster={aboutBackPreload}
            controls
            preload="metadata"
            alt=""
          />
          <div>
            <h4>{lang === "en" ? "Basalt Rebar" : "Базальтовая арматура"}</h4>
            <p>
              {lang === "en" ?
              "Basalt rebar is an innovative building material used in various fields of construction." :
              "Базальтовая арматура – инновационный строительный материал, применяемый в различных сферах строительства."}
              {lang === "en" ? 
              "This material is made from natural basalt raw materials and has a number of unique advantages:" :
              "Этот материал изготавливается из натурального базальтового сырья и обладает рядом уникальных преимуществ:"}
              {lang === "en" ? "- Corrosion resistance;" : "- Коррозионная стойкость;"}
              {lang === "en" ? "- Resistance to high temperatures and chemicals;" : "- Устойчивость к высоким температурам и химическим веществам;"}
              {lang === "en" ? "- Lightness and high strength;" : "- Легкость и высокая прочность;"}
              {lang === "en" ? "- Environmental safety;" : "- Экологическая безопасность;"}
              {lang === "en" ? "- Affordable price." : "- Доступная цена."}
            </p>
            <span className="reactions">
              <div>
                <FaComments /> 0 {lang === "en" ? "comments" : "комментарии"}
              </div>
              <div>
                <FaUser /> {lang === "en" ? "admin" : "админ"}
              </div>
              <div>
                <FaRegCalendarAlt /> {`${monthName} ${dd}, ${year}`}
              </div>
            </span>
          </div>
        </div>

        <div className="news-item" data-aos="fade-left" data-aos-duration="2000">
          <div className="">
            <img src={news1} loading="lazy" alt="" />
            <div>
              <h4>{lang === "en" ? "Uzbekistan - Pakistan" : "Узбекистан - Пакистан"}</h4>
              <p>
               {lang === "en" ? 
                `On February 11, a historic event took place in Lahore - the first "Made in Uzbekistan" national products exhibition began! 🇺🇿 🇵🇰 and the "Basalt Uzbekistan" group of companies participated in it.
                A major achievement for our company within the framework of the exhibition - a memorandum was signed with the large Pakistani company "Izhar Group of Companies" on the supply of basalt reinforcement! ` :
                `11 февраля в Лахоре произошло историческое событие – началась первая выставка национальной продукции «Сделано в Узбекистане»! 🇺🇿 🇵🇰 и в нем приняла участие группа компаний «Базальт Узбекистан». Крупное достижение для нашей компании в рамках выставки - подписан меморандум с крупной пакистанской компанией "Izhar Group of Companies" о поставках базальтовой арматуры!`}
              </p>
              <span className="reactions">
                <div>
                  <FaComments /> 0 {lang === "en" ? "comments" : "комментарии"}
                </div>
                <div>
                  <FaUser /> {lang === "en" ? "admin" : "админ"}
                </div>
                <div>
                  <FaRegCalendarAlt /> {`${monthName} ${dd}, ${year}`}
                </div>
              </span>
            </div>
          </div>
          <div>
            <img src={news2} loading="lazy" alt="" />
            <div>
              <h4>
              {
                lang === "en" ? 
                "Our basalt fiber and composite materials are mainly used in the following areas:" :
                "Наши базальтовые волокна и композитные материалы в основном используются в следующих областях:"
              }
              </h4>
              <p>
                {
                lang === "en" ? 
                `🏗️ Construction and industry
                🛣️ Road and bridge construction
                🚗 Automotive
                🚢 Shipbuilding
                🛸 Aerospace
                ⚡ Energy
                The high strength, long service life and environmental friendliness of our products are important for modern projects. We are ready to discuss your needs and offer the optimal solution!` :
                `🏗️ Строительство и промышленность 🛣️ Строительство дорог и мостов 🚗 Автомобилестроение Судостроение 🛸 🚢 Аэрокосмическая промышленность ⚡ Высокая прочность, длительный срок службы и экологичность нашей продукции важны для современных проектов. Мы готовы обсудить ваши потребности и предложить оптимальное решение!`
                }
              </p>
              <span className="reactions">
                <div>
                  <FaComments /> 0 {lang === "en" ? "comments" : "комментарии"}
                </div>
                <div>
                  <FaUser /> {lang === "en" ? "admin" : "админ"}
                </div>
                <div>
                  <FaRegCalendarAlt /> {`${monthName} ${dd}, ${year}`}
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
