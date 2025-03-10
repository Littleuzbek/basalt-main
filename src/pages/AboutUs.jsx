import "../components/AboutUs.css";
import aboutIMG from "../assets/about-img.jpg";
import clusterIMG from "../assets/cluster.jpg"
import { useParams } from "react-router";
import Team from "../components/homeComponents/Team";

export default function AboutUs() {
  const {lang} = useParams();
  return (
    <div className="about-page">
      <div className="about" data-aos="fade-right" data-aos-duration="2000">
        <span>
          <div>
            <h1>{lang === "en" ? "About Us" : "О нас"}</h1>
          </div>
        </span>
        <h3>{lang === "en" ? "Kindness melts stone" : "Доброта плавит камень"}</h3>
        <p>
          {lang === "en" ? 
          `The Group of companies BASALT UZBEKISTAN was founded in 2015 in the Jizzakh region, Forish district, Republic of Uzbekistan. Location - basalt quarry "Osmonsoy". 
          BASALT UZBEKISTAN presents a wide range of basalt materials for construction in Uzbekistan and other countries. It is one of the largest manufacturers of composite materials in CIS region. BASALT UZBEKISTAN carries out a full production cycle, starting with the extraction of basalt rocks in Forish district of Jizzakh region and ending with the supply of various finished products worldwide. Our enterprises use innovative cutting-edge technology developed within the company as well as brought from EU.` :
          `Группа компаний «БАЗАЛЬТ УЗБЕКИСТАН» основана в 2015 году в Джизакской области, Форишский район, Республика Узбекистан. Место расположения - базальтовый карьер "Осмонсой". BASALT UZBEKISTAN представляет широкий ассортимент базальтовых материалов для строительства в Узбекистане и других странах. Является одним из крупнейших производителей композитных материалов в регионе СНГ. BASALT UZBEKISTAN осуществляет полный цикл производства, начиная с добычи базальтовых пород в Форишском районе Джизакской области и заканчивая поставками различной готовой продукции по всему миру. На наших предприятиях используются инновационные передовые технологии, разработанные внутри компании, а также привезенные из ЕС.`}
        </p>

      
        
        <h3>
        {
          lang === "en" ? 
          "We offer various solutions in Basalt field" : 
          "Мы предлагаем различные решения на базальтовом месторождении"
        }
        </h3>
        <p>
         {lang === "en" ? 
         `Due to the fact that the Group of companies BASALT UZBEKISTAN has been working independently for many years, the group overcame many challenges and gained down to earth knowledge in production of basalt continuous fiber and in composite materials field. For this intend, a company BASALT ENGINEERING CORP was formed within the group of companies BASALT UZBEKISTAN. Specialists of our company are experts in what they do and provide technical solutions in any severe situations that might occur in such projects. We strive to deliver the best of what we achieved to our clients who are interested in starting basalt production. We provide know-how so that our clients save their time and financial resources by not falling into the same trap and repeating our mistakes. We are young but ambitious and self-built company. We are proud of our experts, the field of activity and products we offer. We truly believe that innovational techniques used by our company will bring enormous changes in the fields of construction, automation, marine, airspace and other fields worldwide. ` : 
         `Благодаря тому, что Группа компаний «БАЗАЛЬТ УЗБЕКИСТАН» на протяжении многих лет работает самостоятельно, группа преодолела множество вызовов и получила практические знания в области производства базальтового непрерывного волокна и в области композитных материалов. С этой целью в составе группы компаний «БАЗАЛЬТ УЗБЕКИСТАН» была образована компания «BASALT ENGINEERING CORP». Специалисты нашей компании являются экспертами в своем деле и предоставляют технические решения в любых сложных ситуациях, которые могут возникнуть в подобных проектах. Мы стремимся донести лучшее из достигнутого до наших клиентов, заинтересованных в запуске производства базальта. Мы предоставляем ноу-хау для того, чтобы наши клиенты экономили свое время и финансовые ресурсы, не попадая в одну и ту же ловушку и не повторяя наших ошибок. Мы молодая, но амбициозная и самостоятельно построенная компания. Мы искренне верим, что инновационные технологии, используемые нашей компанией, приведут к огромным изменениям в области строительства, автоматизации, судостроения, воздушного пространства и других областях по всему миру.`} 
          </p>

        <p>
          {lang === "en" ? 
          `Besides supply of turn-key Basalt continuous fiber manufacturing facility, BASALT ENGINEERING CORP also provides a range of Post Commissioning Services including Training, Breakdown Support and Maintenance.` :
          `Помимо поставки «под ключ» завода по производству базальтового непрерывного волокна, BASALT ENGINEERING CORP также предоставляет ряд услуг после ввода в эксплуатацию, включая обучение, поддержку при поломках и техническое обслуживание.`}
        </p>
      </div>

      <div className="about-img" data-aos="fade-left" data-aos-duration="2000">
        <img src={aboutIMG} alt="" />
      </div>

       <div className="area">
          <img src={clusterIMG} loading="lazy" alt="" />
       </div>

       <Team />
    </div>
  );
}
