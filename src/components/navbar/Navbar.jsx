import React, { use, useEffect, useState } from "react";
import currencyImg from "../../assets/Currency.png";
import logo from "../../assets/logo.png";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import Link from "./Link";

const Navbar = () => {
  const [links, setLinks] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetch("/navbarLinkData.json")
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);

  const link = links.map((link,index) => <Link key={index} link={link}></Link>);

  return (
    <nav className=" container">
      <div className="nav-container">
        <img className="w-14" src={logo} alt="logo" />

        {/* navbar list */}
        <div className="flex items-center gap-8 hidden md:flex">
          <ul className="flex gap-4 ">{link}</ul>
          <button className="nav-btn  font-medium ">
            0 coin
            <span>
              <img className="w-4" src={currencyImg} alt="currency image" />
            </span>
          </button>
        </div>

        {/* dropdown menu */}
        <div className="flex items-center gap-3 md:hidden  relative ">
          <span onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu></Menu>}
          </span>
          <ul
            className={`nav-dropdown-menu absolute top-11 transition-all duration-1000
            ${open ? "right-0" : "-right-100"}`}
          >
            {link}
            <button className="nav-btn w-full font-medium ">
              <span>0</span> coin
              <span>
                <img className="w-5" src={currencyImg} alt="currency image" />
              </span>
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
