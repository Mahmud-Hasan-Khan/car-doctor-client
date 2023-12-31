import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { _id, img, title, price } = service ? service : {};
    return (
        <div className="card bg-base-100 border rounded-xl">
            <figure className="p-5">
                <img src={img} alt="Service Name" className="rounded-xl w-full h-[210px] " />
            </figure>
            <div className="p-5">
                <h2 className=" text-2xl text-[#444] font-bold mb-5"> {title} </h2>
                <div className=' text-xl font-semibold text-[#FF3811] flex items-center justify-between'>
                    <p>Price: ${price} </p>
                    <div className="tooltip" data-tip="Check Out">
                        <Link to={`/checkout/${_id}`}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg> </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object.isRequired
}

export default ServiceCard;