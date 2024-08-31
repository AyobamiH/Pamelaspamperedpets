/**
 * This code was generated by Builder.io.
 */
import React, { useState, useEffect } from "react";
import bookingService from "../services/bookingService";
import BookingRow from "./BookingRow";
import ExpandedBookingDetails from "./ExpandedBookingDetails";
import EditBookingForm from "./EditBookingForm";

const useBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    bookingService
      .getAllBookings()
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
        await bookingService.removeABooking(id);
        setBookings(bookings.filter((booking) => booking._id !== id));
      } catch (error) {
        console.error("Error deleting booking:", error);
      }
    }
  };

  const handleUpdate = (id) => {
    setEditingBookingId(id);
  };

  const handleSaveUpdate = async (updatedBooking) => {
    try {
      const response = await bookingService.updateBooking(
        updatedBooking._id,
        updatedBooking
      );
      setBookings(
        bookings.map((booking) =>
          booking._id === updatedBooking._id ? response.data : booking
        )
      );
      setEditingBookingId(null);
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
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Start Date and Time
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              End Date and Time
            </th>
            <th className="relative px-6 py-3">
              <span className="sr-only">Expand</span>
            </th>
            <th className="relative px-6 py-3">
              <span className="sr-only">Actions</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((booking) => (
            <React.Fragment key={booking._id}>
              <BookingRow
                booking={booking}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
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
                      onSave={handleSaveUpdate}
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
