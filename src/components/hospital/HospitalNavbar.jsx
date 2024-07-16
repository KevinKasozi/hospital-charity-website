import React from 'react';
import { NavLink } from 'react-router-dom';

const HospitalNavbar = () => (
  <nav className="bg-hospital-blue shadow-lg">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <NavLink to="/" className="text-white font-bold text-xl">
            Great Ormond Street Hospital
          </NavLink>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink
            to="/hospital"
            className={({ isActive }) =>
              isActive
                ? "bg-hospital-blue-dark text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white hover:bg-hospital-blue-light hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/hospital/about"
            className={({ isActive }) =>
              isActive
                ? "bg-hospital-blue-dark text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white hover:bg-hospital-blue-light hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/hospital/services"
            className={({ isActive }) =>
              isActive
                ? "bg-hospital-blue-dark text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white hover:bg-hospital-blue-light hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            Our Services
          </NavLink>
          <NavLink
            to="/hospital/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-hospital-blue-dark text-white px-3 py-2 rounded-md text-sm font-medium"
                : "text-white hover:bg-hospital-blue-light hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
);

export default HospitalNavbar;
