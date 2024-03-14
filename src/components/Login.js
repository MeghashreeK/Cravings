import { useState } from "react";

const Login = () => {

    return (
            <div className="flex justify-center mt-32">
                <div className="flex flex-col items-center rounded-lg ">

                    <h1 className="font-bold font-Dancing text-[30px] sm:text-[50px] text-orange-500 ">Welcome Back</h1>

                    <div className="flex flex-col gap-5 items-center">
                        <input className="border-2 border-orange-500 rounded-xl w-full placeholder:p-2 py-[5px]" placeholder="Your email" />
                        <input className="border-2 border-orange-500 rounded-xl w-full placeholder:p-2 py-[5px]" placeholder="Your password" />
                        <button className="bg-orange-500 rounded-xl w-full text-white py-[5px] hover:bg-orange-400">Login</button>
                        <div className="flex gap-1">
                            <h1 className="text-gray-400">Do not have an account?</h1>
                            <h1 className="text-gray-400 hover:text-orange-500 cursor-pointer"> Create one</h1>
                        </div>
                    </div>

                </div>
            </div>
       
    )
}
export default Login;


