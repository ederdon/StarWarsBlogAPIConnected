import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import SWLogo from "../../img/Star-Wars-Logo.png";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light mb-2 justify-content-around">
      <Link to="/">
        <div className="navbar-brand">
          <img src={SWLogo} style={{ height: "4rem" }}></img>
        </div>
      </Link>

      <div className="ml-auto">
        <Link to="/user">
          <div className="d-inline mx-2">
            <button className="btn btn-dark" type="button">
              <i className="" /> {store.login.User}
            </button>
          </div>
        </Link>
        <Link to="/">
          <div className="dropdown d-inline">
            <button
              className="btn btn-dark dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fa fa-heart" /> {store.favourites.length}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {store.favourites.map((e, i) => {
                let vehicle = store.vehicles.find((el) => el.uid == e.favorite_vehicle);

                return (
                  <li key={i} className="text-center">
                    <Link to={"/vehicle/" + e}>{vehicle.properties.name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </Link>
      </div>
    </nav>
  );
};
