import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CharityNavbar from './CharityNavbar';
import CharityHomeHeroImage from "../../assets/NewImages/CharityHero.jpeg"
import { FaHandHoldingHeart, FaHandsHelping, FaBullhorn, FaDonate, FaHeart, FaRegSmileBeam, FaDollarSign } from 'react-icons/fa';
import '../stylesheets/CharityHome.css';
import Campaign_1 from "../../assets/NewImages/campaign_1.jpeg";
import Campaign_2 from "../../assets/NewImages/campagin_2.jpeg";
import Campaign_3 from "../../assets/NewImages/campaign_3.jpeg";

const SectionIntro = () => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-semibold text-gray-800 mb-4">How You Can Help</h2>
    <p className="text-lg text-gray-600">Explore the many ways you can support our mission and make a difference.</p>
  </div>
);

const HelpCards = () => (
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0">
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <FaHandHoldingHeart className="text-pink-500 text-6xl mb-4" />
      <h3 className="text-2xl font-bold mb-2">Donate</h3>
      <p className="text-center text-gray-600">Your donations provide essential services and support to those in need.</p>
      <a href="/charity/donate" className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600">Donate Now</a>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <FaHandsHelping className="text-pink-500 text-6xl mb-4" />
      <h3 className="text-2xl font-bold mb-2">Volunteer</h3>
      <p className="text-center text-gray-600">Join our team and help us create a greater impact.</p>
      <a href="/get-involved" className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600">Get Involved</a>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <FaBullhorn className="text-pink-500 text-6xl mb-4" />
      <h3 className="text-2xl font-bold mb-2">Spread the Word</h3>
      <p className="text-center text-gray-600">Share our mission with your network to help us reach more people.</p>
      <a href="/share" className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600">Share Now</a>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <FaDonate className="text-pink-500 text-6xl mb-4" />
      <h3 className="text-2xl font-bold mb-2">Fundraise</h3>
      <p className="text-center text-gray-600">Start your own fundraiser to support our cause.</p>
      <a href="/fundraise" className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-full hover:bg-pink-600">Start Now</a>
    </div>
  </div>
);

const CharityHome = () => (
  <div className="bg-gray-50 min-h-screen flex flex-col">
    <Header />
    <CharityNavbar />
    <main className="flex-grow">
      {/* Hero Section */}
      <div
        className="hero-section relative flex items-center justify-center text-center text-white min-h-screen"
        style={{ backgroundImage: `url(${CharityHomeHeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10">
          <h1 className="hero-title text-5xl font-bold">Transform Lives with Your Help</h1>
          <p className="hero-subtitle text-xl mt-4">Your support provides essential services and hope to those in need.</p>
          <a href="/about" className="hero-button mt-6 inline-block bg-white text-pink-500 font-bold py-3 px-8 rounded-full hover:bg-pink-500 hover:text-white transition">Learn More</a>
        </div>
      </div>

      {/* Campaigns Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Campaigns</h2>
          <div className="campaign-grid flex justify-center gap-6">
            <div className="campaign-card">
              <img src={Campaign_1} alt="Campaign 1" className="rounded-lg shadow-md hover:shadow-xl transition-shadow" />
              <p className="legend mt-4 text-lg text-gray-700">Campaign 1: Providing Essential Healthcare</p>
            </div>
            <div className="campaign-card">
              <img src={Campaign_2} alt="Campaign 2" className="rounded-lg shadow-md hover:shadow-xl transition-shadow" />
              <p className="legend mt-4 text-lg text-gray-700">Campaign 2: Education for All</p>
            </div>
            <div className="campaign-card">
              <img src={Campaign_3} alt="Campaign 3" className="rounded-lg shadow-md hover:shadow-xl transition-shadow" />
              <p className="legend mt-4 text-lg text-gray-700">Campaign 3: Support for Families in Need</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-pink-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Impact</h2>
          <div className="impact-grid grid gap-8 sm:grid-cols-2 lg:grid-cols-4 px-4 md:px-0">
            <div className="impact-card">
              <FaHeart className="icon" />
              <h3 className="impact-number text-4xl font-bold text-gray-800">5,000+</h3>
              <p className="impact-text text-gray-600">Lives Impacted</p>
            </div>
            <div className="impact-card">
              <FaHandsHelping className="icon" />
              <h3 className="impact-number text-4xl font-bold text-gray-800">1,200+</h3>
              <p className="impact-text text-gray-600">Volunteers</p>
            </div>
            <div className="impact-card">
              <FaRegSmileBeam className="icon" />
              <h3 className="impact-number text-4xl font-bold text-gray-800">800+</h3>
              <p className="impact-text text-gray-600">Events Held</p>
            </div>
            <div className="impact-card">
              <FaDollarSign className="icon" />
              <h3 className="impact-number text-4xl font-bold text-gray-800">$2M+</h3>
              <p className="impact-text text-gray-600">Funds Raised</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Volunteers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: "img/volunteer/1.png", name: "Sakil Khan", role: "Donor" },
              { image: "img/volunteer/2.png", name: "Emran Ahmed", role: "Volunteer" },
              { image: "img/volunteer/3.png", name: "Sabbir Ahmed", role: "Volunteer" },
            ].map((volunteer, index) => (
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow" key={index}>
                <img src={volunteer.image} alt={volunteer.name} className="mb-4 rounded-full w-24 h-24 mx-auto" />
                <h4 className="text-xl font-semibold text-gray-800">{volunteer.name}</h4>
                <p className="text-gray-600">{volunteer.role}</p>
                <div className="flex justify-center mt-4 space-x-4 text-gray-500">
                  <a href="#"><i className="fa fa-facebook hover:text-pink-500 transition"></i></a>
                  <a href="#"><i className="fa fa-pinterest hover:text-pink-500 transition"></i></a>
                  <a href="#"><i className="fa fa-linkedin hover:text-pink-500 transition"></i></a>
                  <a href="#"><i className="fa fa-twitter hover:text-pink-500 transition"></i></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Can We Help Section */}
      <section className="bg-pink-50 py-20" id="how-can-we-help">
        <SectionIntro />
        <HelpCards />
      </section>
    </main>
    <Footer theme="charity" />
  </div>
);

export default CharityHome;
