
import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import your services and components
import NavigationMenu from './components/NavigationMenu';
import LandingPages from './components/LandingPage';
import MessagesList from './components/MessagesList';
import ContactPage from './components/TheContactPage/ContactPage';
import Footer from './components/Footer';
import AboutPage from './components/petCareAbout/AboutPage';
import ServicesPage from './components/services/ServicesPage';
import BookingForm from './components/BookingForm';

import BookingsList from './components/BookingManagement/BookingList'

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <NavigationMenu />
        <Routes>
          <Route path="/" element={<LandingPages />} /> {/* Landing page route */}
         
          <Route path="/booking-form" element={<BookingForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/bookings" element={<BookingsList />} /> {/* Displays list of bookings */}
          <Route path="/contact" element={<ContactPage />} /> {/* Contact page */}
          <Route path="/view-messages" element={<MessagesList />} /> {/* Displays list of messages */}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
