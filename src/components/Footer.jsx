import "./Footer.css";
import { useNavigate, useParams } from "react-router";
import Basaltlogo from "../assets/logo-footer.png";
import Phoneicon from "../assets/../assets/PhoneIcon.png";
import Directicon from "../assets/direct_icon.png";
import Skype from "../assets/skype.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Linkedin from "../assets/linkedin.png";
import news1 from "../assets/Latestnews/news1.jpg";
import news2 from "../assets/Latestnews/news2.jpg";

export default function Footer() {
    const {lang} = useParams();
    const navigate = useNavigate(); 
  return (
    <div className="Footer_main">
        <div className="Footer">
            <div className="Footer_logo-widget">
               <img src={Basaltlogo} className="Footer_logo-icon" />
               <p>
                {lang === "en" ? 
               "Special “turnkey” solutions and plants for various businesses in basalt composite industry." :
               "Специальные решения и заводы «под ключ» по разным направлениям в индустрии базальтокомпозитных материалов."}
               </p>
               <div className="Footer_phone-number--div"><img src={Phoneicon} className="Phone_icon-footer"/><p>+998 (93) 183-01-10</p></div>
               <span className="Footer_space-line--long" />
               <a href="/" className="Footer_mail">info@basalt-engineering.com</a>
            </div>

            <div className="Footer_service">
               <h2>{lang === "en" ? "Solutions" : "Решения"}</h2>
               <span className="Footer_space-line--short" />
               <div>
                <div 
                    onClick={() => navigate(`${lang}/solutions/production-of-basalt-continuous-fiber`)}
                    className="Footer_service-div">
                        <img src={Directicon} className="Direction_icon" /> 
                        <p>{lang === "en" ? "Basalt continuous fiber" : "Производство БНВ Производство базальтового волокна"}</p>
                </div>
                <div 
                    onClick={() => navigate(`${lang}/solutions/production-of-basalt-continuous-rockwool`)}
                    className="Footer_service-div"
                >
                        <img src={Directicon} className="Direction_icon"/> 
                        <p>{lang === "en" ? "Basalt rockwool" : "Производство базальтовой каменой ваты"}</p>
                </div>
                <div 
                    onClick={() => navigate(`${lang}/solutions/production-of-basalt-continuous-pipes`)}
                    className="Footer_service-div"
                >
                    <img src={Directicon} className="Direction_icon"/> 
                    <p>{lang === "en" ? "BRP continuous pipe" : "Производство базальта композитных труб"}</p>
                </div>
                <div 
                    onClick={() => navigate(`${lang}/solutions/production-of-basalt-continuous-chopped-strand`)}
                    className="Footer_service-div"
                >
                        <img src={Directicon} className="Direction_icon"/> 
                        <p>
                            {lang === "en" ? 
                            "Basalt continuous chopped strand" : 
                            "Производство базальтовой фибры"}
                        </p>
                </div>
                <div 
                    onClick={() => navigate(`${lang}/solutions/production-of-basalt-continuous-reinforcement-bars`)}
                    className="Footer_service-div"
                >
                    <img src={Directicon} className="Direction_icon"/> 
                    <p>{lang === "en" ? "Basalt reinforcement bars" : "Производство базальтовой арматуры"}</p>
                </div>
                <div 
                    onClick={() => navigate(`${lang}/solutions/production-of-basalt-continuous-geogrids`)}
                    className="Footer_service-div"
                >
                    <img src={Directicon} className="Direction_icon"/> 
                    <p>{lang === "en" ? "Basalt geogrids and facade mesh" : "Производство базольтовых фасадных и геосеток"}</p>
                </div>
               </div> 
            </div>

            <div className="Footer_latest-posts">
               <h2>{lang === "en" ? "Latest Posts" : "Последние записи"}</h2>
               
               <span className="Footer_space-line--short" />

               <div className="Footer_latest-imagesdiv" onClick={() => navigate(`${lang}/news`)}>
                <img src={news1} className="FooterLatest_images"/>
                <div>
                    <p className="FooterLatest_text">
                        {lang === "en" ? 
                        "Uzbekistan - Pakistan" : 
                        "Узбекистан - Пакистан"}
                    </p> 
                    <img src=""/><p className="FooterLatest_data">11 oct, 2025</p>
                </div>
               </div>
                
               <span />

               <div className="Footer_latest-imagesdiv" onClick={() => navigate(`${lang}/news`)}>
                <img src={news2} className="FooterLatest_images"/>  
                <div>
                    <p className="FooterLatest_text">
                        {lang === "en" ? 
                        "Main usage of baslt fiber and composite materials" :
                        "Основное применение базтового волокна и композитных материалов"}
                    </p>
                    <img src=""/><p className="FooterLatest_data">11 oct, 2025</p>
                </div>
               </div>

            </div>

            <div className="Footer_subscribe">
               <h2>{lang === "en" ? "Subscribe Now" : "Подписаться сейчас"}</h2>
               <span className="Footer_space-line--short"/>

               <p>
                {lang === "en" ? 
               "Sign up today for tips and latest news and exclusive special offers." : 
               "Подпишитесь сегодня, чтобы получать советы, последние новости и эксклюзивные специальные предложения."}
               </p>

               <h2 className="Footer_subscribe-follow">{lang === "en" ? "Follow Us:" : "Следите за нами:"}</h2>
               
                <div className="FollowUs_div">
                    <img src={Facebook} className="Social_media"/>
                    <img src={Twitter} className="Social_media"/> 
                    <img src={Skype} className="Social_media"/> 
                    <img src={Linkedin} className="Social_media"/>
                </div>
            </div>
        </div>
    </div>
  )
};
