import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="min-h-screen flex flex-col justify-center items-center">
    <h2 className="text-4xl mb-4">404 - Page Not Found</h2>
    <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="bg-blue-500 text-white p-2 rounded">Go to Home</Link>
  </div>
);

export default NotFound;
