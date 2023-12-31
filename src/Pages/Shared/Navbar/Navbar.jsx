import { Link, NavLink } from "react-router-dom";
import navLogoImg from "../../../../src/assets/icon/logo.svg"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navItems =
        <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/service'>Service</NavLink></li>
            <li><NavLink to='/blog'>Blog</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            {user?.email && <li><NavLink to='/bookings'>My Bookings</NavLink></li>}
        </>

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'><img className="w-3/4" src={navLogoImg} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] border hover:border-[#FF3811] ">Appointment</button>

                {user?.email ? <button onClick={handleLogout} className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] border hover:border-[#FF3811] ">Logout</button> : <button className="btn btn-outline text-[#FF3811] hover:bg-[#FF3811] border hover:border-[#FF3811] "> <Link to='/login' >Login</Link> </button>}
            </div>
        </div>
    );
};

export default Navbar;