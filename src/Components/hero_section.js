import "../css/App.css";
import "../css/Styles.css";
import * as React from "react";

import { Row, Col } from "react-flexbox-grid";

import hero_icon from "../Images/hero-icon.webp";

export default function HeroSection({marion, loading}) {
  return (
    <>
      {!loading && marion.section_1 && (
        <>
          <div className="hero-section">
            <Row center="xs">
              <Col>
                <svg data-ux="SVG" className="hero-triangle">
                  <g fill="white" fillRule="evenodd" width="53" height="24">
                    <path d="M26.5 24L53 0H0z"></path>
                  </g>
                </svg>
              </Col>
            </Row>
            <div className="hero-section-container">
              <Row>
                <Col xs={12} lg={4} center="xs" className="vertical-center">
                  <Row center="xs">
                    <Col xs={10} md={12} lg={12}>
                      <h2 className="hero-text">
                        {marion.section_1[0].header}
                      </h2>
                    </Col>
                  </Row>
                </Col>
                <Col xs={10} lg={4} className="vertical-center">
                  <Row center="xs">
                    <Col xs={10} md={9}>
                      <img alt="" className="hero-icon" src={hero_icon}></img>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </>
      )}
    </>
  );
}
