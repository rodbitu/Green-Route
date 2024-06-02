import React from "react";
import { Link } from "react-router-dom";
import Map from "../../components/Map/Map";

import logo_site from "../../img/logo_site.png";

const MapPage = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src={logo_site} width="70px" alt="logo do site" />
          Green Route
        </div>
        <div>
          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label htmlFor="checkbox_toggle" className="hamburger">
              &#9776;
            </label>
            <div className="menu">
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/map">Maps</Link>
              </li>
            </div>
          </ul>
        </div>
      </nav>
      <Map />
      <footer className="py-2.5 text-center border-t border-solid">
        <p className="my-1 mx-0">
          Autores: Diogo Dias Mello, Luciano Silva Alves Junior, Rodrigo Bitu de
          Moraes e Yan Matheus Pinheiro Cezario
        </p>
      </footer>
    </div>
  );
};

export default MapPage;
