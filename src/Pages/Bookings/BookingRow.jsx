
const BookingRow = ({ booking }) => {
    const { customerName, img, price, date, email, service } = booking ? booking : {};
    return (

        <tr>
            <th>
                <button className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold"> {service} </div>
                        <div className="text-sm opacity-50">{date} </div>
                    </div>
                </div>
            </td>
            <td>
                {customerName}
            </td>
            <td>{email} </td>
            <td>{price} </td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;