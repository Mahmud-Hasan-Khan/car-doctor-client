import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner"
import Contact from "./Contact/Contact";
import OurProducts from "./OurProducts/OurProducts";
import ServiceArea from "./ServiceArea/ServiceArea";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ServiceArea></ServiceArea>
            <Contact></Contact>
            <OurProducts></OurProducts>
        </div>
    );
};

export default Home;