


import React, { useState } from "react";
import FAQSearch from "../faq/FAQSearch";

import FAQNavigation from "../faq/FAQNavigation";
import FAQContact from "../faq/FAQContact"

const categories = [
  'General Questions',
  'Services Offered',
  'Booking and Scheduling',
  'Health and Safety',
  'Pricing and Payments',
  'Policies and Procedures',
];

const faqData = {
  "General Questions": [
    { "question": "What areas do you serve?", "answer": "We provide pet care services throughout Seattle, including neighborhoods like Capitol Hill, Queen Anne, Ballard, Fremont, and West Seattle." },
    { "question": "What types of pets do you care for?", "answer": "We care for a wide range of pets including dogs, cats, birds, rabbits, and small mammals. If you have a unique pet, please contact us to discuss specific care needs." },
    { "question": "Are you licensed and insured?", "answer": "Yes, we are fully licensed, insured, and bonded to ensure the safety and well-being of your pets." },
    { "question": "How do I contact customer support?", "answer": "You can contact our customer support team via email, phone, or through the contact form on our website. We are here to assist you with any questions or concerns." }
  ],
  "Services Offered": [
    { "question": "What services do you offer?", "answer": "We offer a variety of pet care services including dog walking, pet sitting, grooming, and specialized care for pets with special needs. Please visit our services page for a complete list and detailed descriptions." },
    { "question": "Can you provide care for special needs pets?", "answer": "Yes, we have experienced staff trained to care for pets with special needs, including administering medication and providing specialized care. Please inform us of your pet's specific requirements when booking." },
    { "question": "What is included in your dog walking service?", "answer": "Our dog walking service includes a walk tailored to your dog's needs, fresh water, and a detailed update on your pet's walk. We also offer playtime and basic training reinforcement upon request." },
    { "question": "Do you offer overnight pet sitting?", "answer": "Yes, we offer overnight pet sitting services to provide companionship and care for your pet while you're away. This includes feeding, fresh water, playtime, and any necessary medications." }
  ],
  "Booking and Scheduling": [
    { "question": "How do I book a service?", "answer": "You can book a service through our website, by phone, or via our mobile app. We recommend booking in advance, especially during peak times." },
    { "question": "Can I schedule recurring services?", "answer": "Yes, we offer recurring service options for your convenience. You can schedule daily, weekly, or monthly services based on your needs." },
    { "question": "What is your cancellation policy?", "answer": "We require at least 24 hours' notice for cancellations to avoid a cancellation fee. For more details, please refer to our cancellation policy on our website." },
    { "question": "How far in advance should I book?", "answer": "We recommend booking as far in advance as possible, especially during holidays and peak times, to ensure availability. However, we will do our best to accommodate last-minute requests." }
  ],
  "Health and Safety": [
    { "question": "What is your vaccination policy?", "answer": "We require all pets to be up-to-date on their vaccinations. Please provide proof of vaccination prior to booking services to ensure the health and safety of all pets in our care." },
    { "question": "How do you handle emergencies?", "answer": "In case of an emergency, we will contact you immediately and take your pet to the nearest emergency veterinary clinic. We always prioritize your pet's health and safety." },
    { "question": "What safety measures do you have in place?", "answer": "Our team is trained in pet first aid and CPR. We follow strict protocols for handling pets and managing any emergencies to ensure their safety." },
    { "question": "Do you have first aid training?", "answer": "Yes, our staff is trained in pet first aid and CPR to handle any emergencies that may arise while caring for your pet." }
  ],
  "Pricing and Payments": [
    { "question": "What are your rates?", "answer": "Our rates vary based on the service and duration. Please visit our pricing page for detailed information on our rates and packages." },
    { "question": "How do I make a payment?", "answer": "We accept payments through our website, mobile app, and over the phone. Payment methods include credit cards, debit cards, and electronic bank transfers." },
    { "question": "Do you offer discounts for multiple pets?", "answer": "Yes, we offer discounts for households with multiple pets. Please contact us for more details and to discuss your specific needs." },
    { "question": "Are there any additional fees?", "answer": "Additional fees may apply for services such as administering medication, last-minute bookings, and holiday care. Please refer to our pricing page for a full list of potential additional fees." }
  ],
  "Policies and Procedures": [
    { "question": "What is your cancellation policy?", "answer": "We require at least 24 hours' notice for cancellations to avoid a cancellation fee. For more details, please refer to our cancellation policy on our website." },
    { "question": "How do you handle inclement weather?", "answer": "In the event of inclement weather, we prioritize the safety of your pet and our staff. We may adjust services or reschedule as necessary, and we will keep you informed of any changes." },
    { "question": "What if my pet has a behavioral issue?", "answer": "We have experience handling pets with various behavioral issues. Please inform us of any specific concerns or behaviors so we can provide the best care possible for your pet." },
    { "question": "How do you manage keys and access to my home?", "answer": "We use a secure and confidential system to manage keys and access information. Only authorized staff members have access to this information to ensure the security of your home and pet." }
  ]
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [searchResults, setSearchResults] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleSearch = (searchTerm) => {
    if (!searchTerm.trim()) {
      setSearchResults(null);
      return;
    }

    const results = Object.values(faqData)
      .flat()
      .filter(
        (faq) =>
          faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );

    setSearchResults(results);
  };

  const faqsToDisplay = searchResults || faqData[selectedCategory];

  return (
    <section className="bg-white py-12">

      <div className="container mx-auto px-4 max-w-4xl py-12 bg-[#f0f8ff] lg:bg-white sm:bg-[#f0f8ff]">
        <header className="text-center mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600">
        Find answers to common questions about our pet care services.
      </p>
      </header>
      
        
        <FAQNavigation
        categories={categories}
        activeCategory={selectedCategory}
        setActiveCategory={setSelectedCategory}
      />
        <FAQSearch onSearch={handleSearch} />
        <div className="max-w-3xl mx-auto">
          {faqsToDisplay.map((faq, index) => (
            <div key={index} className="mb-4 border-b border-gray-200 py-4 bg-[#f0f8ff] p-8   sm:bg-white   rounded-lg shadow-lg">
              <button
                className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white rounded-lg focus:ring-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-2xl font-bold mb-4">{faq.question}</h3>
                <p className="font-roboto-mono">{openIndex === index ? "-" : "+"}</p>
              </button>
              {openIndex === index && (
                <div className="mt-2 p-4 bg-white rounded-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <FAQContact/>
    </section>
  );
};

export default FAQSection;
