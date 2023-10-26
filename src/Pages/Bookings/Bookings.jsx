import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import BookingRow from "./BookingRow";

const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookingData, setBookingData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/bookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setBookingData(data)
            })
    }, [user?.email]);

    console.log(bookingData);

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
                        {bookingData.map(booking => <BookingRow key={booking._id} booking={booking} ></BookingRow>)}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Bookings;