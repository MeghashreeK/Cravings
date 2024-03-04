const Contact=()=>{
    return(
        <div className="flex flex-col w-40 gap-7">
        <h1>Contact</h1>
        <input type="text" placeholder="name" className="border-2"/>
        <input type="text" placeholder="message" className="border-2"/>
        <button className="border-2 rounded-lg w-20">Submit</button>

    </div>
    );
}
export default Contact;
