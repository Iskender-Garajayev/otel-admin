import React, { useContext } from "react";
import "./sidebar.css";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import Brightness3OutlinedIcon from "@mui/icons-material/Brightness3Outlined";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import FaceOutlinedIcon from '@mui/icons-material/FaceOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { DarkModeContext } from "../context/darkModeContext";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Hotel</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <Link className="side-nav" to="/" state={{ textDecoration: "none" }}>
            <HomeOutlinedIcon className="side-nav-icon"/>
              <span> HOME</span>
            </Link>
          </li>
          <li>
            <Link className="side-nav" to="/rooms" state={{ textDecoration: "none" }}>
              <BedOutlinedIcon className="side-nav-icon" />
              <span> Rooms</span>
            </Link>
          </li>
          <li>
            <Link className="side-nav" to="/rezerv" state={{ textDecoration: "none" }}>
            <MenuBookOutlinedIcon className="side-nav-icon"/>
              <span> Rezervation</span>
            </Link>
          </li>
          <li>
            <Link className="side-nav" to="/gests" state={{ textDecoration: "none" }}>
            <FaceOutlinedIcon className="side-nav-icon"/>
              <span> Gests</span>
            </Link>
          </li>
          <li>
          <Link className="side-nav" to="/accounting" state={{ textDecoration: "none" }}>
          <CalculateOutlinedIcon className="side-nav-icon" />
              <span> Accounting</span>
            </Link>
          </li>
          <li>
          <Link className="side-nav" to="/personals" state={{ textDecoration: "none" }}>
            <BadgeOutlinedIcon className="side-nav-icon" />
              <span> Personals</span>
            </Link>
            </li>
            <li>
          <Link className="side-nav" to="/note" state={{ textDecoration: "none" }}>
            <NoteAltOutlinedIcon className="side-nav-icon" />
              <span> Note</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div>
          <LightModeOutlinedIcon className="light" onClick={()=>dispatch({type: "LIGHT"})} />
        </div>
        <div>
          <Brightness3OutlinedIcon className="dark" onClick={()=>dispatch({type: "DARK"})} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
