import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import Header from '../common/Header';
import Footer from '../common/Footer';
import CharityNavbar from './CharityNavbar';
import { FaHeart, FaHandsHelping, FaRegSmileBeam, FaDollarSign } from 'react-icons/fa';
import '../stylesheets/Donate.css';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button type="submit" disabled={!stripe}>Donate</button>
    </form>
  );
};

const Donate = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('/.netlify/functions/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: 1000 }), // Set amount as needed
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch(error => console.error('Error fetching client secret:', error));
  }, []);

  const options = {
    clientSecret,
    appearance: { /* customize the appearance here */ },
  };

  return (
    <div className="donate-page">
      <Header />
      <CharityNavbar />
      <main className="main-content">
        <div className="background-design"></div>
        <div className="form-container">
          <h1 className="form-header">Donate</h1>
          {clientSecret ? (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          ) : (
            <p>Loading...</p>
          )}
        </div>

        {/* New Impact Section */}
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
};

export default Donate;
