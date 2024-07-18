import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CharityNavbar from './CharityNavbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaHandHoldingHeart, FaHandsHelping, FaBullhorn, FaDonate } from 'react-icons/fa';

const SectionIntro = () => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-semibold mb-4">How Can We Help</h2>
    <p className="text-lg">Discover the various ways you can make a difference and support our cause.</p>
  </div>
);

const HelpCards = () => (
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <FaHandHoldingHeart className="text-pink-500 text-6xl mb-4" />
      <h3 className="text-2xl font-bold mb-2">Donate</h3>
      <p>Your contributions can help provide essential services and support.</p>
      <a href="/charity/donate" className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-full">Donate Now</a>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <FaHandsHelping className="text-pink-500 text-6xl mb-4" />
      <h3 className="text-2xl font-bold mb-2">Volunteer</h3>
      <p>Join our team and help us make a bigger impact.</p>
      <a href="/get-involved" className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-full">Get Involved</a>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <FaBullhorn className="text-pink-500 text-6xl mb-4" />
      <h3 className="text-2xl font-bold mb-2">Spread the Word</h3>
      <p>Help us reach more people by sharing our mission with your network.</p>
      <a href="/share" className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-full">Share Now</a>
    </div>
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
      <FaDonate className="text-pink-500 text-6xl mb-4" />
      <h3 className="text-2xl font-bold mb-2">Fundraise</h3>
      <p>Start your own fundraiser to support our cause.</p>
      <a href="/fundraise" className="mt-4 bg-pink-500 text-white font-bold py-2 px-4 rounded-full">Start Now</a>
    </div>
  </div>
);

const CharityHome = () => (
  <div className="bg-red-50 min-h-screen flex flex-col">
    <Header />
    <CharityNavbar />
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-red-400 to-pink-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Help the Children When They Need</h1>
          <p className="mt-4">With so much to consume and such little time, coming up with relevant title ideas is essential</p>
          <a href="/about" className="mt-6 inline-block bg-white text-red-500 font-bold py-2 px-4 rounded-full">Learn More</a>
        </div>
      </div>

      {/* Campaigns Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Campaigns</h2>
          <Carousel showArrows={true} infiniteLoop={true} showThumbs={false}>
            <div>
              <img src="img/help/1.png" alt="Campaign 1" />
              <p className="legend">Campaign 1 Description</p>
            </div>
            <div>
              <img src="img/help/2.png" alt="Campaign 2" />
              <p className="legend">Campaign 2 Description</p>
            </div>
            <div>
              <img src="img/help/3.png" alt="Campaign 3" />
              <p className="legend">Campaign 3 Description</p>
            </div>
          </Carousel>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-pink-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p>Details about the impact of our charitable activities on the hospital and its patients.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Volunteer Programs</h3>
              <p>What our donors and beneficiaries say about us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Volunteers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { image: "img/volenteer/1.png", name: "Sakil khan", role: "Donner" },
              { image: "img/volenteer/2.png", name: "Emran Ahmed", role: "Volunteer" },
              { image: "img/volenteer/3.png", name: "Sabbir Ahmed", role: "Volunteer" },
            ].map((volunteer, index) => (
              <div className="p-6 bg-white rounded-lg shadow-md" key={index}>
                <img src={volunteer.image} alt={volunteer.name} className="mb-4 rounded-full mx-auto" />
                <h4 className="text-xl font-semibold">{volunteer.name}</h4>
                <p>{volunteer.role}</p>
                <div className="flex justify-center mt-4 space-x-4">
                  <a href="#"><i className="fa fa-facebook"></i></a>
                  <a href="#"><i className="fa fa-pinterest"></i></a>
                  <a href="#"><i className="fa fa-linkedin"></i></a>
                  <a href="#"><i className="fa fa-twitter"></i></a>
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
