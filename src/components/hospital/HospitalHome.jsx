import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import HospitalNavbar from './HospitalNavbar';
import HeroCarousel from '../hospital/HeroCarousel';

const HospitalHome = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header />
    <HospitalNavbar />
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Welcome to Great Ormond Street Hospital</h1>
          <p className="mt-4">We provide world-class care and pioneering treatments.</p>
        </div>
      </div>

      {/* History Section */}
      <section className="flex-grow bg-gray-100">
        <div className="container mx-auto">
          <HeroCarousel />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Advanced Medical Facilities</h3>
              <p>State-of-the-art medical equipment and facilities for our patients.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Expert Staff</h3>
              <p>Highly trained medical professionals dedicated to patient care.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Comprehensive Care</h3>
              <p>A holistic approach to healthcare, addressing all patient needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">1000+</h3>
              <p>Successful Surgeries</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">500+</h3>
              <p>Dedicated Staff</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold">200+</h3>
              <p>Research Projects</p>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer theme="hospital" />
  </div>
);

export default HospitalHome;
