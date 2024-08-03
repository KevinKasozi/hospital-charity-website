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
      {/* Hero Section with Carousel */}
      <div className="relative">
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-5xl font-bold">Welcome to Great Ormond Street Hospital</h1>
            <p className="mt-4 text-lg">We provide world-class care and pioneering treatments.</p>
            <a href="/about" className="mt-6 inline-block bg-white text-hospital-blue-dark font-bold py-3 px-6 rounded-full shadow-lg">Learn More</a>
          </div>
        </div>
        <HeroCarousel className="relative z-0 opacity-75" />
      </div>

      {/* Achievements Section */}
      <section className="bg-hospital-blue-light py-20">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-10">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-hospital-blue rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold">1000+</h3>
              <p>Successful Surgeries</p>
            </div>
            <div className="p-6 bg-hospital-blue rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold">500+</h3>
              <p>Dedicated Staff</p>
            </div>
            <div className="p-6 bg-hospital-blue rounded-lg shadow-lg">
              <h3 className="text-3xl font-semibold">200+</h3>
              <p>Research Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-10">What Our Patients Say</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-green-500 opacity-50"></div>
              <div className="relative p-8 bg-white rounded-lg shadow-lg">
                <p className="text-lg italic">"The care I received at GOSH was exceptional. The staff went above and beyond to ensure my well-being."</p>
                <h3 className="mt-4 text-xl font-bold">- Emily R.</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer theme="hospital" />
  </div>
);

export default HospitalHome;
