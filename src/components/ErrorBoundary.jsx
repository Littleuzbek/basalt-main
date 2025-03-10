// import { useRouteError } from "react-router"
import { useNavigate } from "react-router"
import errorIMG from "../assets/error.webp"

export default function ErrorBoundary() {
  // const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <img src={errorIMG} alt="" />
      <button onClick={()=>{navigate("/")}}>GO BACK</button>
    </div>
  )
}
