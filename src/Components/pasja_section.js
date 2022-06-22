import "../css/App.css";
import "../css/Styles.css";
import * as React from "react";

import { Row, Col } from "react-flexbox-grid";

import pasja_image from "../Images/pasja-image.webp";

export default function PasjaSection({marion, loading}) {
  return (
    <>
      {!loading && marion.section_2 && (
        <>
          <div className="pasja-section">
            <h2 className="header-text">{marion.section_2[0].header}</h2>
            <Row center="xs">
              <Col xs={8} lg={6} className="vertical-center">
                <img alt="" className="section-img" src={pasja_image}></img>
              </Col>
              <Col xs={8} lg={5} className="vertical-center">
                <Row center="xs">
                  <Col>
                    <div className="description-container">
                      <p className="description-text">
                        {marion.section_2[0].Description}
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
