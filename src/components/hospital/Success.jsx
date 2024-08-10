import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header';
import Footer from '../common/Footer';
import HospitalNavbar from './HospitalNavbar';

const Success = () => {
  return (
    <>
      <Header />
      <HospitalNavbar />
      <div className="container mx-auto py-16 text-center">
        <h2 className="text-4xl font-semibold mb-4">Thank You!</h2>
        <p className="text-lg mb-8">Your message has been sent successfully. We'll get back to you soon.</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
          Go Back to Home
        </Link>
      </div>
      <Footer theme="hospital" />
    </>
  );
};

export default Success;
