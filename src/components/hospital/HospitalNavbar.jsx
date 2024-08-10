import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/NewImages/NewLogo.png';

const HospitalNavbar = () => (
  <nav className="bg-hospital-blue shadow-lg h-24"> {/* Keep the header height fixed */}
    <div className="container mx-auto px-4 h-full flex justify-between items-center">
      <img
        src={logo}
        alt="Logo"
        className="h-52 w-auto ml-16" 
        style={{
          backgroundColor: 'transparent'
        }}
      />
      <div className="flex space-x-4">
        <NavLink
          to="/hospital"
          className={({ isActive }) =>
            isActive
              ? "bg-hospital-blue-dark text-white px-3 py-2 rounded-md text-sm font-medium"
              : "text-white hover:bg-hospital-blue-light px-3 py-2 rounded-md text-sm font-medium"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/hospital/about"
          className={({ isActive }) =>
            isActive
              ? "bg-hospital-blue-dark text-white px-3 py-2 rounded-md text-sm font-medium"
              : "text-white hover:bg-hospital-blue-light px-3 py-2 rounded-md text-sm font-medium"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/hospital/services"
          className={({ isActive }) =>
            isActive
              ? "bg-hospital-blue-dark text-white px-3 py-2 rounded-md text-sm font-medium"
              : "text-white hover:bg-hospital-blue-light px-3 py-2 rounded-md text-sm font-medium"
          }
        >
          Our Services
        </NavLink>
        <NavLink
          to="/hospital/contact"
          className={({ isActive }) =>
            isActive
              ? "bg-hospital-blue-dark text-white px-3 py-2 rounded-md text-sm font-medium"
              : "text-white hover:bg-hospital-blue-light px-3 py-2 rounded-md text-sm font-medium"
          }
        >
          Contact Us
        </NavLink>
      </div>
    </div>
  </nav>
);

export default HospitalNavbar;
