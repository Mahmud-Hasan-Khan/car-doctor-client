import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";




const CheckOut = () => {

    const data = useLoaderData();
    console.log(data);
    const { user } = useContext(AuthContext);
    console.log(user);


    const handleCheckoutService = (e) => {
        e.preventDefault();
        console.log('clicked');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const date = form.date.value;
        const price = form.price.value;
        console.log(name, email, price, date);

        const bookingInfo = {
            customerName: name,
            email,
            date,
            price: price,
            service: data.title,
            service_id: data._id,
            img: data.img
        }
        console.log(bookingInfo);

        fetch('http://localhost:3000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })


    }


    return (
        <div>
            <div className="bg-[#F3F3F3] p-24 rounded-lg">
                <h1 className="text-3xl font-medium text-center">Your have Selected : {data.title}</h1>
                <form onSubmit={handleCheckoutService} className="card-body space-y-6">
                    <div className="flex items-center gap-6">
                        <div className="form-control w-1/2">
                            <input type="text" name="name" placeholder="Your Name" defaultValue={user?.displayName} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <input type="date" name="date" placeholder="Date" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="form-control w-1/2">
                            <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
                        </div>
                        <div className="form-control w-1/2">
                            <input type="text" name="price" placeholder="Due Amount" defaultValue={'$' + data.price} className="input input-bordered" required />
                        </div>
                    </div>
                    {/* <div className="form-control">
                        <textarea name="textArea" id="" cols="50" rows="10" placeholder="Your Message" className="input input-bordered" required></textarea>
                    </div> */}
                    <div className="form-control mt-6">
                        <button className="btn bg-[#FF3811] text-white hover:bg-[#e13b38fc] ">Order Confirm</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CheckOut;