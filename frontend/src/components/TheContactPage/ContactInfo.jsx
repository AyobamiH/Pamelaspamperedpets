
import React from "react";

const ContactInfo = () => {
  return (
    <div className="bg-white shadow-md rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Address:</h3>
        <p>Seattle, Washington, USA </p>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Phone:</h3>
        <a href="tel:+12063837255" className="text-[#40bfe0] hover:underline">
          (206) 383-7255
        </a>
      </div>
      <div className="mb-4">
        <h3 className="font-bold mb-2">Email:</h3>
        <a
          href="mailto:hellopamela@icloud.com"
          className="text-[#40bfe0] hover:underline"
        >
          hellopamela@icloud.com
        </a>
      </div>
      <div className="mb-6">
        <h3 className="font-bold mb-2">Office Hours:</h3>
        <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
        <p>Saturday: 9:00 AM - 4:00 PM</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="w-full h-64">
        <iframe
          title="Pet Care Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844797932764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629794729807!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactInfo;
