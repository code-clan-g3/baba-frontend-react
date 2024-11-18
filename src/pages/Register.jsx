import {baloon} from "../assets";
import {useState} from 'react';

const Register = () => {
    const [fullName, setFullName] = useState("");
  return (
    <section className="flex gap-10">
            <div className="bg-[#B0BAC366] 40% overflow-hidden w-[800px] h-screen md:flex hidden">
                <img src={baloon} alt="Baloon" className="md:w-[500px] md:flex hidden pt-[100px] m-auto" />
            </div>
            <div className="bg-[#FFF] w-[800px] px-[100px] pt-[200px]">
                <h1 className="font-bold text-[30px] text-center pb-[40px]">Create your Free account</h1>

                <form action="">
                    <div className="flex flex-col gap-[40px] w-[600px]">
                    <div className="flex flex-col text-left">
                        <label htmlFor="Full Name" className="text-[20px] font-[600] text-gray-600"> Full Name</label>
                        <input 
                        type="text" 
                        placeholder="Enter your Full Name here" 
                        className="bg-[#B0BAC366] rounded-[20px] h-[55px] text-gray-600 border-none outline-none px-[20px] text-[20px] placeholder:text-[20px] placeholder:font-[600] py-[15px] w-full" />
                    </div>
                    <div className="flex flex-col text-left">
                        <label htmlFor="Email" className="text-[20px] font-[600] text-gray-600"> Email</label>
                        <input 
                        type="email" 
                        placeholder="Enter your Full Name here" 
                        className="bg-[#B0BAC366] rounded-[20px] h-[55px] text-gray-600 border-none outline-none px-[20px] text-[20px] placeholder:text-[20px] placeholder:font-[600] py-[15px] w-full" />
                    </div>
                    <div className="flex flex-col text-left">
                        <label htmlFor="Full Name" className="text-[20px] font-[600] text-gray-600"> Password</label>
                        <input 
                        type="text" 
                        placeholder="Enter your Password" 
                        className="bg-[#B0BAC366] rounded-[20px] h-[55px] text-gray-600 border-none outline-none px-[20px] text-[20px] placeholder:text-[20px] placeholder:font-[600] py-[15px] w-full" />
                    </div>
                    <div className="flex flex-col text-left">
                        <label htmlFor="Full Name" className="text-[20px] font-[600] text-gray-600"> Confirm Password</label>
                        <input 
                        type="text" 
                        placeholder="Confirm your Password" 
                        className="bg-[#B0BAC366] rounded-[20px] h-[55px] text-gray-600 border-none outline-none px-[20px] text-[20px] placeholder:text-[20px] placeholder:font-[600] py-[15px] w-full" />
                    </div>
                    </div>
                    <button type="submit" className="text-white text-[25px] rounded-md bg-[#4F46E5] mt-[40px] text-center flex py-2 w-[300px] font-[600] m-auto justify-center mb-[50px]">Create Account</button>
                    <span className="mt-[50px] text-[20px]">Already have an account? <a href="#" className="text-blue-500">login</a></span>
                </form>
            </div>
        </section>
  )
}

export default Register