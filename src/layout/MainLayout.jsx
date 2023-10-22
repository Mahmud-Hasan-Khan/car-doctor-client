import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <Footer className="mt-auto"></Footer>
        </div>
    );
};

export default MainLayout;