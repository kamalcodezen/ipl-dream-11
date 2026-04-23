
import React from "react";
import currencyImg from "../../assets/Currency.png";
import logo from "../../assets/logo.png"
import { Menu } from "lucide-react";
import "./Navbar.css"

const Navbar = () => {
  return (
 
    <nav className="nav-container container">
      <div className="flex items-center">
        <span>
            
        <Menu></Menu>
        </span>
        <img className="w-11" src={logo} alt="logo" />
      </div>
      <div>
        <button className="nav-btn font-medium ">
          0 coin
          <span>
            <img className="w-[16px]" src={currencyImg} alt="currency image" />
          </span>
        </button>
      </div>
 
   </nav>
  );
};

export default Navbar;
