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



const Navbarr = () => {
  const menuItems = [
    { name: "Dashboard", icon: <MdSpaceDashboard />, path: "/superadmin/dashboard" },
    { name: "Inventory", icon: <MdInventory2 />, path: "/superadmin/inventory" },
    { name: "Users", icon: <FaUsersGear/>, path: "/superadmin/users" },
    { name: "Requests", icon: <FaWpforms />, path: "/superadmin/requests" },
    { name: "Reports", icon: <MdOutlineInventory />, path: "/superadmin/reports" },
    { name: "Profile", icon: <CgProfile />, path: "/superadmin/home/profile" },
    { name: "Logout", icon: <IoLogOut />, path: "/superadmin/home/logout" },
  ]
  

    return (
      <div>
          <div>
            <span>City ICT Service Request System</span>
            <span>CICT-SRS</span>
          </div>

          <div>
            <ul>
              {menuItems.map((item) => (
                <li key={item.name} className={"flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"}>
                  <span className="text-xl">{item.icon}</span>
                  <a href={item.path} className="flex-1 ml-3 whitespace-nowrap">{item.name}</a>
                </li>
              ))}
            </ul>

          </div>






       </div>

    );
  




};
export default Navbarr;
