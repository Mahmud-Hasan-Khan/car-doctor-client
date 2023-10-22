import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer"
import Navbar from "../Pages/Shared/Navbar/Navbar"
const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
            {/* <Footer className="mt-auto"></Footer> */}
        </div>
    );
};

export default MainLayout;