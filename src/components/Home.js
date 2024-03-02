import delivery from "../images/delivery-cravings.png";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="flex justify-between px-36 items-center">
            <div className="flex flex-col gap-10 items-center">
                <div className="flex flex-col items-center">
                    <h1 className="font-bold font-Dancing text-[150px] text-orange-600 ">Cravings</h1>
                    <h1 className="font-Montserrat text-[40px] text-orange-600">Khao Jee Bharke!</h1>
                    <h1 className="font-Montserrat italic text-orange-600">Delivering your desired food right to your doorstep.</h1>
                </div>
                <div>
                    <Link to="/restaurants"><button className="border-2 font-Montserrat border-orange-400 text-orange-600 h-8 w-70 px-10 rounded-lg justify-center items-center hover:bg-orange-600 hover:text-white" >Find Your Favorite Food!</button></Link>
                </div>
            </div>
            <div>
                <img src={delivery} className="pr-11 pt-5"/>
            </div>
        </div>
    )
}
export default Home;