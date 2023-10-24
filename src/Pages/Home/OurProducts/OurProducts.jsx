import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { AiFillStar } from 'react-icons/ai';

const OurProducts = () => {
    return (
        <div>
            <SectionTitle subheading="Popular Products" heading="Browse Our Products" info="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                {/* card-1 */}
                <div className="card bg-base-100 border rounded-xl">
                    <figure className="p-5">
                        <img src="https://i.ibb.co/fnWCqkj/1.png" alt="Service Name" className="rounded-xl w-full h-[210px] bg-[#F3F3F3] " />
                    </figure>
                    <div className="p-5 text-center">
                        <p className="flex justify-center text-[#FF912C] text-xl"> <AiFillStar /><AiFillStar /><AiFillStar /> <AiFillStar /><AiFillStar /></p>
                        <h2 className=" text-2xl text-[#444] font-bold">Car Engine Plug</h2>
                        <p className=' text-xl font-semibold text-[#FF3811]'>$20.00</p>

                    </div>
                </div>
                {/* card-2 */}
                <div className="card bg-base-100 border rounded-xl">
                    <figure className="p-5">
                        <img src="https://i.ibb.co/cQz3w0L/2.png" alt="Service Name" className="rounded-xl w-full h-[210px] bg-[#F3F3F3] " />
                    </figure>
                    <div className="p-5 text-center">
                        <p className="flex justify-center text-[#FF912C] text-xl"> <AiFillStar /><AiFillStar /><AiFillStar /> <AiFillStar /><AiFillStar /></p>
                        <h2 className=" text-2xl text-[#444] font-bold">Car Air Filter</h2>
                        <p className=' text-xl font-semibold text-[#FF3811]'>$25.00</p>

                    </div>
                </div>
                {/* card-3 */}
                <div className="card bg-base-100 border rounded-xl">
                    <figure className="p-5">
                        <img src="https://i.ibb.co/XLGsVjS/3.png" alt="Service Name" className="rounded-xl w-full h-[210px] bg-[#F3F3F3] " />
                    </figure>
                    <div className="p-5 text-center">
                        <p className="flex justify-center text-[#FF912C] text-xl"> <AiFillStar /><AiFillStar /><AiFillStar /> <AiFillStar /><AiFillStar /></p>
                        <h2 className=" text-2xl text-[#444] font-bold">Cools Led Light</h2>
                        <p className=' text-xl font-semibold text-[#FF3811]'>$20.00</p>

                    </div>
                </div>
                {/* card-4 */}
                <div className="card bg-base-100 border rounded-xl">
                    <figure className="p-5">
                        <img src="https://i.ibb.co/TPFfr7Q/4.png" alt="Service Name" className="rounded-xl w-full h-[210px] bg-[#F3F3F3] " />
                    </figure>
                    <div className="p-5 text-center">
                        <p className="flex justify-center text-[#FF912C] text-xl"> <AiFillStar /><AiFillStar /><AiFillStar /> <AiFillStar /><AiFillStar /></p>
                        <h2 className=" text-2xl text-[#444] font-bold">Car Engine Plug</h2>
                        <p className=' text-xl font-semibold text-[#FF3811]'>$20.00</p>

                    </div>
                </div>
                {/* card-5 */}
                <div className="card bg-base-100 border rounded-xl">
                    <figure className="p-5">
                        <img src="https://i.ibb.co/hgbg4rD/5.png" alt="Service Name" className="rounded-xl w-full h-[210px] bg-[#F3F3F3] " />
                    </figure>
                    <div className="p-5 text-center">
                        <p className="flex justify-center text-[#FF912C] text-xl"> <AiFillStar /><AiFillStar /><AiFillStar /> <AiFillStar /><AiFillStar /></p>
                        <h2 className=" text-2xl text-[#444] font-bold">Car Engine Plug</h2>
                        <p className=' text-xl font-semibold text-[#FF3811]'>$20.00</p>

                    </div>
                </div>
                {/* card-6 */}
                <div className="card bg-base-100 border rounded-xl">
                    <figure className="p-5">
                        <img src="https://i.ibb.co/vhf0TPN/6.png" alt="Service Name" className="rounded-xl w-full h-[210px] bg-[#F3F3F3] " />
                    </figure>
                    <div className="p-5 text-center">
                        <p className="flex justify-center text-[#FF912C] text-xl"> <AiFillStar /><AiFillStar /><AiFillStar /> <AiFillStar /><AiFillStar /></p>
                        <h2 className=" text-2xl text-[#444] font-bold">Car Engine Plug</h2>
                        <p className=' text-xl font-semibold text-[#FF3811]'>$20.00</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;