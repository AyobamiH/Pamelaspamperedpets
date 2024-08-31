// // import React from 'react';
// // import PropTypes from 'prop-types';

// // const FormField = ({ name, type, value, onChange, isRequired, label, options }) => {
// //   const baseStyles =
// //     'block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none';
// //   return (
// //     <div className="flex flex-col flex-1 shrink self-stretch pb-6 my-auto basis-0 min-w-[240px]">
// //       <label
// //         className="flex font-semibold overflow-hidden gap-1 items-center pb-2 w-full text-black text-opacity-80"
// //         htmlFor={name}
// //       >
// //       {label} {isRequired && <span className="text-red-500">*</span>}
// //       </label>
// //       <div className="flex overflow-hidden items-center w-full bg-white rounded-sm border border-solid border-[var(--sds-color-border-default-default)] opacity-[var(--sds-size-stroke-border)] text-black text-opacity-30">
// //         {type === 'textarea' ? (
// //           <textarea
// //             id={name}
// //             name={name}
// //             value={value}
// //             onChange={onChange}
// //             required={isRequired}
// //             className={`${baseStyles} h-32 resize-none`}
// //           />
// //         ) : type === 'select' ? (
// //           <select
// //             id={name}
// //             name={name}
// //             value={value}
// //             onChange={onChange}
// //             required={isRequired}
// //             className={`${baseStyles} flex overflow-hidden flex-1 shrink items-center self-stretch px-3 py-1.5 my-auto w-full bg-white border border-solid basis-0 border-[var(--sds-color-border-default-default)] min-w-[240px] opacity-[var(--sds-size-stroke-border)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)]`}
// //           >
// //             {options.map((option) => (
// //               <option key={option.value} value={option.value}>
// //                 {option.label}
// //               </option>
// //             ))}
// //           </select>
// //         ) : (
// //           <input
// //             id={name}
// //             type={type}
// //             name={name}
// //             value={value}
// //             onChange={onChange}
// //             required={isRequired}
// //             className={`${baseStyles} flex overflow-hidden flex-1 shrink items-center self-stretch px-3 py-1.5 my-auto w-full bg-white border border-solid basis-0 border-[var(--sds-color-border-default-default)] min-w-[240px] opacity-[var(--sds-size-stroke-border)] pl-[var(--sds-size-space-300)] pr-[var(--sds-size-space-300)]`}
// //           />
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // FormField.propTypes = {
// //   name: PropTypes.string.isRequired,
// //   type: PropTypes.string.isRequired,
// //   value: PropTypes.string.isRequired,
// //   onChange: PropTypes.func.isRequired,
// //   isRequired: PropTypes.bool,
// //   label: PropTypes.string.isRequired,
// //   options: PropTypes.arrayOf(
// //     PropTypes.shape({
// //       value: PropTypes.string.isRequired,
// //       label: PropTypes.string.isRequired,
// //     })
// //   ),
// // };




// // export default FormField;

// import React from 'react';

// const FormField = ({ label, name, type, value, onChange, isRequired }) => {
//   return (
//     <div className="mb-4">
//       <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
//         {label} {isRequired && <span className="text-red-500">*</span>}
//       </label>
//       {type === 'textarea' ? (
//         <textarea
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           required={isRequired}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//           rows="3"
//         />
//       ) : (
//         <input
//           type={type}
//           id={name}
//           name={name}
//           value={value}
//           onChange={onChange}
//           required={isRequired}
//           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//         />
//       )}
//     </div>
//   );
// };

// export default FormField;


import React from 'react';

const FormField = ({ label, name, type, value, onChange, isRequired }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={isRequired}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          rows="3"
        />
      ) : (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={isRequired}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      )}
    </div>
  );
};

export default FormField;

