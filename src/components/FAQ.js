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
        const data = await fetch("https://thingproxy.freeboard.io/fetch/https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fsupport%2Fissues%2Ffaq%3F");
        const json = await data.json();
        console.log(json);
        setFaqData(json.data.issues.data);
    }

    return (
        <div className="flex flex-col p-5 h-screen">
            <div className="flex flex-col gap-5 ">
                {faqData.slice(3,-1).map((data, index) => <div key={data.id} className={`flex flex-col ${index!==faqData.length - 4 ? 'border-b-2 border-b-gray-200' : ''} px-3 py-6`} onClick={() => showAnswer(index)}>

                    <div className="flex justify-between w-full font-Montserrat font-medium">
                        <h1>{data.title.replace(/Swiggy/gi, 'Cravings')}</h1>
                        {indexOfBox==index && answer === true ? <img className="h-4" src={uparrow} alt="uparrow" /> : <img className="h-4" src={downarrow} alt="downarrow" />}
                    </div>
                    <div className="flex py-1 text-gray-400">
                        {
                           indexOfBox==index && answer && <p>{data.description.replace(/Swiggy/gi, 'Cravings')}</p>
                        }
                    </div>

                </div>)}
            </div>
        </div>
    );
}
export default FAQ;

