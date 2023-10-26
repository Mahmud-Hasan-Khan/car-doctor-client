import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ServiceCard from "../ServiceCard/ServiceCard";

const ServiceArea = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await fetch('http://localhost:3000/services');
                if (!res.ok) {
                    throw new Error('Network response is not ok');
                }
                const data = await res.json();
                setServices(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        })();
    }, [])

    console.log(services);

    return (
        <div>
            <SectionTitle subheading={"Service"} heading={"Our Service Area"} info={`The majority have suffered alteration in some form, by injected humour, or randomised 
            words which don't look even slightly believable`} ></SectionTitle>
            <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {
                        services.map(service => <ServiceCard key={service._id} service={service} ></ServiceCard>)
                    }
                </div>
                <div className="flex justify-center mx-auto mb-10">
                    <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] border hover:border-[#FF3811] ">More Services</button>
                </div>
            </>
        </div>
    );
};

export default ServiceArea;