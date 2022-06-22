import "../css/App.css";
import "../css/Styles.css";
import * as React from "react";

import { Row, Col } from "react-flexbox-grid";

import logo from "../Images/logo.webp";

export default function Navbar({marion, loading}) {
  return (
    <>
      {!loading && marion.section_1 && (
        <>
          <div className="navbar">
            <Row center="xs">
              <Col>
                <img alt="" src={logo}></img>
              </Col>
            </Row>
          </div>
        </>
      )}
    </>
  );
}
