
// import React, { useState } from "react";

// function CustomerInformation({ onNext }) {
//   const [formData, setFormData] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false);

//   const fields = [
//     {
//       label: "Customer's Name",
//       name: "customerName",
//       type: "text",
//       placeholder: "John Doe",
//     },
//     {
//       label: "Email",
//       name: "email",
//       type: "email",
//       placeholder: "johndoe@example.com",
//     },
//     {
//       label: "Cell Phone",
//       name: "cellPhone",
//       type: "tel",
//       placeholder: "###-###-####",
//     },
//     {
//       label: "Home Phone",
//       name: "homePhone",
//       type: "tel",
//       placeholder: "###-###-####",
//     },
//     {
//       label: "Home Address",
//       name: "homeAddress",
//       type: "text",
//       placeholder: "123 Main St, City, State, ZIP",
//     },
//     {
//       label: "Emergency Contact Number",
//       name: "emergencyContact",
//       type: "tel",
//       placeholder: "###-###-####",
//     },
//   ];

//   const handleChange = (e) => {
//     const updatedFormData = { ...formData, [e.target.name]: e.target.value };
//     setFormData(updatedFormData);
//     setIsFormValid(
//       Object.keys(updatedFormData).length === fields.length &&
//         Object.values(updatedFormData).every((value) => value.trim() !== "")
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (isFormValid) {
//       onNext(formData);
//     }
//   };

//   return (
//     <div className="flex flex-col pb-10 bg-white rounded-sm max-md:max-w-full">
//       <h2 className="justify-center items-start px-6 py-4 text-base font-medium leading-6 bg-white shadow-sm text-black text-opacity-80 max-md:px-5 max-md:max-w-full">
//         Customer's Information
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col px-6 pt-6 text-sm leading-5 max-md:px-5 max-md:max-w-full"
//       >
//         <div className="flex gap-4 flex-wrap">
//           {fields.map((field, index) => (
//             <div
//               key={index}
//               className="flex flex-col flex-1 pb-6 min-w-[200px]"
//             >
//               <label
//                 htmlFor={field.name}
//                 className="text-black text-opacity-80"
//               >
//                 {field.label}
//               </label>
//               <input
//                 id={field.name}
//                 name={field.name}
//                 type={field.type}
//                 placeholder={field.placeholder}
//                 onChange={handleChange}
//                 required
//                 className="flex flex-col justify-center mt-2 px-3 py-1.5 bg-white rounded-sm border border-solid border-zinc-300 text-black text-opacity-30"
//               />
//             </div>
//           ))}
//         </div>
//         <button
//           type="submit"
//           disabled={!isFormValid}
//           className={`z-10 justify-center self-center px-4 py-1 mb-0 text-center text-white whitespace-nowrap rounded-lg border border-solid shadow-sm max-md:px-5 max-md:mb-2.5 ${
//             isFormValid
//               ? "bg-sky-500 border-sky-500"
//               : "bg-gray-400 border-gray-400 cursor-not-allowed"
//           }`}
//         >
//           Next
//         </button>
//       </form>
//     </div>
//   );
// }

// export default CustomerInformation;
