import delivery from "../images/delivery-cravings.png";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="flex justify-center items-center flex-wrap p-5 sm:px-36 sm:justify-between md:justify-center xl1:justify-between">

            <div className="flex flex-col justify-center items-center gap-7 sm:gap-10">

                <div className="flex flex-col justify-center text-center items-center">
                    <h1 className="font-bold font-Dancing text-[80px] sm:text-[150px] text-orange-600 ">Cravings</h1>
                    <h1 className="font-Montserrat text-[20px] sm:text-[40px] text-orange-600">Khao Jee Bharke!</h1>
                    <h1 className="font-Montserrat italic text-orange-600 text-[13px] sm:text-[20px]">Delivering your desired food right to your doorstep.</h1>
                </div>
                <div>
                    <Link to="/restaurants"><button className="border-2 font-Montserrat border-orange-400 text-orange-600 py-1 w-70 px-10 rounded-lg justify-center items-center hover:bg-orange-600 hover:text-white" >Find Your Favorite Food!</button></Link>
                </div>
            </div>


            <div>
                <img src={delivery} className="sm:pr-11 pt-5"/>
            </div>


        </div>
    )
}
export default Home;


// import delivery from "../images/delivery-cravings.png";
// import { Link } from "react-router-dom";

// const Home = () => {
//     return (
//         <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-0 items-center">
//             <div className="sm:mr-8 mb-8 sm:mb-0 text-center">
//                 <h1 className="font-bold text-4xl sm:text-6xl text-orange-600 mb-4">Cravings</h1>
//                 <h2 className="font-Montserrat text-xl sm:text-2xl text-orange-600 mb-4">Khao Jee Bharke!</h2>
//                 <p className="font-Montserrat italic text-orange-600 mb-4">Delivering your desired food right to your doorstep.</p>
//                 <Link to="/restaurants">
//                     <button className="border-2 border-orange-400 text-orange-600 hover:bg-orange-600 hover:text-white py-2 px-6 rounded-lg">
//                         Find Your Favorite Food!
//                     </button>
//                 </Link>
//             </div>
//             <div>
//                 <img src={delivery} className="w-full sm:w-auto" alt="Delivery" />
//             </div>
//         </div>
//     );
// };

// export default Home;
