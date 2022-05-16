import React from "react";
import "../styles/Contact.css";
import ContactImage from "../assets/pizza7.jpg";
import { useState } from "react";

function Contact() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [responseInfo, setResponseInfo] = useState("");


  const contactUsHandler = (fullname, email, message) => {
    fetch("http://localhost:3001/contact/insert", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        message: message,
      }),
    })
      .then((res) => {
        if(res.ok){
          return res.json();
        }
        else setResponseInfo("We couldn't save your message! Probably, our server is not active!");
      })
      .then((data) => {
        console.log("data: ", data.fullname, data.email, data.message);
        setResponseInfo(`Thank you Dear ${data.fullname}! \nWe received your message "${data.message}"!`);
      }).catch(()=> setResponseInfo(`Dear ${fullname}! We couldn't save your message! Currently, our server is not active!`));

      setEmail('');
      setFullname('');
      setMessage('');
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>CONTACT US</h1>
        <form id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input
            id="fullnameInput"
            value={fullname}
            type="text"
            name="name"
            placeholder="Enter your name.."
            onChange={(e) => setFullname(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            id="emailInput"
            value={email}
            type="email"
            name="email"
            placeholder="Enter your email.."
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="messageInput"
            value={message}
            rows="6"
            name="message"
            placeholder="Enter your message.."
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </form>
        <button onClick={()=>contactUsHandler(fullname, email, message)}>Send Message</button>
        <h5 className="responseInfo">{responseInfo}</h5>
      </div>
    </div>
  );
}

export default Contact;
