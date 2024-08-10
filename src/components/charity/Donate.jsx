import React, { useState, useEffect } from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CharityNavbar from './CharityNavbar';
import '../stylesheets/Donate.css';

const ProductDisplay = ({ handleDonate }) => (
  <section>
    <div className="product">
      <div className="description">
        <h3>Donation</h3>
      </div>
    </div>
    <button type="button" className="donate-button" onClick={handleDonate}>
      Donate
    </button>
  </section>
);

const Message = ({ message }) => (
  <section className="message-section">
    <p>{message}</p>
  </section>
);

export default function Donate() {
  const [amount, setAmount] = useState(1000); // Default amount
  const [message, setMessage] = useState('');
  const [isRecurring, setIsRecurring] = useState(false); // State for payment frequency

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
        body: JSON.stringify({ amount, isRecurring }),
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
      <div
        className="hero-section relative flex items-center justify-center text-center text-white min-h-screen"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="hero-overlay absolute inset-0 bg-black opacity-50"></div>
        <div className="hero-content">
          <h1 className="hero-title">Donate Now and Transform Lives in Iganga District</h1>
          <p className="hero-subtitle">
            Every year, countless individuals in Uganda’s Iganga District struggle to access essential medical care due to poverty. Your generous donation can make a significant impact, providing crucial healthcare services to those in desperate need.
          </p>
        </div>
      </div>
      <main className="main-content">
        <div className="background-design"></div>
        <div className="form-container">
          <h1 className="form-header">Donate</h1>
          <p className="form-description">
            By contributing today, you help deliver vital medical treatments, improve healthcare infrastructure, and offer hope to families living in poverty. Together, we can transform lives and build a healthier future for the Iganga District community. Your support makes all the difference.
          </p>
          <div className="frequency-section">
            <h2 className="text-center mb-4">GIFT FREQUENCY</h2>
            <div className="frequency-buttons">
              <button
                type="button"
                className={`frequency-button ${!isRecurring ? 'selected' : ''}`}
                onClick={() => setIsRecurring(false)}
              >
                One Time
              </button>
              <button
                type="button"
                className={`frequency-button ${isRecurring ? 'selected' : ''}`}
                onClick={() => setIsRecurring(true)}
              >
                Regular
              </button>
            </div>
          </div>
          <div className="amount-section">
            <h2 className="text-center mb-4">SELECT AMOUNT (GBP)</h2>
            <div className="amount-buttons">
              {[3000, 7500, 15000, 30000].map((amt) => (
                <button
                  key={amt}
                  type="button"
                  className={`amount-button ${amount === amt ? 'selected' : ''}`}
                  onClick={() => setAmount(amt)}
                >
                  £{amt / 100}
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
      </main>
      <Footer />
    </div>
  );
}
