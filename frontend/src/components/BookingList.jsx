
// import React, { useState, useEffect } from 'react';
// import bookingService from '../services/bookingService';

// const BookingList = () => {
//   const [bookings, setBookings] = useState([]);
//   const [expandedBookingId, setExpandedBookingId] = useState(null);

//   useEffect(() => {
//     bookingService.getAllBookings()
//       .then(fetchedBookings => {
//         setBookings(fetchedBookings);
//         console.log(fetchedBookings);
//       })
//       .catch(error => {
//         console.error('Error fetching bookings:', error);
//       });
//   }, []);

//   const handleDelete = (id) => {
//     console.log('ID from handle delete from bookslist', id);
//     bookingService.removeABooking(id)
//       .then(() => {
//         setBookings(bookings.filter(booking => booking._id !== id));
//       })
//       .catch(error => {
//         console.error('Error deleting booking:', error);
//       });
//   };

//   const toggleExpand = (id) => {
//     console.log('ID from togggleexpanded booking service: ', id);
//     setExpandedBookingId(expandedBookingId === id ? null : id);
//   };

//   const handleUpdate = (id) => {
//     const bookingToUpdate = bookings.find(booking => booking._id === id);
//     if (bookingToUpdate) {
//       // Implement your update logic here
//       console.log('Updating booking:', bookingToUpdate);
//     }
//   };

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date and Time</th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date and Time</th>
//             <th scope="col" className="relative px-6 py-3"><span className="sr-only">Expand</span></th>
//             <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {bookings.map((booking) => (
//             <React.Fragment key={booking._id}>
//               <tr>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.customerName}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.startDateAndTime}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.endDateAndTime}</td>
//                 <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                   <button onClick={() => toggleExpand(booking._id)} className="text-indigo-600 hover:text-indigo-900">Expand</button>
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                   <button onClick={() => handleUpdate(booking._id)} className="text-green-600 hover:text-green-900 mr-2">Update</button>
//                   <button onClick={(e) => {e.stopPropagation(); handleDelete(booking._id);}} className="text-red-600 hover:text-red-900">Delete</button>
//                 </td>
//               </tr>
//               {expandedBookingId === booking._id && (
//                 <tr>
//                   <td colSpan="5" className="px-6 py-4">
//                     <div className="bg-gray-50 p-4 rounded-lg">
//                       <p><strong>Booking ID:</strong> {booking._id}</p>
//                       <p><strong>Customer Name:</strong> {booking.customerName}</p>
//                       <p><strong>Email:</strong> {booking.email}</p>
//                       <p><strong>Cell Phone:</strong> {booking.cellPhone}</p>
//                       <p><strong>Home Phone:</strong> {booking.homePhone}</p>
//                       <p><strong>Home Address:</strong> {booking.homeAddress}</p>
//                       <p><strong>Emergency Contact Number:</strong> {booking.emergencyContactNumber}</p>
//                       <p><strong>Work Phone:</strong> {booking.workPhone}</p>
//                       <p><strong>Pet's Name:</strong> {booking.petsName}</p>
//                       <p><strong>Pet's Age:</strong> {booking.petsAge}</p>
//                       <p><strong>Daily Routine:</strong> {booking.dailyRoutine}</p>
//                       <p><strong>Health Information:</strong> {booking.petsHealth}</p>
//                       <p><strong>Favorite Things:</strong> {booking.favoriteThings}</p>
//                       <p><strong>Idiosyncrasies:</strong> {booking.idioSyncrasies}</p>
//                       <p><strong>Permission to take to vet:</strong> {booking.vetPermission}</p>
//                       <p><strong>Special Requests:</strong> {booking.specialRequest}</p>
//                       <p><strong>Alarm Information:</strong> {booking.alarmInfo}</p>
//                       <p><strong>Miscellaneous Notes:</strong> {booking.miscNotes}</p>
//                       <p><strong>Additional Notes:</strong> {booking.additionalNotes}</p>
//                       <p><strong>Start Date and Time:</strong> {booking.startDateAndTime}</p>
//                       <p><strong>End Date and Time:</strong> {booking.endDateAndTime}</p>
//                     </div>
//                   </td>
//                 </tr>
//               )}
//             </React.Fragment>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BookingList;

import React, { useState, useEffect } from 'react';
import bookingService from '../services/bookingService';

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    bookingService.getAllBookings()
      .then(fetchedBookings => {
        setBookings(fetchedBookings);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching bookings');
        setLoading(false);
      });
  }, []);

  return { bookings, setBookings, loading, error };
};

const BookingRow = ({ booking, onDelete, onUpdate, onToggleExpand, isExpanded }) => (
  <>
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{booking.customerName}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.startDateAndTime}</td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{booking.endDateAndTime}</td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button onClick={() => onToggleExpand(booking._id)} className="text-indigo-600 hover:text-indigo-900">
          {isExpanded ? 'Collapse' : 'Expand'}
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button onClick={() => onUpdate(booking._id)} className="text-green-600 hover:text-green-900 mr-2">Update</button>
        <button onClick={() => onDelete(booking._id)} className="text-red-600 hover:text-red-900">Delete</button>
      </td>
    </tr>
    {isExpanded && <ExpandedBookingDetails booking={booking} />}
  </>
);

const ExpandedBookingDetails = ({ booking }) => (
  <tr>
    <td colSpan="5" className="px-6 py-4">
      <div className="bg-gray-50 p-4 rounded-lg">
        <p><strong>Booking ID:</strong> {booking._id}</p>
        {/* Additional details... */}
        <p><strong>Email:</strong> {booking.email}</p>
        <p><strong>Cell Phone:</strong> {booking.cellPhone}</p>
        {/* Add more fields as needed */}
      </div>
    </td>
  </tr>
);

const BookingList = () => {
  const { bookings, setBookings, loading, error } = useBookings();
  const [expandedBookingId, setExpandedBookingId] = useState(null);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        setBookings(bookings.filter(booking => booking._id !== id)); // Optimistic update
        await bookingService.removeABooking(id);
      } catch (error) {
        console.error('Error deleting booking:', error);
      }
    }
  };

  const handleUpdate = (id) => {
    const bookingToUpdate = bookings.find(booking => booking._id === id);
    if (bookingToUpdate) {
      // Implement your update logic here
      console.log('Updating booking:', bookingToUpdate);
    }
  };

  const toggleExpand = (id) => {
    setExpandedBookingId(expandedBookingId === id ? null : id);
  };

  if (loading) return <div>Loading bookings...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date and Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">End Date and Time</th>
            <th className="relative px-6 py-3"><span className="sr-only">Expand</span></th>
            <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <BookingRow
              key={booking._id}
              booking={booking}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
              onToggleExpand={toggleExpand}
              isExpanded={expandedBookingId === booking._id}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;

