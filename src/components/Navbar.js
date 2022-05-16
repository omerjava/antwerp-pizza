import React from "react";
import Logo from "../assets/logoPizza.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import {useState} from "react";

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="logo" width="60" length="60" />
        <div className="hiddenLinks">
          <Link to="/antwerp-pizza/"> Home </Link>
          <Link to="/antwerp-pizza/menu"> Menu </Link>
          <Link to="/antwerp-pizza/about"> About </Link>
          <Link to="/antwerp-pizza/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/antwerp-pizza/"> Home </Link>
        <Link to="/antwerp-pizza/menu"> Menu </Link>
        <Link to="/antwerp-pizza/about"> About </Link>
        <Link to="/antwerp-pizza/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
