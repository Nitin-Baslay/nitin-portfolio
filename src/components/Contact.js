import { NavLink } from "react-router-dom";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="cMaster">
      <div className="contact">
        <h1>Email Id:</h1>
        <p>nitinbansal481@gmail.com</p>
        <h1>Phone Number:</h1>
        <p>9873753872/ 9643539344</p>
        <h1>Location:</h1>
        <p>New Delhi, INDIA</p>
        <h1>Github Profile:</h1>
        <a href="https://github.com/Nitin-Baslay" target={"_blank"}>
          <p>github.com/Nitin-Baslay</p>
        </a>
        <h1>LinkedIn Profile:</h1>
        <a
          href="https://linkedin.com/in/nitin-kumar-7641b595"
          target={"_blank"}
        >
          <p>linkedin.com/in/nitin-kumar-7641b595</p>
        </a>
      </div>
    </div>
  );
};
export default Contact;
