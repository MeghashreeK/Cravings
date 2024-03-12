// import linkedin from "../images/linkedin-logo.png";
// import github from "../images/github-logo.png";
// import { Link } from "react-router-dom";
// import downarrow from "../images/down-arrow.png";
// import { useState } from "react";
// import uparrow from "../images/up-arrow.png";

// const FAQ = () => {

//     const [answer, setAnswer] = useState(false);
//     const showAnswer = () => {
//         setAnswer(!answer);
//     }

//     return (
//         <div className="flex flex-col min-h-screen">
//             <div className="flex flex-col flex-grow gap-5 p-5">
//                 <div className="flex flex-col border-b-2 border-b-gray-200 px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//                 <div className="flex flex-col border-b-2 border-b-gray-200 px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//                 <div className="flex flex-col border-b-2 border-b-gray-200 px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//                 <div className="flex flex-col border-b-2 border-b-gray-200 px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//                 <div className="flex flex-col border-b-2 border-b-gray-200 px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//                 <div className="flex flex-col border-b-2 border-b-gray-200 px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//                 <div className="flex flex-col border-b-2 border-b-gray-200 px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//                 <div className="flex flex-col border-b-2 border-b-gray-200 px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//                 <div className="flex flex-col border-b-2 border-b-gray-200 px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//                 <div className="flex flex-col px-3 py-6" onClick={() => showAnswer()}>

//                     <div className="flex justify-between w-full">
//                         <h1>What is Swiggy Customer Care Number?</h1>
//                         {answer === false ? <img src={downarrow} alt="downarrow" /> : <img src={uparrow} alt="uparrow" />}
//                     </div>

//                     <div className="flex py-1">
//                         {answer && (<p>We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on support@swiggy.in

//                             Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>)}
//                     </div>

//                 </div>
//             </div>

//             <div className="flex bg-black h-32 justify-center items-center sm:h-16">
//                 <div className="flex gap-5 sm:gap-8">
//                     <Link to="https://www.linkedin.com/in/meghashree-kunder-017166288/"><img className="w-8 h-8" src={linkedin} /></Link>
//                     <Link to="https://github.com/MeghashreeK"><img className="w-8 h-8" src={github} /></Link>
//                 </div>
//             </div>

//         </div>
//     );
// }


// export default FAQ;



import linkedin from "../images/linkedin-logo.png";
import github from "../images/github-logo.png";
import { Link } from "react-router-dom";
import downarrow from "../images/down-arrow.png";
import { useEffect, useState } from "react";
import uparrow from "../images/up-arrow.png";
const FAQ = () => {

    const [answer, setAnswer] = useState(false);
    const [indexOfBox, setIndexOfBox] = useState([0]);

    const showAnswer = (index) => {
        setAnswer(!answer);
        setIndexOfBox(index);
    }

    const [faqData, setFaqData] = useState([]);

    useEffect(() => { fetchFaqData() }, []);

    const fetchFaqData = async () => {
        const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fsupport%2Fissues%2Ffaq%3F");
        const json = await data.json();
        console.log(json);
        setFaqData(json.data.issues.data);

    }

    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col flex-grow gap-5 p-5">
                {faqData.slice(3,-1).map((data, index) => <div key={data.id} className={`flex flex-col ${index!==faqData.length - 4 ? 'border-b-2 border-b-gray-200' : ''} px-3 py-6`} onClick={() => showAnswer(index)}>

                    <div className="flex justify-between w-full font-Montserrat font-medium">
                        <h1>{data.title}</h1>
                        {indexOfBox==index && answer === true ? <img src={uparrow} alt="uparrow" /> : <img src={downarrow} alt="downarrow" />}
                    </div>
                    <div className="flex py-1 text-gray-400">
                        {
                           indexOfBox==index && answer && <p>{data.description}</p>
                        }
                    </div>

                </div>)}

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
export default FAQ;

