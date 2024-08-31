

import React, { useState, useEffect } from 'react';
import FormField from './FormField';
import FormButton from './FormButton';
import complimentarycard from '/images/complimentarycard.gif';
import { Link } from 'react-router-dom';
import bookingServices from "../services/bookingService";

const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [isNextDisabled, setIsNextDisabled] = useState(true);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const requiredFields = {
    1: ['customerName', 'email', 'homeAddress', 'emergencyContactNumber'],
    2: ['petsName', 'petsAge', 'dailyRoutine', 'petsHealth', 'favoriteThings', 'idioSyncrasies', 'vetPermission'],
    3: ['startDateAndTime', 'endDateAndTime', 'specialRequest', 'alarmInfo', 'miscNotes', 'additionalNotes'],
  };

  useEffect(() => {
    validateForm();
  }, [formData, step]);

  const validateForm = () => {
    const fields = requiredFields[step] || [];
    const isValid = fields.every(field => formData[field]);
    setIsNextDisabled(!isValid);
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (step === 4) {
      handleSubmit(e);
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = name.includes('Phone') ? value.replace(/\D/g, '') : value;
    setFormData(prevState => ({ ...prevState, [name]: sanitizedValue }));
  };

  const resetForm = () => {
    setFormData({
      customerName: '',
      email: '',
      petsName: '',
      petsAge: '',
      dailyRoutine: '',
      cellPhone: '',
      homePhone: '',
      homeAddress: '',
      emergencyContactNumber: '',
      startDateAndTime: '',
      endDateAndTime: '',
      workPhone: '',
      petsHealth: '',
      favoriteThings: '',
      vetPermission: '',
      additionalNotes: '',
      idioSyncrasies: '',
      alarmInfo: '',
      specialRequest: '',
    });
    setStep(1);
  };

  const isFormComplete = () => {
    const { customerName, email, petsName, petsAge, dailyRoutine,
            cellPhone, homePhone, homeAddress, emergencyContactNumber,   
            startDateAndTime, endDateAndTime, workPhone, petsHealth,
            favoriteThings, vetPermission, additionalNotes,
            idioSyncrasies, alarmInfo, specialRequest } = formData;
    return (
      customerName?.trim() !== "" &&
      email?.trim() !== "" &&
      petsName?.trim() !== "" &&
      petsAge?.trim() !== "" &&
      dailyRoutine?.trim() !== "" &&
      cellPhone?.trim() !== "" &&
      homePhone?.trim() !== "" &&
      homeAddress?.trim() !== "" &&
      emergencyContactNumber?.trim() !== "" &&
      startDateAndTime?.trim() !== "" &&
      endDateAndTime?.trim() !== "" &&
      workPhone?.trim() !== "" &&
      petsHealth?.trim() !== "" &&
      favoriteThings?.trim() !== "" &&
      vetPermission?.trim() !== "" &&
      additionalNotes?.trim() !== "" &&
      idioSyncrasies?.trim() !== "" &&
      alarmInfo?.trim() !== "" &&
      specialRequest?.trim() !== ""   
    );
  };



  const handleSubmit = async (e) => {
  e.preventDefault();

  if (isFormComplete()) {
    setIsLoading(true);
    try {
      const response = await fetch('https://backend-c469.onrender.com/bookings/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Booking created:', result);
        setStep(5);
        setConfirmationMessage("Your booking has been sent successfully!");
      } else {
        throw new Error('Failed to create booking');
      }
    } catch (error) {
      console.error('Error sending booking:', error);
      setConfirmationMessage("There was an error sending your booking. Please try again.");
    } finally {
      setIsLoading(false);
    }
  } else {
    alert('Please fill out all fields and agree to the terms');
  }
};


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (isFormComplete()) {
  //     setIsLoading(true);
  //     try {
  //       await bookingServices.createBooking(formData);

  //       setStep(5);
  //       setConfirmationMessage("Your booking has been sent successfully!");
  //     } catch (error) {
  //       console.error('Error sending message:', error);
  //       setConfirmationMessage("There was an error sending your booking. Please try again.");
  //       setErrorMessage('Error Occurred');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   } else {
  //     alert('Please fill out all fields and agree to the terms');
  //   }
  // }; 




//   const handleSubmit = async (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior.

//     if (isFormComplete()) { // Check if all required fields are filled out.
//         setIsLoading(true); // Show a loading spinner.

//         try {
//             // Send a POST request to the backend API with the form data.
//             const response = await bookingServices.createBooking(formData);

//             // Check if the response status is 200 or any success code.
//             if (response.status === 200) { 
//                 setStep(5); // Move to the Thank You step.
//                 setConfirmationMessage("Your booking has been sent successfully!");
//             } else {
//                 throw new Error('Failed to create booking'); // Throw an error if the status is not 200.
//             }
//         } catch (error) {
//             console.error('Error sending booking:', error); // Log the error in the console.
//             setErrorMessage('There was an error sending your booking. Please try again.');
//         } finally {
//             setIsLoading(false); // Hide the loading spinner after the request completes.
//         }
//     } else {
//         alert('Please fill out all required fields before submitting.'); // Alert the user if any field is missing.
//     }
// };
  const renderFields = (fields) => (
    fields.map(({ label, name, type, isRequired }) => (
      <div key={name} className="flex flex-col">
        <FormField
          label={label}
          isRequired={isRequired}
          name={name}
          type={type}
          value={formData[name] || ''}
          onChange={handleInputChange}
        />
      </div>
    ))
  );

  const customerFields = [
    { label: 'Customer Name', name: 'customerName', type: 'text', isRequired: true },
    { label: 'Email', name: 'email', type: 'email', isRequired: true },
    { label: 'Cell Phone', name: 'cellPhone', type: 'tel', isRequired: false },
    { label: 'Home Phone', name: 'homePhone', type: 'tel', isRequired: false },
    { label: 'Home Address', name: 'homeAddress', type: 'text', isRequired: true },
    { label: 'Emergency Contact Phone Number', name: 'emergencyContactNumber', type: 'tel', isRequired: true },
    { label: 'Work Phone', name: 'workPhone', type: 'tel', isRequired: false },
  ];

  const petFields = [
    { label: "Pet's Name", name: 'petsName', type: 'text', isRequired: true },
    { label: "Pet's Age", name: 'petsAge', type: 'number', isRequired: true },
    { label: 'Daily Routine', name: 'dailyRoutine', type: 'textarea', isRequired: true },
    { label: 'Health Information', name: 'petsHealth', type: 'textarea', isRequired: true },
    { label: 'Favorite Things', name: 'favoriteThings', type: 'textarea', isRequired: true },
    { label: 'Idiosyncrasies', name: 'idioSyncrasies', type: 'textarea', isRequired: true },
    { label: 'Permission to take to vet?', name: 'vetPermission', type: 'textarea', isRequired: true },
  ];

  const sittingFields = [
    { label: 'Start Date and Time', name: 'startDateAndTime', type: 'datetime-local', isRequired: true },
    { label: 'End Date and Time', name: 'endDateAndTime', type: 'datetime-local', isRequired: true },
    { label: 'Special Requests', name: 'specialRequest', type: 'textarea', isRequired: true },
    { label: 'Alarm Information', name: 'alarmInfo', type: 'textarea', isRequired: true },
    { label: 'Miscellaneous Notes', name: 'miscNotes', type: 'textarea', isRequired: true },
    { label: 'Additional Notes', name: 'additionalNotes', type: 'textarea', isRequired: true },
  ];

  return (
    <div className="max-w-2xl mx-auto my-8 p-4 bg-[#f0f8ff] rounded-lg shadow-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
      <img 
        src={complimentarycard} 
        srcSet={`${complimentarycard} 400w, ${complimentarycard} 800w, ${complimentarycard} 1200w`} 
        sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 1200px"
        alt="Pampered Pets" 
        className="mt-10 rounded-full w-36 h-36 mx-auto animate-logo-spin-3d" 
      />
      
      <div className="text-center">
        <h1 className='text-2xl font-bold mt-12'>Booking Form</h1>
        <p className="mt-2">Welcome! Please fill out this short form to help us provide the best care for your pet. We've broken it down into simple steps for your convenience.</p>
      </div>
       
      <div className="w-full bg-gray-200 rounded-full mt-8 h-2.5 mb-4 relative">
        <div className="absolute flex justify-between w-full -top-2 px-2">
          {['Customer Information', 'Pet Information', 'Sitting Information', 'Review and Confirm', 'Thank You'].map((label, index) => (
            <div key={index} className="flex flex-col items-center w-1/5">
              <div
                className={`h-6 w-6 rounded-full flex items-center justify-center ${
                  step > index ? 'bg-[#40bfe0] text-white' : 'bg-gray-300 text-gray-600'
                }`}
              >
                {step > index ? '✔' : index + 1}
              </div>
              <span className="mt-1 w-16 xs:hidden sm:inline-block text-xs text-center">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {step === 5 ? (
        <div className="relative w-full text-center text-gray-800 mt-12 py-8 flex flex-col items-center justify-center pb-10 bg-white rounded-sm max-md:max-w-full">
          <h2 className="text-2xl font-semibold mb-4">Thank You for Your Booking!</h2>
          <p className="text-lg mb-6">Your pet sitting appointment has been confirmed.</p>
          <p className="text-md mb-4">We'll be in touch shortly with further details.</p>
          <div className="flex space-x-4">
            <Link to="/" className="text-[#40bfe0] hover:underline text-lg mt-4">
              Back to Home
            </Link>
            <button onClick={() => setStep(4)} className="text-[#40bfe0] hover:underline text-lg mt-4">
              View Booking Summary
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleNext}>
          {step === 1 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mt-20">Customer Information</h2>
              {renderFields(customerFields)}
              <div className="flex justify-between">
                <FormButton label="Back" onClick={handleBack} isDisabled={step === 1} />
                <FormButton label="Next" isDisabled={isNextDisabled} onClick={handleNext} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mt-20">Pet Information</h2>
              {renderFields(petFields)}
              <div className="flex justify-between">
                <FormButton label="Back" onClick={handleBack} />
                <FormButton label="Next" isDisabled={isNextDisabled} onClick={handleNext} />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mt-20">Sitting Information</h2>
              {renderFields(sittingFields)}
              <div className="flex justify-between">
                <FormButton label="Back" onClick={handleBack} />
                <FormButton label="Next" isDisabled={isNextDisabled} onClick={handleNext} />
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold mt-20">Review and Confirm</h2>
              <div className="border p-4 rounded-md bg-gray-100">
                <h3 className="text-lg font-semibold mb-4">Customer Information</h3>
                <p><strong>Name:</strong> {formData.customerName}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Cell Phone:</strong> {formData.cellPhone || 'N/A'}</p>
                <p><strong>Home Phone:</strong> {formData.homePhone || 'N/A'}</p>
                <p><strong>Home Address:</strong> {formData.homeAddress}</p>
                <p><strong>Emergency Contact Phone Number:</strong> {formData.emergencyContactNumber}</p>
                <p><strong>Work Phone:</strong> {formData.workPhone || 'N/A'}</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-4">Pet Information</h3>
                <p><strong>Pet's Name:</strong> {formData.petsName}</p>
                <p><strong>Pet's Age:</strong> {formData.petsAge}</p>
                <p><strong>Daily Routine:</strong> {formData.dailyRoutine}</p>
                <p><strong>Health Information:</strong> {formData.petsHealth}</p>
                <p><strong>Favorite Things:</strong> {formData.favoriteThings}</p>
                <p><strong>Idiosyncrasies:</strong> {formData.idioSyncrasies}</p>
                <p><strong>Permission to take to vet:</strong> {formData.vetPermission}</p>
                
                <h3 className="text-lg font-semibold mt-6 mb-4">Sitting Information</h3>
                <p><strong>Start Date and Time:</strong> {formData.startDateAndTime}</p>
                <p><strong>End Date and Time:</strong> {formData.endDateAndTime}</p>
                <p><strong>Special Requests:</strong> {formData.specialRequest}</p>
                <p><strong>Alarm Information:</strong> {formData.alarmInfo}</p>
                <p><strong>Miscellaneous Notes:</strong> {formData.miscNotes}</p>
                <p><strong>Additional Notes:</strong> {formData.additionalNotes}</p>
              </div>
              <div className="flex justify-between">
                <FormButton label="Back" onClick={handleBack} />
                <FormButton label="Submit" isDisabled={isNextDisabled} onClick={handleNext} />
              </div>
            </div>
          )}
        </form>
      )}

      {errorMessage && (
        <div className="mt-4 text-red-500 font-semibold text-center">
          {errorMessage}
          </div>
      )}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md shadow-lg">
            <p className="text-lg font-semibold">Submitting your booking...</p>
            <div className="mt-4 w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;