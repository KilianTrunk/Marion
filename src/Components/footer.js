import "../css/App.css";
import "../css/Styles.css";
import * as React from "react";

export default function Footer({marion, loading}) {
  return (
    <>
      {!loading && marion.footer && (
        <>
          <div className="footer">
            <a href="/" className="redirect">
              {marion.footer.personal_data}
            </a>
            <h2 className="footer-company-name">{marion.footer.company_name}</h2>
            <h2 className="footer-company-address">
              {marion.footer.company_address}
            </h2>
            <a href="tel:+48787886185" className="redirect">
              {marion.footer.company_number}
            </a>
            <h2 className="footer-copyright">{marion.footer.copyright}</h2>
          </div>
        </>
      )}
    </>
  );
}
