// /**
//  * This code was generated by Builder.io.
//  */
// import React, { useState } from "react";

// function PetInformation({ onNext }) {
//   const [formData, setFormData] = useState({});
//   const [isFormValid, setIsFormValid] = useState(false);

//   const petFields = [
//     { label: "Pet's Name", name: "petsName", type: "text" },
//     { label: "Pet's Age", name: "petsAge", type: "number" },
//     { label: "Daily Routine", name: "dailyRoutine", type: "textarea" },
//     { label: "Health Information", name: "petsHealth", type: "textarea" },
//     { label: "Favorite Things", name: "favoriteThings", type: "textarea" },
//     { label: "Idiosyncrasies", name: "idioSyncrasies", type: "textarea" },
//     {
//       label: "Permission to take to vet?",
//       name: "vetPermission",
//       type: "textarea",
//     },
//   ];

//   const handleChange = (e) => {
//     const updatedFormData = { ...formData, [e.target.name]: e.target.value };
//     setFormData(updatedFormData);
//     setIsFormValid(
//       Object.keys(updatedFormData).length === petFields.length &&
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
//         Pet Information
//       </h2>
//       <form
//         onSubmit={handleSubmit}
//         className="flex flex-col px-6 pt-6 text-sm leading-5 max-md:px-5 max-md:max-w-full"
//       >
//         <div className="flex gap-4 flex-wrap">
//           {petFields.map((field, index) => (
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
//               {field.type === "textarea" ? (
//                 <textarea
//                   id={field.name}
//                   name={field.name}
//                   onChange={handleChange}
//                   required
//                   className="flex flex-col justify-center mt-2 px-3 py-1.5 bg-white rounded-sm border border-solid border-zinc-300 text-black text-opacity-30"
//                 />
//               ) : (
//                 <input
//                   id={field.name}
//                   name={field.name}
//                   type={field.type}
//                   onChange={handleChange}
//                   required
//                   className="flex flex-col justify-center mt-2 px-3 py-1.5 bg-white rounded-sm border border-solid border-zinc-300 text-black text-opacity-30"
//                 />
//               )}
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

// export default PetInformation;
