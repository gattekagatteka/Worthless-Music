import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav className="#000000 black" style={{ height: "100px" }}>
      <div className="nav-wrapper">
        <Link to="/home" className="brand-logo center">
          <img
            src="/wm-logo.png"
            alt="worthless music"
            style={{ width: "80px", height: "80px", marginTop: "10px" }}
          />
        </Link>
        <ul className="left hide-on-med-and-down">
          <li>
            <Link
              to="/about"
              style={{
                height: "100px",
                width: "150px",
                textAlign: "center",
                fontSize: "25px",
                paddingTop: "15px",
              }}
            >
              О нас
            </Link>
          </li>
          <li>
            <Link
              to="/offers"
              style={{
                height: "100px",
                width: "150px",
                textAlign: "center",
                fontSize: "25px",
                paddingTop: "15px",
              }}
            >
              Услуги
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
