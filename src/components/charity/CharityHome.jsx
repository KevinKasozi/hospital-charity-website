import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CharityNavbar from './CharityNavbar';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

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

      {/* Donation Section */}
      <section className="bg-pink-50 py-20" id="make-donation">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Make a Donation</h2>
          <form action="#" className="donation_form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">$</span>
                  </div>
                  <input type="text" className="form-control" placeholder="Amount" aria-label="Amount" aria-describedby="basic-addon1" />
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">Select Amount:</h4>
                <div className="flex justify-between">
                  <label className="inline-flex items-center">
                    <input type="radio" name="amount" value="10" className="form-radio" />
                    <span className="ml-2">10</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="amount" value="30" className="form-radio" />
                    <span className="ml-2">30</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input type="radio" name="amount" value="50" className="form-radio" />
                    <span className="ml-2">50</span>
                  </label>
                </div>
              </div>
            </div>
            <button className="mt-6 bg-red-500 text-white font-bold py-2 px-4 rounded-full">Donate Now</button>
          </form>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CharityHome;
