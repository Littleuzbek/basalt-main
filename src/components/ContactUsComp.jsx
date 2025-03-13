import "../components/ContactUs.css";
// import { FaFacebookF } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
// import { FaSkype } from "react-icons/fa6";
import { useRef, useState } from "react";
import { GrStatusGood } from "react-icons/gr";
import { IoIosAlert, IoIosAdd  } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
// import { RiCustomerServiceFill } from "react-icons/ri"; customer icon
import { FiPhoneCall } from "react-icons/fi";
import { RiMailSendLine } from "react-icons/ri";
import { TbRubberStamp } from "react-icons/tb";
import { useParams } from "react-router";

export default function ContactUsComp() {
    const {lang} = useParams();
    const name = useRef(null);
    const tel = useRef(null);
    const email = useRef(null);
    const message = useRef(null);
    const [anim, setAnim] = useState(false);

    const botErrorHandler = async (newMessage) => {
      const token = "7688238936:AAFkACKgNMVCuD3imKigNWbFCjQu2XpNlGE";

      const res = await fetch(`https://api.telegram.org/bot${token}/getUpdates`);
      const data = await res.json();
      const newId = data?.result?.at(-1).message.chat.id;

      let newUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${newId}&text=${encodeURIComponent(newMessage)}`;
      let newApi = new XMLHttpRequest();
      newApi.open("GET", newUrl, true);
      api.send();
    }

    const submitHandler = async (e) => {
      e.preventDefault();

      const day = new Date().getDate();
      const month = new Date().getMonth() + 1;
      const year = new Date().getFullYear();
      const hours = new Date().getHours();
      const minutes = new Date().getMinutes();

      const sortedName = name?.current?.value?.trim() === "" ? "-" : name?.current?.value;
      const sortedTel = tel?.current?.value?.trim() === "" ? "-" : tel?.current?.value;
      const sortedMail = email?.current?.value?.trim() === "" ? "-" : email?.current?.value;
      const sortedMessage = message?.current?.value?.trim() === "" ? "-" : message?.current?.value;

      const newMessage = `
Name: ${sortedName}
Email: ${sortedMail}
Phone: ${sortedTel}
Message: ${sortedMessage}
Time: ${day}.${month}.${year}, ${hours}:${minutes}
    `;

      const token = "7706771469:AAHA_Y0Gct4ke2MXAFuVOF_uvBByGoa6cNQ";
      const chat_id = "-1002449836646";

      let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(newMessage)}`;

      let api = new XMLHttpRequest();

      api.open("GET", url, true);

      api.onreadystatechange = function () {
        if (api.readyState === 4) { // Request completed
          if (api.status === 200) {
            setAnim("Message sent successfully")
          } else {
            setAnim("error");
            botErrorHandler(newMessage);
            }
        }
      };

      api.send();

      name.current.value = '';
      tel.current.value = '';
      email.current.value = '';
      message.current.value = '';
    }

  return (
    <>
      <div className="notification" style={anim ? {backgroundColor:  `${anim === "error" ? "#e41749" : ""}`} : {display: "none"}}>
      <div className="alert">
        {anim !== "error" ? <GrStatusGood className="_icon"/> : <IoIosAlert className="_icon"/>}
        <h3>{anim !== "error" ? anim : "Something went wrong!"}</h3>
        <IoIosAdd className="_icon" onClick={()=> setAnim(false)}/>
      </div>
    </div>

      <div className="contact-component">
        <div>
        <div className="contact-info">
          <div className="contact-item-container">
            <div className="contact-item">
              <TbRubberStamp className="_icon" />
              <span>
                <h1>{lang === "en" ? "Certificates" : "Сертификаты"}</h1>
                <p>ISO 9001:2015 (ISO 9001)</p>
                <p>ISO 14001:2019 (ISO 14001)</p>
                <p>ISO 45001:2020 (ISO 45001)</p>
              </span>
            </div>
          </div>
          <div className="contact-item-container">
            <div className="contact-item">
              <RiMailSendLine className="_icon" />
              <span>
                <h1>{lang === "en" ? "Email" : "Электронной почте"}</h1>
                <p style={{fontSize: "13px"}}>info@basalt-engineering.com</p>
                <p style={{fontSize: "13px"}}>sales@basalt-engineering.com</p>
                {/* <p style={{fontSize: "13px"}}>techno@basalt-engineering.com</p> */}
                {/* <p style={{fontSize: "13px"}}>ukuchkunov@basalt-engineering.com</p> */}
                {/* <p style={{fontSize: "13px"}}>nsodikov@basalt-engineering.com</p> */}
              </span>
            </div>
          </div>
          <div className="contact-item-container">
            <div className="contact-item">
              <GrMapLocation className="_icon" />
              <span>
                <h1>{lang === "en" ? "Address" : "Адрес"}</h1>
                <p>Bunyodkor Avenue, 27</p>
                <p>Chilanzar district</p>
                <p>Tashkent, 100185</p>
              </span>
              
            </div>
          </div>
          <div className="contact-item-container">
            <div className="contact-item">
              <FiPhoneCall className="_icon" />
              <span>
                <h1>{lang === "en" ? "Telephone" : "Телефон"}</h1>
                <p>+998 (93) 183-01-10</p>
              </span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={(e) => submitHandler(e)}>
          <p>{lang === "en" ? "Let's talk about your project" : "Давайте поговорим о вашем проекте"}</p>
          <h1>{lang === "en" ? "Information request" : "Заполните для запроса"}</h1>
          <input type="text" placeholder={lang === "en" ? "Name*" : "Имя*"} ref={name} required />
          <input type="email" placeholder={lang === "en" ? "Email*" : "Электронной почте*"} ref={email} required />
          <input type="tel" placeholder={lang === "en" ? "Phone*" : "Телефон*"} ref={tel} required/>
          <textarea
            name=""
            placeholder={lang === "en" ? "Message*" : "Сообщение*"}
            cols="auto"
            rows="auto"
            ref={message}
            required
            ></textarea>
          <input type="submit"  value={lang === "en" ? "Send request" : "Отправить запрос"} />
        </form>
      </div>
      </div>

      <div className="home-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5998.577854676487!2d69.19575211908331!3d41.259044615116466!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2a4f0cdcfd%3A0x5b5faee9f8460425!2sBASALT%20UZBEKISTAN!5e0!3m2!1suz!2sus!4v1741895078009!5m2!1suz!2sus"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
