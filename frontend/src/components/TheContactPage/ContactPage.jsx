
import React from "react";
import HeroBanner from "./HeroBanner";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SocialMedia from "./SocialMedia";
import Newsletter from "./Newsletter";


const ContactPage = () => {
  return (
    <div className="font-roboto-mono">
     
      <HeroBanner />
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
        <SocialMedia />
        <Newsletter />
      </main>
   
    </div>
  );
};

export default ContactPage;
