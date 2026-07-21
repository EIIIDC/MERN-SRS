import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useCctv } from "../db/cctv/cctv";
import axios from "axios";
import "../App.css";
import { Outlet } from "react-router";
import CctvCard from "../components/CctvCard";
import Navbarr from "../components/NavBar";

const Manage = () => {
  return (

    <CctvCard />
  );
};

export default Manage;

