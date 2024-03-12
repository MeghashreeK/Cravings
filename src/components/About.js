import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import { Link } from "react-router-dom";
import resimage from "../images/restaurantfood.jpg";
const About = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <div className="flex flex-col flex-grow px-5 justify-center">
                <div className="flex gap-8">
                    <img className="w-5/12 border-8 border-orange-500 rounded-[50%]" src={resimage} alt="food image" />
                    <div className="flex flex-col gap-5">
                    <h1 className="text-6xl font-Dancing font-bold text-orange-500">Anytime, Anywhere..</h1>
                    <h1 className=" font-Montserrat">Welcome to Cravings, where our journey began with a passion for revolutionizing the way people experience food. Established in [Year], we set out with a clear mission: to bring convenience, quality, and satisfaction to every doorstep. Our commitment to excellence is reflected in our stringent quality and safety standards, ensuring that every meal delivered meets the highest expectations. At the heart of our service is a customer-centric approach, where we prioritize your needs, preferences, and convenience in every order. With a diverse range of restaurant partners, we offer a culinary journey that celebrates the flavors of local and international cuisines. Powered by cutting-edge technology and innovation, our platform provides seamless ordering experiences and personalized recommendations. Beyond business, we are dedicated to social responsibility, actively supporting local communities and promoting sustainable practices. Our team is composed of industry experts and passionate individuals who drive our vision forward with creativity and dedication. But don't just take our word for it—hear from our satisfied customers and restaurant partners who have experienced the [Food Delivery App Name] difference firsthand. We invite you to join us on this culinary adventure and discover why we're more than just a food delivery app—we're a partner in creating memorable dining experiences. Contact us today to learn more about our services or to share your feedback—we're always here to serve you.</h1>
                    </div>
                </div>
            </div>

            <div className="flex bg-black h-32 justify-center items-center sm:h-16">
                <div className="flex gap-5 sm:gap-8">
                    <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
                    <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
                </div>
            </div>


        </div>

    );
}

export default About;



