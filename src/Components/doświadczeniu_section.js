import "../css/App.css";
import "../css/Styles.css";
import * as React from "react";

import { Row, Col } from "react-flexbox-grid";

import doświadczeniu_image from "../Images/doświadczeniu-image.webp";

export default function DoświadczeniuSection({marion, loading}) {
  return (
    <>
      {!loading && marion.section_3 && (
        <>
          <div className="doświadczeniu-section">
            <h2 className="header-text">{marion.section_3[0].header}</h2>
            <Row center="xs">
              <Col xs={8} lg={6} className="vertical-center">
                <img
                  alt=""
                  className="section-img"
                  src={doświadczeniu_image}
                ></img>
              </Col>
              <Col xs={8} lg={5} className="vertical-center">
                <Row center="xs">
                  <Col>
                    <div className="description-container">
                      <p className="description-text">
                        {marion.section_3[0].Description}
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
}
