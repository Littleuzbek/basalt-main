import "../components/homeComponents/Home.css";
import "../components/ContactUs.css";
import lava2 from "../assets/lava2.mp4"
import TopSection from "../components/TopSection"
import { Helmet } from "react-helmet";
import HomeHeader from "../components/homeComponents/HomeHeader";
import Testimonial from "../components/homeComponents/Testimonial";
import Welcome from "../components/homeComponents/Welcome";
import Team from "../components/homeComponents/Team";
import HomeNews from "../components/homeComponents/HomeNews";
import ProjectSlider from "../components/sliders/ProjectSlider";
import ContactUs from "../components/ContactUsComp";
import HomePartners from "../components/homeComponents/HomePartners";
import { useParams } from "react-router";

export default function Home() {
  const {lang} = useParams();
  return (
    <>
      <Helmet>
        <title>Basalt-Engineering high quality basalt products provider in Uzbekistan </title>
        <meta name="description" content=""/>
      </Helmet>

      <TopSection />

      <HomeHeader />

      <Welcome />

      <div className="home-project-container">
        <video
          src={lava2}
          autoPlay
          loop
          muted
          preload="auto"
          playsInline
        ></video>
        <div>
          <h2>{lang === "en" ? "Our Projects" : "Наши Проекты"}</h2>
          <span></span>
              <ProjectSlider />
        </div>
      </div>

      <Testimonial />

      <Team />

      <HomePartners />

      <HomeNews />

      <ContactUs />

    </>
  );
}
