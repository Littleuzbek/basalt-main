import ContactUsComp  from "../components/ContactUsComp";
import "../components/ContactUs.css"
import { Helmet } from "react-helmet";

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact Basalt-Engineering</title>
        <meta  name="description" content=""/>
      </Helmet>
      <div className="contactUs-page">
        <ContactUsComp />
      </div>
    </>
  )
}
