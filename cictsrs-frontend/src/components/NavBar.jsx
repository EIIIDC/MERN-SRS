import { useState } from "react";
import"../App.css";
import React from 'react';
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsersGear } from "react-icons/fa6";
import { FaWpforms } from "react-icons/fa6";
import { MdInventory2 } from "react-icons/md";
import { MdOutlineInventory } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import ictLOGO from "../assets/ictLOGO.svg";



const Navbarr = () => {
  const menuItems = [
    { name: "Dashboard", icon: <MdSpaceDashboard />, path: "/superadmin/dashboard" },
    { name: "Inventory", icon: <MdInventory2 />, path: "/superadmin/manage" },
    { name: "Users", icon: <FaUsersGear/>, path: "/superadmin/users" },
    { name: "Requests", icon: <FaWpforms />, path: "/superadmin/requests" },
    { name: "Reports", icon: <MdOutlineInventory />, path: "/superadmin/reports" },
    { name: "Profile", icon: <CgProfile />, path: "/superadmin/home/profile" },
    { name: "Logout", icon: <IoLogOut />, path: "/superadmin/home/logout" },
  ]
  

    return (
      <div className="sticky overscroll-none absolute h-screen w-10 md:w-46 bg-bgblue/30 text-gray-300 transition-all duration-500">
        

          <div className="relative dark:bg-gray-800  h-screen w-15 md:w-45  transition-all duration-500 pt-5">
            <img src={ictLOGO} className="dark:bg-gray-800 w-10 md:w-36 h-10 md:h-36 object-contain mx-auto mt-4 mb-6" />
            <ul>
              {menuItems.map((item) => (
                <li key={item.name} className={"flex items-center p-5 text-base font-normal  md:visible  text-gray-900 rounded-lg dark:text-white  "}>
                 <a href={item.path} className="text-xl">{item.icon}</a>
                  <a href={item.path} className="flex-1 ml-3 invisible md:visible whitespace-nowrap opacity-0 transition-all duration-500 md:visible md:opacity-100">{item.name}</a>
                </li>
              ))}
            </ul>

          </div>






       </div>

    );
  




};
export default Navbarr;
