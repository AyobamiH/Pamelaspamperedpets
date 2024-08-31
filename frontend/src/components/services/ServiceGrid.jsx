
import React from "react";

 const services = [
  {
    title: 'Pet Sitting & Overnight Care',
    description: 'Professional and caring pet sitting services to ensure pets are comfortable and safe at home.',
    icon: '🏠',
    image: "/images/dogonlogofwood.gif",
    id: "9d19"
  },
  {
    title: 'Special Needs Pet Care',
    description: 'Specialized care for pets with unique medical or behavioral needs, provided by an experienced team.',
    icon: '🩺',
    image: "/images/parrot.png",
    id: "023b"
  },
  {
    title: 'Intensive Care for Sick or Injured Pets in Seattle',
    description: 'Expert care and monitoring for sick or injured pets, ensuring their comfort and recovery.',
    icon: '🏥',
    image: "/images/pic.png",
    id: "7a46"
  },
  {
    title: 'Dog Walking and Exercise',
    description: "Daily walks and exercise tailored to a dog's energy level and needs, ensuring they stay happy and healthy.",
    icon: '🐕',
    image: "/images/poser.gif",
    id: "3b50"
  },
  {
    title: 'Unlimited Love & Attention',
    description: 'An abundance of love and attention, making sure pets feel cherished and content.',
    icon: '❤️',
    image: "/images/doggyicecream.gif",
    id: "d502"
  },
];


const ServiceGrid = ({ openModal }) => {
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            
            className="bg-white rounded-lg shadow-md overflow-hidden text-center"
          >
            
            
            <img  className="w-32 h-32 rounded-full mx-auto" src={service.image} alt={service.title}/>
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
