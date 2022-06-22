import "../css/App.css";
import "../css/Styles.css";
import * as React from "react";

import { Row, Col } from "react-flexbox-grid";

import { useState } from "react";

export default function KontaktSection({marion, loading}) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonStyle, setButtonStyle] = useState("kontakt-button");


  function sendEmail() {
    if (!email || !message) {
      alert("Missing information.");
      return;
    }

    setButtonStyle("button-loading");

    fetch("http://localhost:1337/api/email", {
      method: "POST",
      body: JSON.stringify({
        to: email,
        text: message,
        subject: "New email from Humi Digital"
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(alert("E-mail został wysłany do " + email))
      .then(() => {
        setButtonStyle("kontakt-button");
      })
      .catch((error) => {
        console.log(error);
        setButtonStyle("kontakt-button");
      });
  }
  return (
    <>
      {!loading && marion.section_4 && (
        <>
          <div className="kontakt-section">
            <Row center="xs">
              <Col xs={10}>
                <h2 className="kontakt-header">{marion.section_4[0].header}</h2>
                <p className="kontakt-description">
                  {marion.section_4[0].Description}
                </p>
                <Row>
                  <Col xs={12}>
                    <input
                      type="text"
                      placeholder="Adres e-mail"
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </Col>
                  <Col xs={12}>
                    <input
                      type="text"
                      placeholder="Wiadomość"
                      onChange={(e) => setMessage(e.target.value)}
                    ></input>
                  </Col>
                  <Col xs={12}>
                    <button
                      type="button"
                      className={buttonStyle}
                      onClick={sendEmail}
                    >
                      Wysłać
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row center="xs">
              <Col className="kontakt-triangle-container">
                <svg data-ux="SVG" className="hero-triangle svg-triangle-down">
                  <g
                    fill="rgb(246, 246, 246)"
                    fillRule="evenodd"
                    width="53"
                    height="24"
                  >
                    <path d="M26.5 24L53 0H0z"></path>
                  </g>
                </svg>
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
}
