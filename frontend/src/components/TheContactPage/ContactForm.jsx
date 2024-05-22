

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import SendMessageButton from "../common/SendMessage"
// import messageServices from "../../services/messageServices";
// const ContactForm = () => {
//   const [confirmationMessage, setConfirmationMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
  

//  useEffect(() => {
//     const element = document.getElementById('showInterest');
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }, []);
  
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//     agreement: false,

//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData({
//       ...formData,
//       [name]: type === "checkbox" ? checked : value,
//     });
//   };

//   const isFormComplete = () => {
//     const { name, email, message, phone, agreement} = formData;
//     return (
//       name?.trim() !== "" &&
//       email?.trim() !== "" &&
//       message?.trim() !== "" &&
//       phone?.trim() !== "" &&
//       agreement
      
//     );
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (isFormComplete()) {
//       setIsLoading(true);
//       try {
//         messageServices.create(formData)

//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//           agreement: false,
          
//         });
//         setConfirmationMessage("Your message has been sent successfully!");
        
//       } catch (error) {
//         console.error('Error sending message:', error);
//         setConfirmationMessage("There was an error sending your message. Please try again.");
        
//       } finally {
//         setIsLoading(false);
//       }
//     } else {
//       alert('Please fill out all fields and agree to the terms');
//     }
//   };

//   return (
//     <div className="bg-[#b2dbff] rounded-lg p-8 shadow-md">
//       <h2 className="text-3xl font-bold mb-2">Contact</h2>
//       <p className="text-xl mb-6">We're here to help you and your pet!</p>

      

      
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
            
//             {confirmationMessage && (
//               <div className={`mb-4 block ${confirmationMessage.includes("error") ? "text-red-600" : "w-fit text-white bg-[#2c6495]"}`}>
//                 {confirmationMessage}
//               </div>
//             )}
//           </motion.div>
        
      
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             htmlFor="name"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="form-field"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="email"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="form-field"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             htmlFor="phone"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Phone
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             className="form-field"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="message"
//             className="block text-sm font-medium text-gray-700 mb-1"
//           >
//             Message
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             className="form-field h-32"
//             required
//           ></textarea>
//         </div>
//         <div>
//         <label className="block text-sm font-medium text-gray-700 mb-4">
//           <input
//             type="checkbox"
//             name="agreement"
//             checked={formData.agreement}
//             onChange={handleChange}
//             className="form-checkbox"
//           />
//           <span className="ml-2 text-sm text-gray-700">
//             By selecting this, you are agreeing to further contact.
//           </span>
//         </label>
//       </div>
//         {/* <button
//           type="submit"
//           className="bg-[#40bfe0] text-white font-bold py-2 px-4 rounded hover:bg-[#3aa8c7] transition duration-300"
//         >
//           Send Message
//         </button> */}
//         <div>
//         <motion.div
//           className="relative z-10 max-w-3xl mx-auto px-4"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//           >
            
//             <SendMessageButton
//               type="submit"
//               className={`block ml-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
//                 formData.agreement && !isLoading
//                   ? "bg-[#3aa8c7] hover:bg-[#1a6b82] focus:ring-[#14c2f2] font-bold py-2 px-4 rounded transition duration-300"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//               onClick={() => console.log("Form Submit button clicked")}
//               disabled={!formData.agreement || isLoading}
//             >
//               {isLoading ? "Sending..." : "Send Message"}
//             </SendMessageButton>
            


//           </motion.div>
//         </motion.div>
//       </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SendMessageButton from "../common/SendMessage";

const ContactForm = () => {
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const element = document.getElementById('showInterest');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreement: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const isFormComplete = () => {
    const { name, email, message, phone, agreement } = formData;
    return (
      name?.trim() !== "" &&
      email?.trim() !== "" &&
      message?.trim() !== "" &&
      phone?.trim() !== "" &&
      agreement
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormComplete()) {
      alert('Please fill out all fields and agree to the terms');
      return;
    }

    setIsLoading(true);
    setConfirmationMessage(""); // Reset confirmation message on new submit attempt

    try {
      const response = await fetch('https://backend-c469.onrender.com/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error ${response.status}: ${errorData.message || 'Failed to send message'}`);
      }

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        agreement: false,
      });
      setConfirmationMessage("Your message has been sent successfully!");
    } catch (error) {
      console.error('Error sending message:', error);
      setConfirmationMessage(`There was an error sending your message: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-[#b2dbff] rounded-lg p-8 shadow-md">
      <h2 className="text-3xl font-bold mb-2">Send A Message</h2>
      <p className="text-xl mb-6">I am always here to help you and your pets out!</p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {confirmationMessage && (
          <div className={`mb-4 block ${confirmationMessage.includes("error") ? "text-red-600" : "w-fit text-white bg-[#2c6495]"}`}>
            {confirmationMessage}
          </div>
        )}
      </motion.div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-field"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-field"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-field"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-field h-32"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            <input
              type="checkbox"
              name="agreement"
              checked={formData.agreement}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span className="ml-2 text-sm text-gray-700">
              By selecting this, you are agreeing to further contact.
            </span>
          </label>
        </div>
        <div>
          <motion.div
            className="relative z-10 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <SendMessageButton
                type="submit"
                className={`block ml-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${
                  formData.agreement && !isLoading
                    ? "bg-[#3aa8c7] hover:bg-[#1a6b82] focus:ring-[#14c2f2] font-bold py-2 px-4 rounded transition duration-300"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
                onClick={() => console.log("Form Submit button clicked")}
                disabled={!formData.agreement || isLoading}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </SendMessageButton>
            </motion.div>
          </motion.div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
