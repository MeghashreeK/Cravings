import GetUserData from "./GetUserData";
import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import { Link } from "react-router-dom";
const About = () => {
    return (
        <div className="flex flex-col min-h-screen">

            <div className="flex-grow">
                <h1>About</h1>
                <GetUserData />
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



