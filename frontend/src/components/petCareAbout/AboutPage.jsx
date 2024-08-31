
import React from "react";
import { Link } from "react-router-dom";
import Hero from "./Hero";
import OurJourney from "./OurJourney";
import CoreValues from "./CoreValues";
import TeamSection from "./TeamSection";
import ServiceGrid from "../services/ServiceGrid";
import Testimonial from "../../components/Testimonial";
import ContactCTA from "./ContactCTA";
import BookASpot from "../services/BookASpot";
const AboutPage = () => {
  return (
    <div className="bg-gray-200 min-h-screen font-sans">
      <Hero />
      <OurJourney />
      <CoreValues />
      <section className="py-16 bg-[#f0f8ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Pet Care Services</h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
           I offer a range of services tailored to your pet’s needs, from grooming and boarding to specialized medical care. My goal is to ensure your pet is happy, healthy, and well-cared for.
        </p>
        <ServiceGrid />
    
      </div>
    </section>
      <ContactCTA />
       <TeamSection />
      <Testimonial />
      <BookASpot />
    
      
     <div className="fixed bottom-0 left-0 right-0 bg-transparent shadow-lg p-4 flex  justify-center space-x-4">
        <Link to="/booking-form">
        <button className="bg-[#40bfe0] text-gray-800 px-6 py-2 rounded-full hover:bg-[#1e778e] hover:text-gray-100 transition duration-300">
          Book Now
        </button>
        </Link>

        <Link to="/contact">
        <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-[#1e778e] hover:text-gray-100 transition duration-300">
          Contact Us
        </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;
