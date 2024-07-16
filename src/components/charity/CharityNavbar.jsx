import React from 'react';
import { NavLink } from 'react-router-dom';

const CharityNavbar = () => (
  <nav className="bg-charity-red p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Great Ormond Street Charity</div>
      <div className="space-x-4">
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
