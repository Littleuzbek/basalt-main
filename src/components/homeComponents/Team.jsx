import "./Home.css"
import historic from "../../assets/historic.mp4"
import historicRus from "../../assets/historicRus.mp4"
import hictoricImg from "../../assets/historicImg.png"
import { useParams } from "react-router";

export default function Team() {
  const {lang} = useParams();
  const vid = lang === "en" ? historic : historicRus
  return (
    <div className="team" >
      <h2>{lang === "en" ? "The Company With History" : "Компания с Историей"}</h2>
      <span></span>
      <div>
        <video src={vid} controls preload="auto" poster={hictoricImg}></video>
      </div>
    </div>
  );
}
