
// 
// 

const AboutUs = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                    <img src="https://i.ibb.co/3S1DfV3/person.jpg" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/5BHZBzj/parts.jpg" className="w-1/2 rounded-lg shadow-2xl absolute -bottom-16 right-20 border-8 border-white" />
                </div>
                <div className="lg:w-1/2 space-y-5 pr-20">
                    <h4 className="text-xl text-[#FF3811] font-bold">About Us</h4>
                    <h1 className="text-5xl font-bold text-[#151515] ">We are qualified <br /> & of experience <br /> in this field</h1>
                    <div className="text-[#737373]">
                        <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                        <p>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                    <button className="bg-[#FF3811] border rounded-md border-[#FF3811] px-4 py-2 text-white ">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;