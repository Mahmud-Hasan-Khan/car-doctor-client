import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data);

    return (
        <div>
            CheckOut{data.title}
        </div>
    );
};

export default CheckOut;