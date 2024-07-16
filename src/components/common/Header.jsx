import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const isCharity = location.pathname.startsWith('/charity');
  const isHospital = location.pathname.startsWith('/hospital') || location.pathname === '/';

  return (
    <div className={`p-4 ${isCharity ? 'bg-charity-red' : 'bg-hospital-blue'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Great Ormond Street {isCharity ? 'Charity' : 'Hospital'}</div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-800' : 'hover:bg-gray-600'}`
            }
          >
            Hospital Home
          </NavLink>
          <NavLink
            to="/charity"
            className={({ isActive }) =>
              `text-white px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-800' : 'hover:bg-gray-600'}`
            }
          >
            Charity Home
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
