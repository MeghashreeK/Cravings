import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="flex flex-col gap-7 min-h-screen">
            <div className="flex-grow">
                <h1>Contact</h1>
                <input type="text" placeholder="name" className="border-2" />
                <input type="text" placeholder="message" className="border-2" />
                <button className="border-2 rounded-lg w-20">Submit</button>
            </div>

            <div className="flex bg-black h-32 justify-center items-center sm:h-16">
                <div className="flex gap-5 sm:gap-8">
                    <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
                    <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
                    <h2 className="text-white">kundermeghashree279@gmail.com</h2>
                </div>
            </div>

        </div>
    );
}
export default Contact;
