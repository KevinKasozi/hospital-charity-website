import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HospitalHome from './components/hospital/HospitalHome';
import CharityHome from './components/charity/CharityHome';
import AboutUs from './components/hospital/AboutUs';
import ContactUs from './components/hospital/ContactUs';
import HospitalFeatures from './components/hospital/HospitalFeatures';
import OurServices from './components/hospital/OurServices';
import Statistic from './components/hospital/Statistic';
import Timeline from './components/hospital/Timeline';
import Events from './components/charity/Events';
import GetInvolved from './components/charity/GetInvolved';
import Donate from './components/charity/Donate';
import NotFound from './components/common/NotFound';

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    return <Navigate to="/charity/donate" />;
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.
          If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
        </p>
      </section>
    );
  }

  return null;
};

const App = () => (
  <div className="App">
    <Router>
      <Routes>
        <Route path="/hospital" element={<HospitalHome />} />
        <Route path="/hospital/about" element={<AboutUs />} />
        <Route path="/hospital/contact" element={<ContactUs />} />
        <Route path="/hospital/features" element={<HospitalFeatures />} />
        <Route path="/hospital/services" element={<OurServices />} />
        <Route path="/hospital/statistics" element={<Statistic />} />
        <Route path="/hospital/timeline" element={<Timeline />} />
        <Route path="/charity" element={<CharityHome />} />
        <Route path="/charity/events" element={<Events />} />
        <Route path="/charity/get-involved" element={<GetInvolved />} />
        <Route path="/charity/donate" element={<Donate />} />
        <Route path="/" element={<HospitalHome />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </div>
);

export default App;
