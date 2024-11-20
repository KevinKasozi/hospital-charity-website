// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HospitalHome from './components/hospital/HospitalHome';
import CharityHome from './components/charity/CharityHome';
import AboutUs from './components/hospital/AboutUs';
import ContactUs from './components/hospital/ContactUs';
import HospitalFeatures from './components/hospital/HospitalFeatures';
import OurServices from './components/hospital/OurServices';
import Statistic from './components/hospital/Statistic';
import Timeline from './components/hospital/Timeline';
import Success from './components/hospital/Success';
import Events from './components/charity/Events';
import GetInvolved from './components/charity/GetInvolved';
import Donate from './components/charity/Donate';
import NotFound from './components/common/NotFound';
import TermsAndConditions from './components/common/T&Cpage'; 

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
        <Route path="/success" element={<Success />} />
        <Route path="/charity" element={<CharityHome />} />
        <Route path="/charity/events" element={<Events />} />
        <Route path="/charity/get-involved" element={<GetInvolved />} />
        <Route path="/charity/donate" element={<Donate />} />
        <Route path="/" element={<HospitalHome />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> 
      </Routes>
    </Router>
  </div>
);

export default App;