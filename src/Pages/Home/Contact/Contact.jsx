import timeImg from "../../../assets/Timetable.png"
import callImg from "../../../assets/call.png"
import addressImg from "../../../assets/address.png"
const Contact = () => {
    return (
        <div className="bg-black text-[#FFF] flex lg:flex-row flex-col gap-6 lg:gap-0 items-center justify-around mb-10 rounded-lg py-24">
            <div className="flex items-center justify-center gap-5">
                <img src={timeImg} alt="" />
                <div >
                    <p className="text-base font-medium">We are open monday-friday</p>
                    <h5 className="text-2xl font-bold">7:00 am - 9:00 pm</h5>
                </div>
            </div>
            <div className="flex items-center justify-center gap-5">
                <img src={callImg} alt="" />
                <div >
                    <p className="text-base font-medium">Have a question?</p>
                    <h5 className="text-2xl font-bold">+2546 251 2658</h5>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5">
                <img src={addressImg} alt="" />
                <div >
                    <p className="text-base font-medium">Need a repair? our address</p>
                    <h5 className="text-2xl font-bold">Liza Street, New York</h5>
                </div>
            </div>
        </div>
    );
};

export default Contact;