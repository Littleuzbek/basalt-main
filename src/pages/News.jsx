import { Helmet } from "react-helmet";
import HomeNews from "../components/homeComponents/HomeNews";

export default function News() {
  return (
    <>
      <Helmet>
        <title>Basalt-Engineering news</title>
        <meta name="description" content=""/>
      </Helmet>
      <HomeNews />
    </>
  )
}
