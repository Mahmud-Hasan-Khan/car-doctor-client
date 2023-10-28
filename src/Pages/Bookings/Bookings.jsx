import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import axios from "axios";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookingData, setBookingData] = useState([]);

    const url = `http://localhost:3000/bookings?email=${user.email}`

    useEffect(() => {
        // use Axios
        axios.get(url, { withCredentials: true })
            .then(res => {
                setBookingData(res.data);
            })
        // fetch(`http://localhost:3000/bookings?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         setBookingData(data)
        //     })
    }, [url]);

    console.log(bookingData);

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/bookings/${id}`,
                    {
                        method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {

                            Swal.fire(
                                'Done!',
                                'Your data deleted successful!',
                                'success'
                            )

                            const remaining = bookingData.filter(updateBooking => updateBooking._id !== id);
                            setBookingData(remaining);
                        }
                    })
            }
        })

    }

    const handleUpdate = id => {
        console.log(id);
        fetch(`http://localhost:3000/bookings/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ status: 'confirm' })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Done!',
                        'Your data successfully updated',
                        'success'
                    )
                    const remaining = bookingData.filter(booking => booking._id !== id);
                    const updated = bookingData.find(booking => booking._id === id);
                    updated.status = 'confirm';
                    const newBookings = [updated, ...remaining];
                    setBookingData(newBookings);
                }
            })
    }

    return (
        <div>
            booking: {bookingData.length}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    Delete
                                </label>
                            </th>
                            <th>Service Name </th>
                            <th>Client Name</th>
                            <th>Client Email</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData.map(booking => <BookingRow key={booking._id} booking={booking} handleDelete={handleDelete} handleUpdate={handleUpdate}></BookingRow>)}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Bookings;