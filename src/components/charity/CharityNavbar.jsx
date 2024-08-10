import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/NewImages/NewLogo.png'; // Adjust this path to where your logo is located


const CharityNavbar = () => (
  <nav className="bg-charity-red shadow-lg h-24">
    <div className="container mx-auto px-4 h-full flex justify-between items-center">
      <img src={logo}
        alt="Logo"
        className="h-52 w-auto ml-16"
        style={{
          backgroundColor: 'transparent'
        }} />
      <div className="flex space-x-4">
        <NavLink
          to="/charity"
          className={({ isActive }) =>
            `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-charity-red-dark' : 'hover:bg-charity-red-light'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/charity/events"
          className={({ isActive }) =>
            `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-charity-red-dark' : 'hover:bg-charity-red-light'}`
          }
        >
          Events
        </NavLink>
        <NavLink
          to="/charity/get-involved"
          className={({ isActive }) =>
            `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-charity-red-dark' : 'hover:bg-charity-red-light'}`
          }
        >
          Get Involved
        </NavLink>
        <NavLink
          to="/charity/donate"
          className={({ isActive }) =>
            `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-charity-red-dark' : 'hover:bg-charity-red-light'}`
          }
        >
          Donate
        </NavLink>
      </div>
    </div>
  </nav>
);

export default CharityNavbar;
