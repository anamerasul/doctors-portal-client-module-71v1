import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/home">HOME</Link>
      </li>
      <li tabIndex="0">
        <Link to="/about">ABOUT</Link>
      </li>
      <li>
        <Link to="/appoinment">APPOINTMENT</Link>
      </li>
      <li>
        <Link to="/review">REVIEW</Link>
      </li>
      <li>
        <Link to="/login">LOGIN</Link>
      </li>
    </>
  );
  return (
    <div className="">
      <nav className="container-sm">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost normal-case text-xl">
              DOCTORS PORTAL
            </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{menuItems}</ul>
          </div>
          <div className="navbar-center"></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
