/**
 * This code was generated by Builder.io.
 */
import React from "react";

const coreValues = [
  {
    title: "Compassion",
    description: "We treat every pet with the love and care they deserve.",
    icon: "❤️",
    image:"/images/pamela.jpg"
  },
  {
    title: "Trust",
    description: "Reliability and transparency in every service we offer.",
    icon: "🤝",
    image:"/images/im.jpg"
  },
  {
    title: "Innovation",
    description: "Continuously improving to provide the best care.",
    icon: "💡",
    image:"/images/pamela1.gif"
  },
];

const CoreValues = () => {
  return (
    <section className="py-16  bg-[#f0f8ff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center"
            >
              <img className="text-4xl mb-4 w-32 h-32 rounded-full mx-auto" src={value.image}/>
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600 ">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
