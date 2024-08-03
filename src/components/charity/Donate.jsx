import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CharityNavbar from './CharityNavbar';
import { FaHeart, FaHandsHelping, FaRegSmileBeam, FaDollarSign } from 'react-icons/fa';
import '../stylesheets/Donate.css';

const ProductDisplay = ({ handleDonate }) => (
  <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="Donation"
      />
      <div className="description">
        <h3>Donation</h3>
      </div>
    </div>
    <button type="button" onClick={handleDonate}>
      Donate
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Donate() {
  const [amount, setAmount] = useState(1000); // Default amount
  const [message, setMessage] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get('success')) {
      setMessage('Donation successful! You will receive an email confirmation.');
    }

    if (query.get('canceled')) {
      setMessage('Donation canceled -- please try again.');
    }
  }, []);

  const handleDonate = async () => {
    try {
      const response = await fetch('/.netlify/functions/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount }),
      });

      const session = await response.json();
      if (session.url) {
        window.location.href = session.url;
      } else {
        console.error('Error:', session);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="donate-page">
      <Header />
      <CharityNavbar />
      <main className="main-content">
        <div className="background-design"></div>
        <div className="form-container">
          <h1 className="form-header">Donate</h1>
          <div className="mb-4">
            <h2>Select Donation Amount:</h2>
            <div className="flex space-x-4">
              {[1000, 5000, 10000, 20000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`p-2 border rounded ${amount === amt ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                  onClick={() => setAmount(amt)}
                >
                  ${amt / 100}
                </button>
              ))}
              <input
                type="number"
                value={amount / 100}
                onChange={(e) => setAmount(parseInt(e.target.value) * 100)}
                className="p-2 border rounded w-20"
                placeholder="Other"
              />
            </div>
          </div>
          {message ? (
            <Message message={message} />
          ) : (
            <ProductDisplay handleDonate={handleDonate} />
          )}
        </div>

        <div className="bg-gradient-to-r from-blue-400 to-purple-500 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-4">Our Impact</h2>
              <p className="text-lg">See the difference we are making together.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <FaHeart className="text-blue-500 text-6xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">5,000+</h3>
                <p>Lives Impacted</p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <FaHandsHelping className="text-blue-500 text-6xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">1,200+</h3>
                <p>Volunteers</p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <FaRegSmileBeam className="text-blue-500 text-6xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">800+</h3>
                <p>Events Held</p>
              </div>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
                <FaDollarSign className="text-blue-500 text-6xl mb-4" />
                <h3 className="text-2xl font-bold mb-2">$2M+</h3>
                <p>Funds Raised</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
