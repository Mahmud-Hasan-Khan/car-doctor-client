import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer p-10 bg-black">
            <aside>
                <Link to='/'><img src="https://i.ibb.co/NyJm1By/Navbar-Logo.png" alt="" /></Link>
                <p className="text-[#cecaca]">Car Doctor<br />Edwin Diaz is a software and web<br />technologies engineer, a life coach<br />trainer who is also a serial .</p>
            </aside>
            <nav>
                <header className="text-xl font-semibold text-white">Services</header>
                <Link className="text-[#cecaca] hover:underline">Branding</Link>
                <Link className="text-[#cecaca] hover:underline">Design</Link>
                <Link className="text-[#cecaca] hover:underline">Marketing</Link>
                <Link className="text-[#cecaca] hover:underline">Advertisement</Link>
            </nav>
            <nav>
                <header className="text-xl font-semibold text-white">Company</header>
                <Link className="text-[#cecaca] hover:underline">About us</Link>
                <Link className="text-[#cecaca] hover:underline">Contact</Link>
                <Link className="text-[#cecaca] hover:underline">Jobs</Link>
                <Link className="text-[#cecaca] hover:underline">Press kit</Link>
            </nav>
            <nav>
                <header className="text-xl font-semibold text-white">Legal</header>
                <Link className="text-[#cecaca] hover:underline">Terms of use</Link>
                <Link className="text-[#cecaca] hover:underline">Privacy policy</Link>
                <Link className="text-[#cecaca] hover:underline">Cookie policy</Link>
            </nav>
        </footer>
    );
};

export default Footer;