import React, { useState, useEffect } from "react";
import BookingRow from "./BookingRow";
import ExpandedBookingDetails from "./ExpandedBookingDetails";
import EditBookingForm from "./EditBookingForm";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://backend-c469.onrender.com/bookings/getall")
      .then((response) => response.json())
      .then((fetchedBookings) => {
        setBookings(fetchedBookings);
        setLoading(false);
      })
      .catch((error) => {
        setError("Error fetching bookings");
        setLoading(false);
      });
  }, []);

  return { bookings, setBookings, loading, error };
};

const BookingList = () => {
  const { bookings, setBookings, loading, error } = useBookings();
  const [expandedBookingId, setExpandedBookingId] = useState(null);
  const [editingBookingId, setEditingBookingId] = useState(null);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this booking?")) {
      try {
        await fetch(`https://backend-c469.onrender.com/bookings/delete/${id}`, {
          method: "DELETE",
        });
        setBookings(bookings.filter((booking) => booking._id !== id));
      } catch (error) {
        console.error("Error deleting booking:", error);
      }
    }
  };

  const handleUpdate = (id) => {
    setEditingBookingId(id); // Set the ID of the booking being edited
  };

  const handleSaveUpdate = async (updatedBooking) => {
    try {
      const response = await fetch(
        `https://backend-c469.onrender.com/bookings/update/${updatedBooking._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedBooking),
        }
      );

      if (!response.ok) {
        throw new Error("Error updating booking");
      }

      const data = await response.json();

      // Update the state with the new data
      setBookings(
        bookings.map((booking) =>
          booking._id === updatedBooking._id ? data : booking
        )
      );

      setEditingBookingId(null); // Close the edit form
    } catch (error) {
      console.error("Error updating booking:", error);
    }
  };

  const toggleExpand = (id) => {
    setExpandedBookingId(expandedBookingId === id ? null : id);
  };

  if (loading) return <div>Loading bookings...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="overflow-x-auto mt-24">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Start
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              End
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Expand</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <React.Fragment key={booking._id}>
              <BookingRow
                booking={booking}
                onDelete={handleDelete}
                onUpdate={() => handleUpdate(booking._id)} // Pass the booking ID
                onToggleExpand={toggleExpand}
                isExpanded={expandedBookingId === booking._id}
              />
              {expandedBookingId === booking._id && (
                <ExpandedBookingDetails booking={booking} />
              )}
              {editingBookingId === booking._id && (
                <tr>
                  <td colSpan="5">
                    <EditBookingForm
                      booking={booking}
                      onSave={handleSaveUpdate} // Pass handleSaveUpdate to form
                      onCancel={() => setEditingBookingId(null)}
                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingList;
